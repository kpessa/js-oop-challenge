const fs = require('fs');
const inquirer = require('inquirer');
const manager_questions = require('./data/manager-questions');
const team_member_question = require('./data/team-member-question');
const engineer_questions = require('./data/engineer-questions');
const intern_questions = require('./data/intern-questions');
const team_member_questions = require('./data/team-member-questions');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const testData = require('./data/testData');
// TODO: const writeFile = require('./utils/writeFile');

const promptUser = () => inquirer.prompt(manager_questions);

const promptEngineer = data => {
  if (!data.members) data.members = [];
  inquirer.prompt(engineer_questions).then(answers => {
    answers.type = 'Engineer';
    data.members.push(answers);
    promptTeamMember(data);
  });
};

const promptIntern = data => {
  if (!data.members) data.members = [];
  inquirer.prompt(intern_questions).then(answers => {
    answers.type = 'Intern';
    data.members.push(answers);
    promptTeamMember(data);
  });
};

const promptTeamMember = data => {
  if (!data.members) data.members = [];
  return inquirer.prompt(team_member_question).then(a => {
    if (a.type == 'Engineer') return promptEngineer(data);
    else if (a.type === 'Intern') return promptIntern(data);
    else createWebpage(data);
  });
};

createHTML = x => {
  return `<div class="card shadow">
  <div class="card-header">
    <h2>${x.name}</h2>
    <h2>${x.getRole() == 'Manager' ? `<i class="fas fa-mug-hot"></i>` : x.getRole() == 'Engineer' ? `<i class="fas fa-glasses"></i>` : `<i class="fas fa-user-graduate"></i>`} ${x.getRole()}</h2>
  </div>
  <ul class="list-group">
    <li class="list-group-item">ID: ${x.id}</li>
    <li class="list-group-item">Email: <a href="mailto:${x.email}">${x.email}</a></li>
    <li class="list-group-item">${x.getRole() == 'Manager' ? 'Office Number' : x.getRole() == 'Engineer' ? 'Github' : 'School'}: ${
    x.getRole() == 'Manager' ? x.officeNumber : x.getRole() == 'Engineer' ? `<a target="_blank" href="https://www.github.com/` + x.getGithub() + `">${x.getGithub()}</a>` : x.getSchool()
  }</li>
  </ul>
</div>`;
};

makeObjects = d => {
  let members = [];

  let { name, id, email, number } = d;
  let manager = new Manager(name, id, email, number);
  // console.table(manager);
  members.push(manager);

  d.members.forEach(m => {
    let { name, id, email, extra } = m;
    if (m.type === 'Engineer') {
      let engineer = new Engineer(name, id, email, extra);
      // console.table(engineer);
      members.push(engineer);
    } else if (m.type === 'Intern') {
      let intern = new Intern(name, id, email, extra);
      // console.table(intern);
      members.push(intern);
    }
  });

  return members;
};

function createWebpage(data) {
  // console.log(data);
  let members = makeObjects(data);
  let html = ``;
  members.forEach(m => (html += createHTML(m)));
  let template = fs.readFileSync('./src/template.html', { encoding: 'utf-8' });
  template = template.replace('id="members">', `id="members">` + html);
  fs.writeFileSync('./dist/index.html', template);
  console.log('Dynamic HTML published at -> ./dist/index.html');
}

function init() {
  const args = process.argv.slice(2, process.argv.length);

  if (args.includes('-t')) {
    let members = makeObjects(testData);
    let html = ``;
    members.forEach(m => (html += createHTML(m)));
    let template = fs.readFileSync('./src/template.html', { encoding: 'utf-8' });
    template = template.replace('id="members">', `id="members">` + html);
    fs.writeFileSync('./dist/index.html', template);
  } else
    promptUser()
      .then(promptTeamMember)
      .catch(err => {
        console.log(err);
      });
}

// Function call to initialize app
init();
