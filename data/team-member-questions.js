const questions = [
  {
    type: 'list',
    name: 'type',
    message: 'What type of team member would you like to add?',
    choices: 'Engineer, Intern'.split(', '),
  },
  {
    type: 'input',
    name: 'name',
    message: a => `your ${a.type.toLowerCase()}'s name?`,
  },
  {
    type: 'input',
    name: 'id',
    message: a => `your ${a.type.toLowerCase()}'s id?`,
  },
  {
    type: 'input',
    name: 'email',
    message: a => `your ${a.type.toLowerCase()}'s email?`,
  },
  {
    type: 'input',
    name: 'extra',
    message: a => {
      if (a.type == 'Engineer') return `your engineer's github?`;
      if (a.type == 'Intern') return `your intern's school?`;
    },
  },
  {
    type: 'confirm',
    name: 'confirmAddTeamMember',
    message: 'Would you like to add another team member?',
    default: false,
  },
];

module.exports = questions;
