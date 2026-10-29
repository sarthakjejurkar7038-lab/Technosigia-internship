INSERT INTO departments (department_name, office_location) VALUES
  ('Computer Science', 'Block A'),
  ('Data Science', 'Block B');

INSERT INTO instructors (first_name, last_name, email, phone, department_id) VALUES
  ('Sarthak', 'Jejurkar', 'sart.k@example.com', '9000000001', 1),
  ('Meera', 'Joshi', 'meera.j@example.com', '9000000002', 2);

INSERT INTO students (first_name, last_name, email, phone, date_of_birth, gender, department_id) VALUES
  ('Sarthak', 'Jejurkar', 'sarthak@example.com', '9000000011', '2004-03-15', 'Male', 1),
  ('Diya', 'Sharma', 'diya@example.com', '9000000012', '2004-07-22', 'Female', 1),
  ('Rohan', 'Mehta', 'rohan@example.com', '9000000013', '2003-11-05', 'Male', 2);

INSERT INTO courses (course_code, course_name, credits, semester, department_id, instructor_id) VALUES
  ('CS101', 'Python Full Stack', 4, 1, 1, 1),
  ('CS102', 'Data Engineer', 3, 2, 1, 1),
  ('DS201', 'Data Analytics', 4, 3, 2, 2);

INSERT INTO enrollments (student_id, course_id) VALUES
  (1, 1), (1, 2), (2, 1), (3, 3);