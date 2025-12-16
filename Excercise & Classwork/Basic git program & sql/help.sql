mysql -u root -p
-- enter passsword here
-- this connects with the mysql server

-- to display all the existing databases
SHOW DATABASES;

-- to choose the database for use
USE airbnb_db;

-- to check all the tables
SHOW TABLES;

-- create a new database
CREATE DATABASE internship_db;

USE internship_db;

-- create a table
CREATE TABLE demo(
    col1 INT,
    col2 DOUBLE,
    col3 VARCHAR(10)
);

-- to check the table structure
DESC demo;

-- create a table to store students with the cols as rollno,name,email,
-- regDate, course (mern,webpython,java)
CREATE TABLE students(
    rollno INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(20),
    email VARCHAR(50),
    regDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    course ENUM("MERN","WEBPYTHON","JAVA")
);

DROP TABLE students;

-- Add a student record
INSERT INTO students(name,email,course) VALUES("Anil","anil@gmail.com","MERN");

-- display all student records
SELECT * FROM students;

INSERT INTO students(name,email,course) VALUES("Mukesh","mukesh@gmail.com","WEBPYTHON");
INSERT INTO students(name,email,course) VALUES("Ramesh","ramesh@gmail.com","JAVA");
INSERT INTO students(name,email,course) VALUES("Suresh","sure@gmail.com","JAVA");

-- update the email of suresh
UPDATE students SET email="suresh@gmail.com" WHERE rollno = 4;

-- remove the student suresh
DELETE FROM students WHERE rollno=4;

-- Where clause
-- display all the emps working as manager
SELECT * FROM emp WHERE job = "MANAGER";

-- display all the emp earning more than 2000
SELECT * FROM emp WHERE sal>2000;

-- display all the emps working as manager and sal > 2500
SELECT * FROM emp WHERE job="MANAGER" AND sal>2500;

-- display all the emp with their salaries in desc order
-- Order by 
SELECT * FROM emp ORDER BY sal;
SELECT * FROM emp ORDER BY sal DESC;

-- display all emps from dept 10 with sal in desc order
SELECT * FROM emp WHERE deptno=10 ORDER BY sal DESC;

-- display name,empno,tal and dist of all emps
SELECT ename,tal,dist FROM emps INNER JOIN addr ON emps.empno = addr.empno;
SELECT empno,ename,tal,dist FROM emps INNER JOIN addr ON emps.empno = addr.empno;

SELECT e.empno,ename,tal,dist FROM emps e INNER JOIN addr a ON e.empno = a.empno;

-- display the emps from satara district
SELECT e.empno,ename,tal,dist FROM emps e 
INNER JOIN addr a ON e.empno = a.empno
WHERE a.dist = "SATARA";

-- display the ename and dname
SELECT e.ename,d.dname FROM emps e
 JOIN depts d ON e.deptno = d.deptno; 
