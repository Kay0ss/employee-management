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


// Question sets
start = () => {
    inquirer
        .prompt(initialQuestion)

        .then(response => {
            //Routes user to next function based on answer
            if (response === "View All Employees"){
                viewAllEmployees();
            }
            else if (response === "Add Employee"){
                addEmployee();
            }
            else if (response === "Update Employee Role"){
                updateEmployeeRole();
            }
            else if (response === "View All Roles"){
                viewAllRoles();
            }
            else if (response === "Add Role"){
                addRole();
            }
            else if (response === "View All Departments"){
                viewAllDepartments();
            }
            else if (response === "Add Department"){
                addDepartment();
            }
            else return;
        })
}

// Shows all employees in the db
viewAllEmployees = () => {


}

// Adds an employees in the db
addEmployee = () => {

}

updateEmployeeRole = () => {

}

//shows all roles
viewAllRoles = () => {

}

//adds a role to the db
addRole = () => {

}

// shows all departments in the db
viewAllDepartments = () => {

}

//ads department to the db
addDepartment = () => {

}





