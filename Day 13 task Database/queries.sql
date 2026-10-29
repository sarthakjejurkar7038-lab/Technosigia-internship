SELECT s.first_name, s.last_name, c.course_name
FROM enrollments e
JOIN students s ON s.student_id = e.student_id
JOIN courses  c ON c.course_id  = e.course_id
ORDER BY s.first_name;

SELECT c.course_name, COUNT(e.student_id) AS total_students
FROM courses c
LEFT JOIN enrollments e ON e.course_id = c.course_id
GROUP BY c.course_name
ORDER BY c.course_name;

SELECT c.course_code, c.course_name, i.first_name || ' ' || i.last_name AS instructor
FROM courses c
JOIN instructors i ON i.instructor_id = c.instructor_id;