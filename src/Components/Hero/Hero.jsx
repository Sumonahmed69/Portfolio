import { motion } from "framer-motion";
import "./Hero.scss";
import hero from '../../assets/hero1.png'
import scroll from '../../assets/scroll.png'

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duraction: 30,
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
          <motion.h2 variants={textVariants}>Hello 👋 <br /> I&apos;m Md Sumon</motion.h2>
          <motion.h1 variants={textVariants}>Web Developer</motion.h1>
          <motion.div className="buttons" variants={textVariants} >
            <motion.button variants={textVariants}>
              See the Latest Works
            </motion.button>
            <motion.button variants={textVariants}>Contact Me </motion.button>
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
       
      >
       I am MERN Stack Web Developer .

      </motion.div>
      <div className="imgContainer">
        <img src={hero} alt="" />
      </div>
    </div>
  );
};

export default Hero;
