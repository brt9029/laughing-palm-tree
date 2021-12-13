const Intern = require('../lib/Intern');

test('Create an intern for the team', () => {
    const intern = new Intern('test intern', '333', 'testintern@intern.com')

    expect(intern.name).toBe('test intern');
    expect(intern.id).toBe('333');
    expect(intern.email).toBe('testintern@intern.com');
})

test('intern role check', () => {
    const intern = new Intern('test intern', '333', 'testintern@intern.com', 'Intern')
    
    expect(intern.getRole()).toBe('Intern')
})

test('Intern school check', () => {
    const intern = new Intern('test intern', '333', 'testintern@intern.com', 'Intern', 'Michigan State University')

    expect(intern.getSchool()).toBe('Michigan State University');
})