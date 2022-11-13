const Employee = require('../lib/Employee');
const employee = new Employee('Banny', '5768098', 'email@email.com');

test('test if we can get the constructor values for the employee object', () => {
    expect(employee.name).toBe('Banny');
    expect(employee.id).toBe('5768098');
    expect(employee.email).toBe('email@email.com');
});

test('test if we can get the name from the getName() method', () => {
    expect(employee.getName()).toBe('Banny');
});

test('test if we can get the id from the getId() method', () => {
    expect(employee.getId()).toBe('5768098');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(employee.getEmail()).toBe('email@email.com');
});

test('test if we can get the role from the getRole() method', () => {
    expect(employee.getRole()).toBe('Employee');
});