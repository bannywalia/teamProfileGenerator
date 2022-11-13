const Engineer = require('../lib/Engineer');
const engineer = new Engineer('Banny', '5768098', 'email@email.com', 'fdqew');

test('test if we can get the constructor values for the engineer object', () => {
    expect(engineer.name).toBe('Banny');
    expect(engineer.id).toBe('5768098');
    expect(engineer.email).toBe('email@email.com');
    expect(engineer.githubUsername).toBe('fdqew');
});

test('test if we can get the name from the getName() method', () => {
    expect(engineer.getName()).toBe('Banny');
});

test('test if we can get the id from the getId() method', () => {
    expect(engineer.getId()).toBe('5768098');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(engineer.getEmail()).toBe('email@email.com');
});

test('test if we can get the github username from the getGithub() method', () => {
    expect(engineer.getGithub()).toBe('fdqew');
});

test('test if we can get the role from the getRole() method', () => {
    expect(engineer.getRole()).toBe('Engineer');
});