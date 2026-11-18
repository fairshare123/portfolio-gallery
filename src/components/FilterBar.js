// A row of buttons, one per technology.
// Clicking a button tells App which technology to show.

function FilterBar({ filters, selected, onSelect }) {
  return (
    <div className="filter-bar" role="group" aria-label="Filter projects by technology">
      {filters.map((filter) => (
        <button
          key={filter}
          type="button"
          className={filter === selected ? "filter active" : "filter"}
          aria-pressed={filter === selected}
          onClick={() => onSelect(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;
