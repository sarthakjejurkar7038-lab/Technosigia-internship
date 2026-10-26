import SkillCard from "./SkillCard";

function Home({ name, role, tagline, stats, skills }) {
  return (
    <main>
      <section id="home" className="hero">
        <div className="hero-content">
          <span className="tag">Welcome to my portfolio</span>
          <h1>
            Hi, I am <span className="gradient-text">{name}</span>
          </h1>
          <p className="role">{role}</p>
          <p className="tagline">{tagline}</p>
          <div className="hero-buttons">
            <a href="#skills" className="btn">View Skills</a>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
          </div>
        </div>
        <div className="avatar">{name[0]}</div>
      </section>

      <section className="stats">
        {stats.map(({ label, value }) => (
          <div key={label} className="stat">
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      <section id="skills" className="section">
        <h2>My Skills</h2>
        <p className="section-sub">Technologies I am learning and using</p>
        <div className="skill-grid">
          {skills.map((skill) => (
            <SkillCard key={skill.title} {...skill} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;