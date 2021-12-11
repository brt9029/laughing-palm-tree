const Intern = require('../lib/Intern');

test('create an intern for the team', () => {
    const intern = new Intern('test intern', '333', 'testintern@intern.com', 'Intern', 'Michigan State University')

    expect(intern.name).toBe('test intern');
    expect(intern.id).toBe('333');
    expect(intern.email).toBe('testintern@intern.com');
    expect(intern.getRole()).toBe('Intern');
    expect(intern.school).toBe('Michigan State University');
})