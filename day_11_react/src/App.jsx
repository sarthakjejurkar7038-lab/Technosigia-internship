import { useState } from "react";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);
  const courses = ["Python", "Data Analytics", "Full Stack", "React"];

  const addStudent = (data) => {
    setStudents([...students, { id: Date.now(), ...data }]);
  };

  return (
    <div className="app">
      <header className="page-header">
        <h1>Student Registration</h1>
        <p>React form with state and validation</p>
      </header>

      <main className="layout">
        <StudentForm courses={courses} onAdd={addStudent} />
        <StudentList students={students} />
      </main>
    </div>
  );
}

export default App;