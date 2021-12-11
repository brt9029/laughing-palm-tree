const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, role, gitUser) {
        super(name, id, email, role);
        this.gitUser = gitUser;
    }

    getGithub() {
        return `github.com/${this.gitUser}`
    }

    getRole() {
        return `Engineer`
    }
}


module.exports = Engineer;