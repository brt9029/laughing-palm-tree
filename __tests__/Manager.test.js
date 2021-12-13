const Manager = require('../lib/Manager');

test('Creates a manager for the team', () => {
    const manager = new Manager('test manager', '333', 'testmanager@manager.com')

    expect(manager.name).toBe('test manager');
    expect(manager.id).toBe('333');
    expect(manager.email).toBe('testmanager@manager.com');
})

test('Test manager phone number', () => {
    const manager = new Manager('test manager', '333', 'testmanager@manager.com', '333-333-3333')

    expect(manager.officeNumber).toBe('333-333-3333');
})

test('Test manager role', () => {
    const manager = new Manager('test manager', '333', 'testmanager@manager.com', '333-333-3333', 'Manager')
    expect(manager.getRole()).toBe('Manager');
})