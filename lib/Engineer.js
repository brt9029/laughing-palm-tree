const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, gitUser) {
        super(name, id, email);
        this.engineerGithub = gitUser;
    }

    getGithub() {
        return `github.com/${this.engineerGithub}`
    }

    getRole() {
        return `Engineer`
    }
}


module.exports = Engineer;