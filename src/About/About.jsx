import { useRef } from "react";
import "./about.scss";
import {  motion } from "framer-motion";


const variants = {
    initial: {
      x: -500,
      y: 100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      y: 0,
      transition: {
        duraction: 1,
        staggerChildren: 0.2,
      },
    },
  };

const About = () => {
    const ref = useRef();
  return (
    <motion.div className="about" variants={variants}
          initial="initial"
         
          ref={ref}
          animate={ "animate"}>
      <div className="contact">
        <div className="textContainer">
          <motion.h1 whileHover={{ color: "orange" }}>Md Sumon</motion.h1>
          <div className="item">
            <motion.h2 variants={variants}>MERN Stack Web Developer</motion.h2>
            <motion.span variants={variants}>
              <br />
              I build accessible, pixel-perfect digital <br /> experiences for
              the web.
            </motion.span>
          </div>
        </div>
        <motion.div className="formContainer" variants={variants}>
          <p>
            I’m a Front-End Developer specializing in accessibility, dedicated
            to building inclusive, high-performance user experiences. I focus on
            designing and maintaining UI components using modern frameworks
            while ensuring compliance with web accessibility standards and best
            practices. My goal is to create digital platforms that are not only
            visually appealing but also fully accessible to all users,
            regardless of ability.
          </p>
          <p>"Outside of work, I love climbing, reading, bike riding, and spending time with friends. I’m also on a mission to track down every last waterfall in Bandarban—no matter how hidden. You’ll often find me exploring the trails of Bandarban Hill 🏞️"</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
