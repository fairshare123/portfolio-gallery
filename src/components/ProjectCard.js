// Shows ONE project: title, description, tech stack, GitHub link and demo link.
// It receives the project's details as props from ProjectList.
// The heart button saves or unsaves the project (the saved list is state in App).

function ProjectCard({ title, description, tech, github, demo, isSaved, onToggleSave }) {
  return (
    <article className="project-card">
      <div className="card-top">
        <h2>{title}</h2>
        <button
          type="button"
          className={isSaved ? "save-button saved" : "save-button"}
          aria-pressed={isSaved}
          aria-label={isSaved ? `Unsave ${title}` : `Save ${title}`}
          onClick={onToggleSave}
        >
          {isSaved ? "♥" : "♡"}
        </button>
      </div>
      <p className="description">{description}</p>

      <ul className="tech-list" aria-label="Tech stack">
        {tech.map((item) => (
          <li key={item} className="tech-tag">
            {item}
          </li>
        ))}
      </ul>

      <div className="card-links">
        <a href={github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>

        {/* Only show the demo button if the project has a live demo */}
        {demo ? (
          <a href={demo} target="_blank" rel="noopener noreferrer" className="primary">
            Live demo
          </a>
        ) : (
          <span className="no-demo">No live demo yet</span>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
