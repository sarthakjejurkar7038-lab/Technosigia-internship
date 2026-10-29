# Day 13 - Database Fundamentals: Student Management Database

A relational database design for managing students, courses, departments,
instructors and enrollments, built with PostgreSQL.

## Tables
- departments
- instructors
- students
- courses
- enrollments (junction table for the many-to-many link between students and courses)

## Files
- `schema.sql` - creates all tables with primary and foreign keys
- `data.sql` - sample data
- `queries.sql` - test queries
- `er-diagram.png` - ER diagram
- `screenshots/` - output screenshots

## How to run
1. Create a database named `student_management`.
2. Run `schema.sql`, then `data.sql`, then `queries.sql`.

## Tools
PostgreSQL, pgAdmin 4