const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
  getGithub() {
    return this.github;
  }
  getRole() {
    return 'Engineer';
  }
  createHTML() {
    return `<h2>${this.name}</h2>
<h2>${this.getRole()}</h2>`;
  }
}

module.exports = Engineer;
