/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "react Commerce",
    img: "https://themefisher.com/blog-thumb/reactjs-website-templates.webp",
    discription:
      "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur voluptatum molestias rerum laboriosam accusantium fuga, officia dolor quas tempora repellendus!",
  },
  {
    id: 2,
    title: "next.js Commerce",
    img: "https://themefisher.com/blog/startp-react.webp",
    discription:
      "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur voluptatum molestias rerum laboriosam accusantium fuga, officia dolor quas tempora repellendus!",
  },
  {
    id: 3,
    title: "MongoDB Commerce",
    img: "https://reactjsexample.com/content/images/2022/07/Code-2022-01-40-25.jpg",
    discription:
      "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur voluptatum molestias rerum laboriosam accusantium fuga, officia dolor quas tempora repellendus!",
  },
  {
    id: 4,
    title: "Node.js Commerce",
    img: "https://www.codavilla.com/static/de9390c05c1ad05c2577bdec791fe375/ee604/img-2.png",
    discription:
      "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur voluptatum molestias rerum laboriosam accusantium fuga, officia dolor quas tempora repellendus!",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  //
  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imgContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>

          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.discription}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
