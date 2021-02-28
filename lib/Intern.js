const Employee = require('./Employee');

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
  getSchool() {
    return this.school;
  }
  getRole() {
    return 'Intern';
  }
  createHTML() {
    return `<h2>${this.name}</h2>
<h2>${this.getRole()}</h2>`;
  }
}

module.exports = Intern;
