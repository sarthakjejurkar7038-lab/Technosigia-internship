SELECT 'departments' AS table_name, COUNT(*) AS total FROM departments
UNION ALL SELECT 'students', COUNT(*) FROM students
UNION ALL SELECT 'courses', COUNT(*) FROM courses
UNION ALL SELECT 'enrollments', COUNT(*) FROM enrollments;

SELECT * FROM courses;

SELECT first_name, last_name, city FROM students;

SELECT first_name, date_of_birth FROM students ORDER BY date_of_birth;

SELECT student_id, course_id, marks
FROM enrollments
WHERE marks IS NOT NULL
ORDER BY marks DESC
LIMIT 3;

UPDATE students
SET city = 'Mumbai'
WHERE student_id = 3;

SELECT student_id, first_name, city FROM students WHERE student_id = 3;

DELETE FROM enrollments
WHERE marks IS NULL;

SELECT COUNT(*) AS enrollments_left FROM enrollments;

ALTER TABLE students ADD COLUMN address VARCHAR(100);

ALTER TABLE students DROP COLUMN address;

CREATE TABLE practice_notes (
    note_id    SERIAL PRIMARY KEY,
    note_text  VARCHAR(100) NOT NULL
);

DROP TABLE practice_notes;

INSERT INTO students (first_name, last_name, email, department_id)
VALUES ('Test', 'User', 'aarav@example.com', 1);


