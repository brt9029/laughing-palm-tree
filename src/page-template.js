function generateEmployeeCard(employees){
    for(let i = 0; i < employees.length; i++) {
        if(employees[i].getRole() === 'Manager') {
        generateManagerCard(employees[i]);
        }
    }

}

function generateManagerCard(manager) {
    return console.log(manager);
    return `
    <div class="card col-4">
            <h5 class="card-title text-center pt-2">${manager.name}</h5>
                <div class="card-body">
                    <h6 class="card-subtitle mb-2 text-muted text-center">${manager.gerRole()}</h6>
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
    return console.log(engineer);
}

function generateInternCard(intern) {
    return console.log(intern);
}

module.exports = teamInfo => {

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
            ${generateEmployeeCard(teamInfo)}
        </main>
    </body>
    </html>
    `)
}