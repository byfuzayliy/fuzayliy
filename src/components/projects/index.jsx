import React from "react";
import { motion } from "framer-motion";
import "./projects.scss";
import TodoApp from "../../assets/images/todoapp.png";
const projects = [
  {
    title: "TODO APP",
    description: "This project was built with HTML, Bootstrap and JavaScript.",
    image: TodoApp,
    github: "https://github.com/byfuzayliy/TODO-APP",
    live: "https://fuzayliy-todo.vercel.app/",
  },
  // Add more projects here
];

const Projects = () => {
  return (
    <section className="projects-section">
      <div className="projects-container">
        <h2 className="projects-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
