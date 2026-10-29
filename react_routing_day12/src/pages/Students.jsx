import { Link } from "react-router-dom";
import studentsData from "../data/studentsData";

function Students() {
  return (
    <div className="container section">
      <div className="page-header">
        <h1>Students</h1>
        <p>{studentsData.length} registered students. Click a card to open the profile.</p>
      </div>

      <div className="grid-3">
        {studentsData.map((student) => (
          <Link to={`/students/${student.id}`} className="card student-card" key={student.id}>
            <div className="avatar">{student.name[0]}</div>
            <h3>{student.name}</h3>
            <p className="muted">{student.course}</p>
            <span className="link-text">View profile &rarr;</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Students;