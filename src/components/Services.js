import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { fadeIn } from "../variants";
import {
  FaCode,
  FaMobile,
  FaServer,
  FaDatabase,
  FaTools,
  FaCloud,
} from "react-icons/fa";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const services = [
    {
      icon: <FaCode className="text-4xl text-accent" />,
      title: "Web Development",
      description:
        "Building responsive and modern web applications using the latest technologies and best practices.",
    },
    {
      icon: <FaMobile className="text-4xl text-accent" />,
      title: "Mobile Development",
      description:
        "Creating cross-platform mobile applications that provide seamless user experiences.",
    },
    {
      icon: <FaServer className="text-4xl text-accent" />,
      title: "Backend Development",
      description:
        "Developing robust and scalable server-side applications with Node.js and Express.",
    },
    {
      icon: <FaDatabase className="text-4xl text-accent" />,
      title: "Database Design",
      description:
        "Designing and implementing efficient database structures for optimal performance.",
    },
    {
      icon: <FaTools className="text-4xl text-accent" />,
      title: "API Development",
      description:
        "Creating RESTful APIs and integrating third-party services for enhanced functionality.",
    },
    {
      icon: <FaCloud className="text-4xl text-accent" />,
      title: "Cloud Solutions",
      description:
        "Implementing cloud-based solutions for better scalability and reliability.",
    },
  ];

  return (
    <section className="section" id="services" ref={ref}>
      <div className="container mx-auto">
        <motion.h2
          className="h2 text-center mb-8"
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          My Services
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-8 hover:scale-105 transition-transform duration-300"
              variants={fadeIn("up", 0.4 + index * 0.1)}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="h3 mb-2">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
