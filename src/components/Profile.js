import photo from "../assets/profile.jpg";

// A short introduction about me, shown above my projects.
const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "MongoDB",
  "Git & GitHub",
  "Accessibility",
];

function Profile() {
  return (
    <section className="profile" aria-labelledby="profile-name">
      <div className="profile-top">
        <img className="avatar" src={photo} alt="Dipika Aryal" width="56" height="56" />
        <div>
          <h1 id="profile-name">Dipika Aryal</h1>
          <p className="role">Computer Engineering Student</p>
        </div>
      </div>

      <p className="bio">
        I'm Dipika Aryal, a Computer Engineering student who enjoys building web apps
        that are simple, useful and easy for everyone to use. During my Web Programming
        course I built everything from HTML pages to a full React and Node.js
        expense-splitting app.
      </p>

      <ul className="skills" aria-label="Skills">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Profile;
