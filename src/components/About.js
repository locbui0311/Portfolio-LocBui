import React, { useRef } from "react";

//CountUp
import CountUp from "react-countup";
//motion
import { useInView } from "framer-motion";
//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";
const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="section" id="about" ref={ref}>
      <motion.h2
        className="text-3xl font-bold mb-4"
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
      >
        About
      </motion.h2>

      {/* Đoạn JSX hiển thị JavaScript và ReactJS */}
      <motion.div
        className="space-y-2 text-xl text-white-700"
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
      >
        <div>🚀 JavaScript</div>
        <div>⚛️ ReactJS</div>
        <div className="flex items-center">
          <img
            src="https://phongvu.vn/cong-nghe/wp-content/uploads/2024/09/Meme-meo-de-thuong-4-1068x1068.jpg"
            alt="ReactJS"
            className="w-64 h-64 inline-block mr-2 hover:scale-105 transition-transform duration-300"
          />
          <div>💻 Mi meow meow</div>
          <img
            src="https://i.pinimg.com/736x/71/43/01/714301a465e2350b5fe3d64011309eed.jpg"
            alt="ReactJS"
            className=" w-64 h-64 inline-block mr-2 hover:scale-105 transition-transform duration-300"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default About;
