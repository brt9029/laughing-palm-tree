const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, role, gitUser) {
        super(name, id, email, role);
        this.engineerGithub = gitUser;
    }

    getGithub() {
        return "www.github.com/" + this.engineerGithub;
    }

    getRole() {
        return 'Engineer'
    }
}


module.exports = Engineer;