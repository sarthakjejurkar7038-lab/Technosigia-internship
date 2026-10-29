import { useState } from "react";

function StudentForm({ courses, onAdd }) {
  const [form, setForm] = useState({ name: "", email: "", course: "" });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  // One handler updates any field (controlled components)
  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: "" });
    setSuccess(false);
  };

  // Basic validation
  const validate = () => {
    const newErrors = {};
    if (form.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters.";
    }
    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = "Enter a valid email address.";
    }
    if (!form.course) {
      newErrors.course = "Please select a course.";
    }
    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;   // stop if invalid

    onAdd(form);                                      // send data to App
    setForm({ name: "", email: "", course: "" });     // clear the form
    setSuccess(true);
  };

  return (
    <form className="card" onSubmit={handleSubmit} noValidate>
      <h2>Register Student</h2>

      <label htmlFor="name">Name</label>
      <input
        id="name"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Enter full name"
      />
      {errors.name && <p className="error">{errors.name}</p>}

      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Enter email"
      />
      {errors.email && <p className="error">{errors.email}</p>}

      <label htmlFor="course">Course</label>
      <select id="course" name="course" value={form.course} onChange={handleChange}>
        <option value="">-- Select course --</option>
        {courses.map((course) => (
          <option key={course} value={course}>{course}</option>
        ))}
      </select>
      {errors.course && <p className="error">{errors.course}</p>}

      <button type="submit">Register</button>
      {success && <p className="success">Registration successful!</p>}
    </form>
  );
}

export default StudentForm;