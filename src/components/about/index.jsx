import "./about.scss";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-content">
          <span className="about-subtitle">
            Hi there! Let me introduce myself
          </span>
          <h2 className="about-title">I'm Azizbek Abduhakimov</h2>
          <div className="about-text">
            <p>
              I'm currently a Computer Science student at Tashkent State
              Technical University, where I've been studying for the past 3
              years. Alongside my degree, I'm passionate about mastering both
              English language and programming skills.
            </p>
            <p>
              My goal is to become an exceptional developer in the tech
              industry. I genuinely enjoy teaching and sharing knowledge, which
              is why I regularly create programming tutorials and post them on
              my YouTube channel to help other learners in their coding journey.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or creating educational
              content for aspiring developers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
