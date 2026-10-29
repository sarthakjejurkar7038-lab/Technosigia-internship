function StudentList({ students }) {
  return (
    <section className="card">
      <h2>Registered Students ({students.length})</h2>

      {students.length === 0 ? (
        <p className="empty">No students registered yet.</p>
      ) : (
        <ul className="list">
          {students.map((student) => (
            <li key={student.id} className="item">
              <div className="avatar">{student.name[0].toUpperCase()}</div>
              <div className="details">
                <strong>{student.name}</strong>
                <span>{student.email}</span>
              </div>
              <em className="course">{student.course}</em>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default StudentList;