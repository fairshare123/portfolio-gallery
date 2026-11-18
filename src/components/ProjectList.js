import ProjectCard from "./ProjectCard";

// Turns an array of projects into a grid of ProjectCards.
// .map() creates one ProjectCard for each project in the array.

function ProjectList({ projects, savedIds, onToggleSave }) {
  if (projects.length === 0) {
    return <p className="empty">No projects use this technology yet.</p>;
  }

  return (
    <section className="project-list" aria-label="Projects">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
          tech={project.tech}
          github={project.github}
          demo={project.demo}
          isSaved={savedIds.includes(project.id)}
          onToggleSave={() => onToggleSave(project.id)}
        />
      ))}
    </section>
  );
}

export default ProjectList;
