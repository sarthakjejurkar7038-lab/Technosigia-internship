INSERT INTO departments (department_name, office_location) VALUES
  ('Computer Science', 'Block A'),
  ('Data Science', 'Block B'),
  ('Electronics', 'Block C');

INSERT INTO students (first_name, last_name, email, phone, city, date_of_birth, admission_date, department_id) VALUES
  ('Aarav', 'Patil', 'aarav@example.com', '9000000011', 'Pune', '2004-03-15', '2022-07-01', 1),
  ('Diya', 'Sharma', 'diya@example.com', '9000000012', 'Mumbai', '2004-07-22', '2022-07-01', 1),
  ('Rohan', 'Mehta', 'rohan@example.com', '9000000013', 'Pune', '2003-11-05', '2021-07-01', 2),
  ('Sneha', 'Kulkarni', 'sneha@example.com', '9000000014', 'Nagpur', '2004-01-30', '2022-07-01', 2),
  ('Karan', 'Singh', 'karan@example.com', '9000000015', 'Delhi', '2003-09-12', '2021-07-01', 1),
  ('Isha', 'Kapoor', 'isha@example.com', '9000000016', 'Pune', '2005-02-18', '2023-07-01', 2),
  ('Vikram', 'Rao', 'vikram@example.com', '9000000017', 'Mumbai', '2004-05-09', '2022-07-01', 1),
  ('Anjali', 'Desai', 'anjali@example.com', '9000000018', 'Nashik', '2005-08-25', '2023-07-01', 2),
  ('Rahul', 'Verma', 'rahul@example.com', '9000000019', 'Delhi', '2003-12-03', '2021-07-01', 1),
  ('Pooja', 'Nair', 'pooja@example.com', '9000000020', 'Pune', '2004-10-11', '2022-07-01', 2),
  ('Neha', 'Iyer', 'neha@example.com', '9000000021', 'Nagpur', '2004-06-14', '2022-07-01', 2);

INSERT INTO courses (course_code, course_name, credits, fees, department_id) VALUES
  ('CS101', 'Python Programming', 4, 15000, 1),
  ('CS102', 'Database Systems', 3, 12000, 1),
  ('CS103', 'Web Development', 4, 14000, 1),
  ('DS201', 'Data Analytics', 4, 16000, 2),
  ('DS202', 'Machine Learning', 3, 18000, 2),
  ('DS203', 'Statistics', 2, 9000, 2),
  ('CS104', 'Cloud Computing', 3, 13000, 1);

INSERT INTO enrollments (student_id, course_id, marks) VALUES
  (1, 1, 85), (1, 2, 78), (2, 1, 92), (2, 3, NULL),
  (3, 4, 67), (3, 5, 74), (4, 4, 88), (5, 1, 55),
  (5, 2, 61), (6, 4, NULL), (7, 3, 70), (8, 5, 81),
  (9, 2, 48), (10, 6, 90);