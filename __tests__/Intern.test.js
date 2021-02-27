const Intern = require('../lib/Intern');

const intern = new Intern('Kurt', 3, 'kurt@uhsinc.com', 'UCF');
test('Check to see if intern created successfully', () => {
  expect(intern).toEqual(expect.any(Intern));
  expect(intern.name).toEqual(expect.any(String));
  expect(intern.id).toEqual(expect.any(Number));
  expect(intern.email).toEqual(expect.any(String));
  expect(intern.school).toEqual(expect.any(String));
  expect(intern.getSchool()).toEqual(intern.school);
});
