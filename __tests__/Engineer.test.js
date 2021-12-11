const Engineer = require('../lib/Engineer');

test('create an engineer for the team', () => {
    const engineer = new Engineer('test engineer', '333', 'testengineer@engineer.com', 'Engineer', 'tengine123', 'github.com/tengine123')

    expect(engineer.name).toBe('test engineer');
    expect(engineer.id).toBe('333');
    expect(engineer.email).toBe('testengineer@engineer.com');
    expect(engineer.getRole()).toBe('Engineer');
    expect(engineer.gitUser).toBe('tengine123');
    expect(engineer.getGithub()).toBe('github.com/tengine123');
})