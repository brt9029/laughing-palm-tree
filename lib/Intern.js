const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, role, school){
        super(name, id, email, role);
        this.internSchool = school
    }

    getSchool() {
        return this.internSchool;
    }

    getRole() {
        return `Intern`
    }
}

module.exports = Intern;