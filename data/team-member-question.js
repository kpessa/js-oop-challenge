const questions = [
  {
    type: 'list',
    name: 'type',
    message: 'What type of team member would you like to add?',
    choices: `Engineer, Intern, I'm finished building my team`.split(', '),
  },
];

module.exports = questions;
