import "./navbar.scss";
import fb from "../../assets/fb.png";
// import github from "../../assets/social.png";
import linkedin from "../../assets/linkedin.png";
import { motion } from "framer-motion";
import Sidebar from "../Siderbar/Sidebar";

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
          <a href="https://www.facebook.com/sumon.ahammed.3720" target="_blank">
            <img className="img" src={fb} alt="" />
          </a>

          <a href="https://github.com/Sumonahmed69" target="_blank">
            <img className="img" src={'/src/assets/github.png'} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/sumon-ahmed69/" target="_blank">
            <img className="img" src={linkedin} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
