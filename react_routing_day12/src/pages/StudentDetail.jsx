import { useParams, Link } from "react-router-dom";
import studentsData from "../data/studentsData";

function StudentDetail() {
  const { id } = useParams();
  const student = studentsData.find((s) => s.id === Number(id));

  if (!student) {
    return (
      <div className="container section">
        <div className="card empty-state">
          <h1>Student not found</h1>
          <p className="muted">No student exists with ID {id}.</p>
          <Link to="/students" className="btn btn-primary">Back to Students</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container section">
      <p className="breadcrumb">
        <Link to="/students">Students</Link> / <span>{student.name}</span>
      </p>

      <article className="card profile">
        <div className="avatar avatar-lg">{student.name[0]}</div>
        <div className="profile-info">
          <h1>{student.name}</h1>
          <p className="muted">Student ID: {student.id}</p>

          <dl className="details">
            <div><dt>Course</dt><dd>{student.course}</dd></div>
            <div><dt>Email</dt><dd>{student.email}</dd></div>
          </dl>

          <div className="tags">
            {student.skills.map((skill) => (
              <span className="tag" key={skill}>{skill}</span>
            ))}
          </div>

          <Link to="/students" className="btn btn-outline">&larr; Back to Students</Link>
        </div>
      </article>
    </div>
  );
}

export default StudentDetail;