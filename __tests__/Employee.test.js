const { TestScheduler } = require('jest');
const Employee = require('../lib/Employee');
const employee = new Employee('Kurt', 1, 'kpessa@gmail.com');

test('Check to see if employee object was created successfully.', () => {
  expect(employee).toEqual(expect.any(Employee));
});
test('Check to see if employee name is a string.', () => {
  expect(employee.name).toEqual(expect.any(String));
});
test('Check to see if employee id is a number.', () => {
  expect(employee.id).toEqual(expect.any(Number));
});
test('Check to see if employee email is a string.', () => {
  expect(employee.email).toEqual(expect.any(String));
});
