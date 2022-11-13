const Manager = require('../lib/Manager');
const manager = new Manager('Banny', '10101001', 'email@gmail.com', '821');

test('test if we can get the constructor values for the manager object', () => {
    expect(manager.name).toBe('Banny');
    expect(manager.id).toBe('10101001');
    expect(manager.email).toBe('email@gmail.com');
    expect(manager.officeNumber).toBe('821');
});

test('test if we can get the name from the getName() method', () => {
    expect(manager.getName()).toBe('Banny');
});

test('test if we can get the id from the getId() method', () => {
    expect(manager.getId()).toBe('10101001');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(manager.getEmail()).toBe('email@gmail.com');
});

test('test if we can get the office number from the getOfficeNumber() method', () => {
    expect(manager.getOfficeNumber()).toBe('821');
});

test('test if we can get the role from the getRole() method', () => {
    expect(manager.getRole()).toBe('Manager');
});
