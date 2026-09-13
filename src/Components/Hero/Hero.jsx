import { motion } from "framer-motion";
import "./Hero.scss";
import hero from "../../assets/hero1.png";
import scroll from "../../assets/scroll.png";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-500%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>
            Hello 👋 <br /> I&apos;m Md Sumon
          </motion.h2>
          <motion.h1 variants={textVariants}>Web Developer</motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <motion.a className="btn" href="#Portfolio" variants={textVariants}>
              See the Latest Works
            </motion.a>

            <motion.a
              className="btn cv-link"
              href="https://drive.google.com/file/d/1isWuo9jJa1mmwYWRU-XDEuQhDBH9ixRk/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              variants={textVariants}
            >
              Download CV
            </motion.a>
          </motion.div>

          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src={scroll}
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="sliderTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
        aria-hidden="true"
      >
        I am MERN Stack Web Developer .
      </motion.div>
      <div className="imgContainer">
        <img src={hero} alt="Portrait of Md Sumon, web developer" />
      </div>
    </div>
  );
};

export default Hero;
