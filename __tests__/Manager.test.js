const Manager = require('../lib/Manager');

const manager = new Manager('Leonid', 1, 'Leonid@uhsinc.com', '(561)798-8659');
test('Check to see if manager created successfully', () => {
  expect(manager).toEqual(expect.any(Manager));
  expect(manager.name).toEqual(expect.any(String));
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.email).toEqual(expect.any(String));
  expect(manager.officeNumber).toEqual(expect.any(String));
});
