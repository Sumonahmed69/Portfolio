import "./navbar.scss";
import fb from "../../assets/fb.png";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import { motion } from "framer-motion";
import Sidebar from "../Sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}

      <Sidebar></Sidebar>
      <div className="wrapper ">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Sumon dev...
        </motion.span>
        <div className="social">
          <a
            href="https://www.facebook.com/sumon.ahammed.3720"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <img className="img" src={fb} alt="Facebook" />
          </a>

          <a
            href="https://github.com/Sumonahmed69"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <img className="img" src={github} alt="GitHub" />
          </a>
          <a
            href="https://www.linkedin.com/in/sumon-ahmed69/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <img className="img" src={linkedin} alt="LinkedIn" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
