import { useState } from "react";
import FilterBar from "./components/FilterBar";
import ProjectList from "./components/ProjectList";
import projects from "./data/projects";
import "./App.css";

// The technologies shown in the FilterBar.
const filters = ["All", "React", "Node", "CSS"];

function App() {
  // Remembers which filter button is selected. Starts with "All".
  const [selected, setSelected] = useState("All");

  // Keep only the projects whose tech list includes the selected technology.
  const visibleProjects =
    selected === "All"
      ? projects
      : projects.filter((project) => project.tech.includes(selected));

  return (
    <div className="app">
      <header className="app-header">
        <span className="tag">WEEK 10 · REACT</span>
        <h1>Dipika's Portfolio Gallery</h1>
        <p>Projects I built during my Web Programming course.</p>
      </header>

      <main>
        <FilterBar filters={filters} selected={selected} onSelect={setSelected} />

        <p className="count" aria-live="polite">
          Showing {visibleProjects.length} of {projects.length} projects
        </p>

        <ProjectList projects={visibleProjects} />
      </main>

      <footer className="app-footer">Dipika Aryal · Web Programming © 2026</footer>
    </div>
  );
}

export default App;
