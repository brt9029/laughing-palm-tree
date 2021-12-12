const inquirer = require('inquirer');
const fs = require('fs')
const generateEmployeeCard = require('./src/page-template');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const employees = [];

function initialPrompt() {
    return inquirer
        .prompt([
            {
                type: 'text',
                name: 'managerName',
                message: "What is the Team Manager's name?"
            },
            {
                type: 'text',
                name: 'managerId',
                message: 'Please enter your employee ID'
            },
            {
                type: 'text',
                name: 'managerEmail',
                message: 'Please enter your e-mail address'
            },
            {
                type: 'text',
                name: 'officeNumber',
                message: 'Please enter your office number'
            }
        ])
        .then((managerInfo) => {
            const manager = new Manager(managerInfo.managerName, managerInfo.managerId, managerInfo.managerEmail, managerInfo.officeNumber);
            employees.push(manager)
            return addMore()
        })
}

function engineerQuestions() {
    return inquirer
        .prompt([
            {
                type: 'text',
                name: 'engineerName',
                message: "Please enter your name"
            },
            {
                type: 'text',
                name: 'engineerId',
                message: "Please enter your employee ID"
            },
            {
                type: 'text',
                name: 'engineerEmail',
                message: "Please enter your e-mail address"
            },
            {
                type: 'text',
                name: 'engineerGithub',
                message: "Please enter your GitHub username"
            }
        ])
        .then(data => {
            const engineer = new Engineer(data.engineerName, data.engineerId, data.engineerEmail, data.engineerGithub)
            employees.push(engineer);
            console.log('Engineer added!');
            return addMore();
        })
}

function internQuestions() {
    return inquirer
        .prompt([
            {
                type: 'text',
                name: 'internName',
                message: "Please enter your name"
            },
            {
                type: 'text',
                name: 'internId',
                message: "Please enter your employee ID"
            },
            {
                type: 'text',
                name: 'internEmail',
                message: "Please enter your e-mail address"
            },
            {
                type: 'text',
                name: 'internSchool',
                message: "Please enter the school you are currently attending"
            }
        ])
        .then(data => {
            const intern = new Intern(data.internName, data.internId, data.internEmail, data.internSchool)
            employees.push(intern);
            console.log("Intern added!");
            return addMore();
        })
}

function addMore() {
    return inquirer
        .prompt({
            type: 'list',
            name: 'addTeam',
            message: "Select a Team member type to add",
            choices: ['Engineer', 'Intern', 'Finished']
        })
        .then(selection => {
            console.log(selection.addTeam);
            if(selection.addTeam === 'Engineer') {
                console.log('-------------------------');
                return engineerQuestions();
            }
            if(selection.addTeam === 'Intern') {
                console.log('-------------------------');
                return internQuestions();
            }
            if(selection.addTeam === 'Finished') {
                console.log('-------------------------');
                return employees;
            }
        })
}

function generateFile(pageHTML) {
    fs.writeFile('./dist/index.html', pageHTML, err => {
        if(err) console.log(err);
    })
}

initialPrompt()
    .then((employeeInfo) => {
        return generateEmployeeCard(employeeInfo);
    })
    .then(pageHTML => {
        return generateFile(pageHTML);
    })