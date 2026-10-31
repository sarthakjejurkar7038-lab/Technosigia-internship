DROP TABLE IF EXISTS enrollments;
DROP TABLE IF EXISTS courses;
DROP TABLE IF EXISTS students;
DROP TABLE IF EXISTS departments;

CREATE TABLE departments (
    department_id    SERIAL PRIMARY KEY,
    department_name  VARCHAR(100) NOT NULL UNIQUE,
    office_location  VARCHAR(100)
);

CREATE TABLE students (
    student_id      SERIAL PRIMARY KEY,
    first_name      VARCHAR(50)  NOT NULL,
    last_name       VARCHAR(50)  NOT NULL,
    email           VARCHAR(100) NOT NULL UNIQUE,
    phone           VARCHAR(15),
    city            VARCHAR(50),
    date_of_birth   DATE,
    admission_date  DATE DEFAULT CURRENT_DATE,
    department_id   INT NOT NULL REFERENCES departments(department_id)
);

CREATE TABLE courses (
    course_id      SERIAL PRIMARY KEY,
    course_code    VARCHAR(10)  NOT NULL UNIQUE,
    course_name    VARCHAR(100) NOT NULL,
    credits        INT NOT NULL CHECK (credits > 0),
    fees           INT NOT NULL CHECK (fees >= 0),
    department_id  INT NOT NULL REFERENCES departments(department_id)
);

CREATE TABLE enrollments (
    enrollment_id    SERIAL PRIMARY KEY,
    student_id       INT NOT NULL REFERENCES students(student_id) ON DELETE CASCADE,
    course_id        INT NOT NULL REFERENCES courses(course_id) ON DELETE CASCADE,
    enrollment_date  DATE DEFAULT CURRENT_DATE,
    marks            INT CHECK (marks BETWEEN 0 AND 100),
    UNIQUE (student_id, course_id)
);