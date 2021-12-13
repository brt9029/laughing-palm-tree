const Engineer = require('../lib/Engineer');

test('Create an engineer for the team', () => {
    const engineer = new Engineer('test engineer', '333', 'testengineer@engineer.com')

    expect(engineer.name).toBe('test engineer');
    expect(engineer.id).toBe('333');
    expect(engineer.email).toBe('testengineer@engineer.com');
})

test('Github link for Engineer', () => {
    const engineer = new Engineer('test engineer', '333', 'testengineer@engineer.com', 'Engineer', 'tengine123')

    expect(engineer.getGithub()).toBe('www.github.com/tengine123')
})

test('Engineer role test', () => {
    const engineer = new Engineer('test engineer', '333', 'testengineer@engineer.com', 'Engineer', 'tengine123')

    expect(engineer.getRole()).toBe('Engineer');
})