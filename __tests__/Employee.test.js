const Employee = require("../lib/Employee");

test('creates an employee', () => {
    const employee = new Employee('Byron', '333', 'byron@gmail.com', 'Employee');

    expect(employee.name).toBe('Byron');
    expect(employee.id).toBe('333');
    expect(employee.email).toBe('byron@gmail.com');
    expect(employee.getRole()).toBe('Employee')
});