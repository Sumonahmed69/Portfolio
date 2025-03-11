import { useRef } from "react";
import "./services.scss";
import { motion } from "framer-motion";
import people from "../../assets/people.webp";

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
const Services = () => {
  const ref = useRef();

  return (
    <motion.div
      className="servies"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focuse on helping your brand grow <br /> and move forwrd
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src={people} alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For your</motion.b>{" "}
            Business.
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div className="box">
          <h2>Front End</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                style={{ height: "30px" }}
                src="https://i.ibb.co.com/NgG0Szfs/react-20adfb35.png"
                alt="React"
              />
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                style={{ height: "30px" }}
                src="https://i.ibb.co.com/0RQdDTr7/js-dd493364.png"
                alt="js"
              />
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                style={{ height: "30px", width: "30px" }}
                src="https://i.ibb.co.com/cXFY6V79/png-transparent-tailwind-css-hd-logo.png"
                alt="tailwind"
              />
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                style={{ height: "30px" }}
                src="https://i.ibb.co.com/PzJhjb9F/framer-motion-logo-png-seeklogo-446185.png"
                alt="motion"
              />
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                style={{ height: "30px" }}
                src="https://i.ibb.co.com/SDf9z3Rg/react-query-logo-png-seeklogo-435661.png"
                alt="TanStack"
              />
            </div>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                style={{ height: "30px" }}
                src="https://i.ibb.co.com/Gv2s71FC/images-1.jpg"
                alt="Next"
              />
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                style={{ height: "30px" }}
                src="https://i.ibb.co.com/dw59vzGw/download.png"
                alt="HTML"
              />
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                style={{ height: "30px" }}
                src="https://i.ibb.co.com/8LFgKHVb/css-409b3a09.png"
                alt="CSS"
              />
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                style={{ height: "30px" }}
                src="https://i.ibb.co.com/RkG9Rrdc/sass-6d76b44e.png"
                alt="SCSS"
              />
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                style={{ height: "30px" }}
                src="https://i.ibb.co.com/YFyFW0g9/axios-logo-png-seeklogo-428046.png"
                alt="Axios"
              />
            </div>
          </div>
        </motion.div>
        <motion.div className="box">
          <h2>Back End</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                style={{ height: "30px" }}
                src="https://i.ibb.co.com/6JvkL0nc/nodejs-aa8bc616.png"
                alt="Node"
              />
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                style={{ height: "30px" }}
                src="https://i.ibb.co.com/mrp7mTDZ/expressjs-bd60c4de.png"
                alt="Express"
              />
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                style={{ height: "30px" }}
                src="https://i.ibb.co.com/qLfySJ6t/mongodb-a8889d62.png"
                alt="MongoDB"
              />
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                style={{ height: "30px" }}
                src="https://i.ibb.co.com/8nCqW42w/clerk-nzr7956knokwjx841f6yye.webp"
                alt="React"
              />
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                style={{ height: "30px" }}
                src="https://i.ibb.co.com/d4q8JMWp/download-5.png"
                alt="JWT"
              />
            </div>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                style={{ height: "30px" }}
                src="https://i.ibb.co.com/Gv2s71FC/images-1.jpg"
                alt="Next"
              />
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                style={{ height: "30px" }}
                src="https://i.ibb.co.com/cXxrbFmK/images.jpg"
                alt="Stripe"
              />
            </div>
          </div>
        </motion.div>
        <motion.div className="box">
          <h2>Familiar-with</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                style={{ height: "30px" }}
                src="https://i.ibb.co.com/Gv2s71FC/images-1.jpg"
                alt="Next"
              />
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                style={{ height: "30px" }}
                src="https://i.ibb.co.com/6JvkL0nc/nodejs-aa8bc616.png"
                alt="Node"
              />
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                style={{ height: "30px" }}
                src="https://i.ibb.co.com/9kstncWB/npm-bf117b29.png"
                alt="npm"
              />
            </div>
            <div >
              <img
                style={{ height: "30px" }}
                src="https://i.ibb.co.com/0VWxYb8f/figma-90eb21ce.png"
                alt="figma"
              />
            </div>
          
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
           
          </div>
        </motion.div>
        <motion.div className="box">
          <h2>Tools</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                style={{ height: "30px" }}
                src="https://i.ibb.co.com/twPf5RdJ/download-4.png"
                alt="Git"
              />
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                style={{ height: "30px" }}
                src="https://i.ibb.co.com/DPWzwHCz/github-logo.png"
                alt="GitHub"
              />
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                style={{ height: "30px" }}
                src="https://i.ibb.co.com/wh35mdQX/cdt-136d030e.png"
                alt="Chrome"
              />
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                style={{ height: "30px" }}
                src="https://i.ibb.co.com/23LhpNMM/firebase-a4156cb6.png"
                alt="Firebase"
              />
            </div>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                style={{ height: "30px" }}
                src="https://i.ibb.co.com/C3K0wCR0/netlify-603ef81c.png"
                alt="Netlify"
              />
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                style={{ height: "30px" }}
                src="https://i.ibb.co.com/0VWxYb8f/figma-90eb21ce.png"
                alt="figma"
              />
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                style={{ height: "30px" }}
                src="https://i.ibb.co.com/m5G68tfH/vs-code-54c2de39.png"
                alt="Visual"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
