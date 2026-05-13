import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "Responsive Portfolio Website",
      description:
        "Built a responsive React portfolio website using Vite, reusable components, and modern CSS.",
      tech: "React, JavaScript, HTML, CSS, Vite",
    },
    {
      title: "Enterprise Workflow Automation",
      description:
        "Developed workflow automation solutions with approvals, task generation, and request fulfillment logic.",
      tech: "ServiceNow, JavaScript, Flow Designer",
    },
    {
      title: "REST API Integration",
      description:
        "Supported enterprise integrations using REST APIs, JSON payloads, and backend data exchange.",
      tech: "REST APIs, JSON, JavaScript",
    },
  ];

  return (
    <section className="projects">
      <h2>Selected Projects</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.title}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <span>{project.tech}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;