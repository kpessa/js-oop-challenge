const Engineer = require('../lib/Engineer');

const engineer = new Engineer('Kurt', 3, 'kurt@uhsinc.com', 'kpessa');
test('Check to see if engineer created successfully', () => {
  expect(engineer).toEqual(expect.any(Engineer));
  expect(engineer.name).toEqual(expect.any(String));
  expect(engineer.id).toEqual(expect.any(Number));
  expect(engineer.email).toEqual(expect.any(String));
  expect(engineer.github).toEqual(expect.any(String));
  expect(engineer.getGithub()).toEqual(engineer.github);
  expect(engineer.getRole()).toEqual('Engineer');
});
