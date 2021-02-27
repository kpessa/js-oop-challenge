const inquirer = require('inquirer');
const manager_questions = require('./data/manager-questions');
const team_member_questions = require('./data/team-member-questions');
// const generatePage = require('./src/page-template');
// const { writeFile, copyFile } = require('./utils/generate-site');

const promptUser = () => inquirer.prompt(manager_questions);

const promptTeamMember = data => {
  if (!data.members) data.members = [];
  return inquirer.prompt(team_member_questions).then(teamMemberData => {
    data.members.push(teamMemberData);
    if (teamMemberData.confirmAddTeamMember) {
      return promptTeamMember(data);
    } else {
      return data;
    }
  });
};

promptUser()
  .then(promptTeamMember)
  .then(portfolioData => console.log(portfolioData))
  // TODO
  // .then(pageHTML => {
  //   return writeFile(pageHTML);
  // })
  // .then(writeFileResponse => {
  //   console.log(writeFileResponse);
  //   return copyFile();
  // })
  // .then(copyFileResponse => {
  //   console.log(copyFileResponse);
  // })
  .catch(err => {
    console.log(err);
  });
