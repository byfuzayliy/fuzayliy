import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPhp,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiSass,
  SiTailwindcss,
  SiOpenai,
} from "react-icons/si";
import "./skills.scss";

const skills = [
  { icon: <FaHtml5 />, label: "HTML" },
  { icon: <FaCss3Alt />, label: "CSS" },
  { icon: <SiSass />, label: "SCSS" },
  { icon: <SiTailwindcss />, label: "TAILWIND" },
  { icon: <FaJs />, label: "JavaScript" },
  { icon: <SiTypescript />, label: "TypeScript" },
  { icon: <FaReact />, label: "React JS" },
  { icon: <SiNextdotjs />, label: "Next JS" },
  { icon: <FaPhp />, label: "PHP" },
  { icon: <FaGitAlt />, label: "Git" },
  { icon: <FaGithub />, label: "GitHub" },
  { icon: <SiOpenai />, label: "Prompt Engineering" },
  { icon: "📚", label: "Algorithm" },
  { icon: "🇬🇧", label: "English (B1)" },
];

const Skills = () => {
  return (
    <section className="skills-section">
      <div className="skills-container">
        <h2 className="skills-title">My Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="skill-icon">{skill.icon}</div>
              <p className="skill-label">{skill.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
