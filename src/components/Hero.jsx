import "./Hero.css";
import profile from "../assets/profile.jpeg";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Michael Afolayan</h1>

          <h2>
            Full Stack Developer | React | JavaScript | Enterprise Applications
          </h2>

          <p>
            I build responsive web applications, workflow automation solutions,
            and enterprise software systems using modern frontend and backend
            technologies.
          </p>

          <button>View My Projects</button>
        </div>

        <div className="hero-image-container">
          <img
            src={profile}
            alt="Michael Afolayan"
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;