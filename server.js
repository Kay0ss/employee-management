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

const addEmployeeQuestions = [

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

}

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





