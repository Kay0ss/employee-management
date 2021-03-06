

-- View all employees --
SELECT employee.id, first_name, last_name, title, department.name AS department, salary, manager_id
FROM employeeJOIN role ON employee.role_id = rolew.idJOIN department ON role.department_id = department.id;
JOIN role ON employee.role_id = role.id
JOIN department ON role.department_id = department.id;

SELECT employee.id, employee.first_name, employee.last_name, title, department.name AS department, salary, CONCAT(e.first_name, ' ', e.last_name) AS manager
FROM employee
JOIN role ON employee.role_id = role.id
JOIN department ON role.department_id = department.id
LEFT JOIN employee e ON employee.manager_id = e.id;

--View all managers with ids--
SELECT id, first_name, last_name FROM employee WHERE manager_is NULL;

-- Add employee --
INSERT INTO employee (first_name, last_name, role_id, manager_id)
    VALUES 
        (first_name, last_name, role_id, manager_id);

-- Update employee role
UPDATE employee
SET role_id =
WHERE id = ;

-- View all roles --
SELECT title, role.id AS roel_ id, department.name AS department, salary
FROM role
JOIN department ON role.department_id = department.id;

-- Add role --
INSERT INTO role (title, salary, department_id)
    VALUES 
        (title, salary, department_id);

-- View all departments --
SELECT * department;

-- Add department --
INSERT INTO department (name)
    VALUES
        (name);
