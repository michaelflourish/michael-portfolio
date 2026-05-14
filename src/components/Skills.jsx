import "./Skills.css";

function Skills() {
  const skills = [
    "JavaScript",
    "React",
    "HTML5",
    "CSS3",
    "Node.js",
    "REST APIs",
    "SQL",
    "SQL Server",
    "C# Fundamentals",
    ".NET Framework Fundamentals",
    "Git",
    "Agile/Scrum",
    "ServiceNow",
  ];

  return (
    <section id="skills" className="skills">
      <h2>Technical Skills</h2>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;