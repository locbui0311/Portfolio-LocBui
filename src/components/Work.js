import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { fadeIn } from "../variants";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const Work = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const experience = [
    {
      type: "work",
      icon: <FaBriefcase className="text-2xl text-accent" />,
      title: "Senior Web Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      description: [
        "Led development of enterprise-level web applications",
        "Mentored junior developers and conducted code reviews",
        "Implemented CI/CD pipelines and automated testing",
      ],
    },
    {
      type: "work",
      icon: <FaBriefcase className="text-2xl text-accent" />,
      title: "Full Stack Developer",
      company: "Digital Innovations",
      period: "2020 - 2022",
      description: [
        "Developed and maintained multiple client projects",
        "Optimized database performance and query efficiency",
        "Collaborated with UX designers for better user experience",
      ],
    },
    {
      type: "education",
      icon: <FaGraduationCap className="text-2xl text-accent" />,
      title: "Bachelor of Computer Science",
      company: "University of Technology",
      period: "2016 - 2020",
      description: [
        "Specialized in Software Engineering",
        "Graduated with First Class Honors",
        "Active member of the Programming Club",
      ],
    },
  ];

  return (
    <section className="section" id="work" ref={ref}>
      <div className="container mx-auto">
        <motion.h2
          className="h2 text-center mb-8"
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          Work Experience
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-white/10"></div>

          <div className="space-y-8">
            {experience.map((item, index) => (
              <motion.div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
                variants={fadeIn("up", 0.4 + index * 0.1)}
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-accent"></div>

                {/* Content */}
                <div
                  className={`w-1/2 ${
                    index % 2 === 0 ? "pr-12 text-right" : "pl-12"
                  }`}
                >
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6">
                    <div className="flex items-center gap-4 mb-4">
                      {item.icon}
                      <div>
                        <h3 className="h3">{item.title}</h3>
                        <p className="text-accent">{item.company}</p>
                        <p className="text-sm text-gray-400">{item.period}</p>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {item.description.map((point, i) => (
                        <li key={i} className="text-gray-300">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
