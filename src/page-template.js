function generateManagerCard(manager) {
    return `
        <div class="card col-4">
            <h5 class="card-title text-center pt-2">${manager.name}</h5>
                <div class="card-body">
                    <h6 class="card-subtitle mb-2 text-muted text-center">${manager.getRole()}</h6>
                        <div class="card-body bg-secondary">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">ID: ${manager.id}</li>
                                <li class="list-group-item">Email: ${manager.email}</li>
                                <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
                            </ul>
                        </div>
                </div>
         </div>
    `
}

function generateEngineerCard(engineer) {
    return `
    <div class="card col-4">
            <h5 class="card-title text-center pt-2">${engineer.name}</h5>
                <div class="card-body">
                    <h6 class="card-subtitle mb-2 text-muted text-center">${engineer.getRole()}</h6>
                        <div class="card-body bg-secondary">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">ID: ${engineer.id}</li>
                                <li class="list-group-item">Email: ${engineer.email}</li>
                                <li class="list-group-item">GitHub: <a href="www.github.com/${engineer.engineerGithub}">${engineer.engineerGithub}</a></li>
                            </ul>
                        </div>
                </div>
        </div>
    `
}

function generateInternCard(intern) {
    return `
    <div class="card col-4">
            <h5 class="card-title text-center pt-2">${intern.name}</h5>
                <div class="card-body">
                    <h6 class="card-subtitle mb-2 text-muted text-center">${intern.getRole()}</h6>
                        <div class="card-body bg-secondary">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">ID: ${intern.id}</li>
                                <li class="list-group-item">Email: ${intern.email}</li>
                                <li class="list-group-item">School: ${intern.internSchool}</li>
                            </ul>
                        </div>
                </div>
        </div>
    `
}

module.exports = teamInfo => {
    let team = [];
    teamInfo.forEach(employee => {
        if(employee.getRole() === 'Manager') {
            team += generateManagerCard(employee)
        } if(employee.getRole() === 'Engineer') {
            team += generateEngineerCard(employee)
        } if(employee.getRole() === 'Intern') {
            team += generateInternCard(employee)
        }
    })
    return console.log(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <title>Team Profile</title>
    </head>
    <body>
        <header>
            <h1 class="bg-primary text-light d-flex justify-content-center pb-2">My Team</h1>
        </header>
        <main class="container">
            ${team}
        </main>
    </body>
    </html>
    `)
}