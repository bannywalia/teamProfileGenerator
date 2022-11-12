const Intern = require('../lib/Intern');
const intern = new Intern('Banny', '5768098', 'email@email.com', 'Toronto');

test('test if we can get the constructor values for the engineer object', () => {
    expect(intern.name).toBe('Banny');
    expect(intern.id).toBe('5768098');
    expect(intern.email).toBe('email@email.com');
    expect(intern.school).toBe('Toronto');
});

test('test if we can get the name from the getName() method', () => {
    expect(intern.getName()).toBe('Banny');
});

test('test if we can get the id from the getId() method', () => {
    expect(intern.getId()).toBe('5768098');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(intern.getEmail()).toBe('email@email.com');
});

test('test if we can get the school name from the getSchool() method', () => {
    expect(intern.getSchool()).toBe('Toronto');
});

test('test if we can get the role from the getRole() method', () => {
    expect(intern.getRole()).toBe('Intern');
});