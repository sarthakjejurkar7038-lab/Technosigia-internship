function SkillCard({ icon, title, text }) {
  return (
    <div className="skill-card">
      <div className="skill-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

export default SkillCard;