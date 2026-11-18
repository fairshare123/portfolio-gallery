// My real course projects. Each project is one ProjectCard.
// "tech" is the list the FilterBar uses to filter cards.

const projects = [
  {
    id: 1,
    title: "FairShare",
    description:
      "A group expense-splitting app. Create groups, split costs equally or by amount, percentage or shares, see who owes whom, and record settlements.",
    tech: ["React", "Node", "MongoDB", "CSS"],
    github: "https://github.com/fairshare123/FairShare",
    demo: null, // not deployed yet
  },
  {
    id: 2,
    title: "Book Search App",
    description:
      "Searches the Open Library API for books, with sorting, pagination, loading and error messages, and a More Details view for each book.",
    tech: ["JavaScript", "CSS", "API"],
    github: "https://github.com/fairshare123/webpro-book-search",
    demo: "https://fairshare123.github.io/webpro-book-search/",
  },
  {
    id: 3,
    title: "API Explorer Hub",
    description:
      "Week 6 project that uses fetch and async/await to load live data from six public APIs: weather, exchange rates, trivia, Pokémon, dog photos and random users.",
    tech: ["JavaScript", "CSS", "API"],
    github: "https://github.com/fairshare123/Web_program_week2/tree/main/week%206",
    demo: "https://fairshare123.github.io/Web_program_week2/week%206/task2.html",
  },
  {
    id: 4,
    title: "Web Programming Portfolio",
    description:
      "My weekly course portfolio with every assignment from Week 2 onwards, keyboard-accessible navigation, and Lighthouse scores of 100.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/fairshare123/Web_program_week2",
    demo: "https://fairshare123.github.io/Web_program_week2/",
  },
  {
    id: 5,
    title: "Portfolio Gallery",
    description:
      "This Week 10 React app. It is built from ProjectCard, ProjectList and FilterBar components, and filters my projects by technology.",
    tech: ["React", "CSS"],
    github: "https://github.com/fairshare123/portfolio-gallery",
    demo: "https://fairshare123.github.io/portfolio-gallery/",
  },
  {
    id: 6,
    title: "Campus Corner Shop",
    description:
      "Week 11 React shopping cart. Add products, change quantities with + and -, and watch the total update. The cart is stored in React state.",
    tech: ["React", "CSS"],
    github: "https://github.com/fairshare123/shopping-cart",
    demo: "https://fairshare123.github.io/shopping-cart/",
  },
];

export default projects;
