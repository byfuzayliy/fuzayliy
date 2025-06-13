import About from "../../components/about";
import Contact from "../../components/contact";
import Herro from "../../components/herro";
import Projects from "../../components/projects";
import Skills from "../../components/skills";

const Home = () => {
  return (
    <div>
      <Herro />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
