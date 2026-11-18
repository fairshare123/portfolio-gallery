import { useEffect, useState } from "react";
import Profile from "./components/Profile";
import FilterBar from "./components/FilterBar";
import ProjectList from "./components/ProjectList";
import projects from "./data/projects";
import "./App.css";

// The technologies shown in the FilterBar.
const filters = ["All", "React", "Node", "CSS"];

// Start in dark mode if the visitor saved it before, or if their computer uses dark mode.
function getStartingTheme() {
  try {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") return saved;
  } catch (error) {
    // localStorage can be blocked; fall back to the system setting
  }
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function App() {
  // Remembers which filter button is selected. Starts with "All".
  const [selected, setSelected] = useState("All");

  // Remembers light or dark mode.
  const [theme, setTheme] = useState(getStartingTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("theme", theme);
    } catch (error) {
      // ignore if storage is not available
    }
  }, [theme]);

  // Keep only the projects whose tech list includes the selected technology.
  const visibleProjects =
    selected === "All"
      ? projects
      : projects.filter((project) => project.tech.includes(selected));

  return (
    <div className="app">
      <header className="top-bar">
        <span className="tag">WEEK 10 · REACT</span>
        <button
          type="button"
          className="theme-toggle"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? "☀ Light mode" : "☾ Dark mode"}
        </button>
      </header>

      <main>
        <Profile />

        <section className="projects" aria-labelledby="projects-title">
          <h2 id="projects-title">My Projects</h2>

          <FilterBar filters={filters} selected={selected} onSelect={setSelected} />

          <p className="count" aria-live="polite">
            Showing {visibleProjects.length} of {projects.length} projects
          </p>

          <ProjectList projects={visibleProjects} />
        </section>
      </main>

      <footer className="app-footer">Dipika Aryal · Web Programming © 2026</footer>
    </div>
  );
}

export default App;
