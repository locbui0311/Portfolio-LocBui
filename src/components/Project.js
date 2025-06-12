import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { fadeIn } from "../variants";

const Project = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with React and Node.js",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application",
      image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      technologies: ["React", "Firebase", "Tailwind"],
      link: "#"
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A modern portfolio website with animations",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      technologies: ["React", "Framer Motion", "Tailwind"],
      link: "#"
    }
  ];

  return (
    <section className="section" id="projects" ref={ref}>
      <div className="container mx-auto">
        <motion.h2
          className="h2 text-center mb-8"
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          My Projects
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
              whileHover={{ y: -10 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="h3 mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white/10 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="btn btn-sm"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Project; 