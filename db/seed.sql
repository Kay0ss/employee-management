INSERT INTO department (name)
VALUES ("Front Office"),
        ("Shop"),
        ("Parts");

INSERT INTO roles (title, salary, department_id)
    VALUES ("Manager", 75000, 1 ),
           ("Technician", 33000, 3 ),
           ("Mechanic", 45000, 2 );

INSERT INTO employee (first_name, last_name, role_id, manager_id)
    VARCHAR ("Jack", "Theisen", 2, 1),
            ("Johnny", "Depp", 2, null),
            ("Jose", "Lopez", 3, 2 ),
            ("Mark", "Johnson", 3, 1),
            ("Mara", "Buttscratcher", 2, null),
            ("Rodney", "Copperbottom", 2, 1),
            ("Mike", "Tyson", 3, 1)
            