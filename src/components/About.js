import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { fadeIn } from "../variants";
import CountUp from "react-countup";
import { FaReact, FaNodeJs, FaDatabase, FaCode } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiMongodb } from "react-icons/si";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const stats = [
    {
      value: 2,
      text: "Years of Experience",
      icon: <FaCode className="text-3xl text-accent" />,
    },
    {
      value: 15,
      text: "Projects Completed",
      icon: <FaReact className="text-3xl text-accent" />,
    },
    {
      value: 5,
      text: "Happy Clients",
      icon: <FaNodeJs className="text-3xl text-accent" />,
    },
  ];

  const skills = [
    {
      name: "JavaScript",
      icon: <SiJavascript className="text-4xl text-accent" />,
      level: "90%",
    },
    {
      name: "React",
      icon: <FaReact className="text-4xl text-accent" />,
      level: "85%",
    },
    {
      name: "Node.js",
      icon: <FaNodeJs className="text-4xl text-accent" />,
      level: "80%",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-4xl text-accent" />,
      level: "75%",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-4xl text-accent" />,
      level: "85%",
    },
  ];

  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <motion.h2
          className="h2 text-center mb-8"
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          About Me
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Stats */}
          <motion.div
            className="flex-1"
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8">
              <h3 className="h3 mb-4">My Stats</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center"
                  >
                    {stat.icon}
                    <div className="text-3xl font-bold mt-2">
                      <CountUp end={stat.value} duration={2} />+
                    </div>
                    <div className="text-sm text-gray-400">{stat.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            className="flex-1"
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8">
              <h3 className="h3 mb-4">My Skills</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        {skill.icon}
                        <span>{skill.name}</span>
                      </div>
                      <span>{skill.level}</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full">
                      <div
                        className="h-full bg-accent rounded-full"
                        style={{ width: skill.level }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* About Text */}
        <motion.div
          className="mt-8"
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8">
            <h3 className="h3 mb-4">Who am I?</h3>
            <p className="text-gray-300 leading-relaxed">
              I am a passionate Full Stack Developer with expertise in modern web
              technologies. My journey in web development started 2 years ago, and
              since then, I've been constantly learning and improving my skills.
              I specialize in building responsive, user-friendly web applications
              using React, Node.js, and MongoDB.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing my knowledge
              through my YouTube channel. I believe in writing clean, maintainable
              code and creating solutions that make a positive impact.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
