import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { fadeIn } from "../variants";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted");
  };

  return (
    <section className="section" id="contact" ref={ref}>
      <div className="container mx-auto">
        <motion.h2
          className="h2 text-center mb-8"
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          Get In Touch
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Contact Info */}
          <motion.div
            className="flex-1"
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8">
              <h3 className="h3 mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <FaEnvelope className="text-2xl text-accent" />
                  <span>example@email.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <FaPhone className="text-2xl text-accent" />
                  <span>+84 123 456 789</span>
                </div>
                <div className="flex items-center gap-4">
                  <FaGithub className="text-2xl text-accent" />
                  <a href="#" className="hover:text-accent transition-colors">
                    github.com/yourusername
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <FaLinkedin className="text-2xl text-accent" />
                  <a href="#" className="hover:text-accent transition-colors">
                    linkedin.com/in/yourusername
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="flex-1"
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
          >
            <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-sm rounded-lg p-8">
              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-white/10 rounded-lg p-4 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full bg-white/10 rounded-lg p-4 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full bg-white/10 rounded-lg p-4 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                    required
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    className="w-full bg-white/10 rounded-lg p-4 text-white focus:outline-none focus:ring-2 focus:ring-accent h-[200px] resize-none"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-lg w-full">
                  Send Message
        </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
