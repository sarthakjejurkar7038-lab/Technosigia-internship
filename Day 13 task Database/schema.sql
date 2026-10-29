CREATE TABLE departments (
    department_id    SERIAL PRIMARY KEY,
    department_name  VARCHAR(100) NOT NULL UNIQUE,
    office_location  VARCHAR(100)
);

CREATE TABLE instructors (
    instructor_id  SERIAL PRIMARY KEY,
    first_name     VARCHAR(50)  NOT NULL,
    last_name      VARCHAR(50)  NOT NULL,
    email          VARCHAR(100) NOT NULL UNIQUE,
    phone          VARCHAR(15),
    department_id  INT NOT NULL REFERENCES departments(department_id)
);

CREATE TABLE students (
    student_id      SERIAL PRIMARY KEY,
    first_name      VARCHAR(50)  NOT NULL,
    last_name       VARCHAR(50)  NOT NULL,
    email           VARCHAR(100) NOT NULL UNIQUE,
    phone           VARCHAR(15),
    date_of_birth   DATE,
    gender          VARCHAR(10),
    address         TEXT,
    admission_date  DATE DEFAULT CURRENT_DATE,
    department_id   INT NOT NULL REFERENCES departments(department_id)
);

CREATE TABLE courses (
    course_id      SERIAL PRIMARY KEY,
    course_code    VARCHAR(10)  NOT NULL UNIQUE,
    course_name    VARCHAR(100) NOT NULL,
    credits        INT NOT NULL CHECK (credits > 0),
    semester       INT,
    department_id  INT NOT NULL REFERENCES departments(department_id),
    instructor_id  INT NOT NULL REFERENCES instructors(instructor_id)
);

CREATE TABLE enrollments (
    enrollment_id    SERIAL PRIMARY KEY,
    student_id       INT NOT NULL REFERENCES students(student_id) ON DELETE CASCADE,
    course_id        INT NOT NULL REFERENCES courses(course_id) ON DELETE CASCADE,
    enrollment_date  DATE DEFAULT CURRENT_DATE,
    grade            VARCHAR(2),
    status           VARCHAR(20) DEFAULT 'Enrolled',
    UNIQUE (student_id, course_id)
);