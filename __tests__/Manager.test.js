const Manager = require('../lib/Manager');

test('creates a manager entry', () => {
    const manager = new Manager('test manager', '333', 'testmanager@manager.com', '333-333-3333', 'Manager')

    expect(manager.name).toBe('test manager');
    expect(manager.id).toBe('333');
    expect(manager.email).toBe('testmanager@manager.com');
    expect(manager.officeNumber).toBe('333-333-3333');
    expect(manager.getRole()).toBe('Manager');
})