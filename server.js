const inquirer = require("inquirer");
const mysql = require("mysql2");
const cTable = require("console.table");

const db = mysql.createConnection (
    {
        host: "localhost",
        user: "root",
        password: "password",
        database: "business_db"
    },
    console.log("Connected to server!")
);


// Initial question
const initialQuestion = [
    {
        type: "list",
        message: "What would you like to do?",
        name: "initQuestion",
        choices: ["View All Employees", "Add Employee", "Update Employee Role", "View All Roles", "Add Role", "View All Departments", "Add Department", "Exit Application"]
    }
]


const addRoleQuestions = [

]

const addDepartmentQuestions = [

]


// Question sets
start = () => {
    inquirer
        .prompt(initialQuestion)

        .then(response => {
            //Routes user to next function based on answer
            if (response.initQuestion === "View All Employees"){
                viewAllEmployees();
            }
            else if (response.initQuestion === "Add Employee"){
                addEmployee();
            }
            else if (response.initQuestion === "Update Employee Role"){
                updateEmployeeRole();
            }
            else if (response.initQuestion === "View All Roles"){
                viewAllRoles();
            }
            else if (response.initQuestion === "Add Role"){
                addRole();
            }
            else if (response.initQuestion === "View All Departments"){
                viewAllDepartments();
            }
            else if (response.initQuestion === "Add Department"){
                addDepartment();
            }
            else return;
        })
}

// Shows all employees in the db
viewAllEmployees = () => {
    db.query(`SELECT * FROM employee`, (err, res) => {
        if (err) return res.status(400).console.log(err)
        console.table(res);
        start();
    })

};

// Adds an employees in the db
addEmployee = () => {

    const getRolesFromDB = new Promise( (resolve, reject) => {
        db.query(`SELECT title, id FROM role`, (err, res) => {
            if (err) return res.status(400).console.log(err)

            if (res) {
                resolve(res)



            
            } else {
                reject("Something went wrong");
            }
        })
    })


        const getManagersFromDB = new Promise( (resolve, reject) => {
            db.query(`SELECT first_name, last_name, id FROM employee WHERE manager_id is null`, (err, res) => {
                if (err) return res.status(400).console.log(err)

                if (res) {
                    resolve(res)

                } else {
                    reject("something went wrong");
                }
            })
        })

        Promise.all([getRolesFromDB, getManagersFromDB])
        .then((values) => {

            let roleTitles = values[0].map(function(results) {
                return results.title;
            })

            let managers = values[1].map(function(manager) {
                return manager.first_name + " " + manager.last_name; })
            
        const addEmployeeQuestions = [
            {
                type: "input",
                message: "What is the employees first name?",
                name: "firstName"
            },
            {
                type: "input",
                message: "What is the employees last name?",
                name: "lastName"
            },
            {
                type: "list",
                message: "What is the employees role?",
                choices: roleTitles
            },
            {
                type: "list",
                message: "Who is the employee's manager?",
                name: "employeeManager",
                choices: managers
            }
        ]

        inquirer
            .prompt(addEmployeeQuestions)

            .then(response => {
                let chosenRole = response.employeeRole;
                let chosenManager = response.employeeManager;

                let roleIndexNumber = values[0].findIndex(function(role) {
                    return chosenRole === role.title;
                })

                let thisRoleId = values[0] [roleIndexNumber].id;

                let managerIndexNumber = values[1].findIndex(function(manager) {
                    return chosenMAnager === manager.first_name + " " + manager.last_name;
                })

                let thisMAnagerID = values[1] [managerIndexNumber].id;

                db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)`, [response.firstName, response.lastName, thisRoleId, thisManagerId], (err, results) => {
                    if (err) return res.status(400).json(err);


                console.log("Added " + response.firstName + " " + response.lastName + " to the database.")

                start();

                })
            })
    })
    .catch( err => console.log(err))
};

updateEmployeeRole = () => {

}

//shows all roles
viewAllRoles = () => {
    db.query(`SELECT * FROM role`, (err, res) => {
        if (err) return res.status(400).console.log(err)
        console.table(res);
        start()
    })
}

//adds a role to the db
addRole = () => {

}

// shows all departments in the db
viewAllDepartments = () => {
    db.query(`SELECT * FROM department`, (err, res) => {
        if (err) return res.status(400).console.log(err)
        console.table(res);
        start()
    })
};

//ads department to the db
addDepartment = () => {

}

start();





