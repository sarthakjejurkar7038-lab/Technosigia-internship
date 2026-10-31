SELECT 'departments' AS table_name, COUNT(*) AS total FROM departments
UNION ALL SELECT 'students', COUNT(*) FROM students
UNION ALL SELECT 'courses', COUNT(*) FROM courses
UNION ALL SELECT 'enrollments', COUNT(*) FROM enrollments;

SELECT city, COUNT(*) AS total_students
FROM students
GROUP BY city
HAVING COUNT(*) > 1
ORDER BY total_students DESC, city;

SELECT s.student_id, s.first_name, e.course_id
FROM students s
LEFT JOIN enrollments e ON e.student_id = s.student_id
WHERE e.enrollment_id IS NULL;

SELECT student_id, course_id, marks
FROM enrollments
WHERE marks > (SELECT AVG(marks) FROM enrollments)
ORDER BY marks DESC, student_id;