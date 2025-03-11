/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Beep - eCommerce Web Application",
    img: "https://i.ibb.co.com/cXQZ7dtM/Screenshot-2025-03-05-002403.png",
    discription:
      "Beep is a full-stack eCommerce platform designed for a seamless shopping experience across all devices. It features a Backend, Frontend, and Admin Panel, allowing users to create accounts, browse products, and make secure purchases via Cash on Delivery (COD) or Stripe. The platform is fully responsive, ensuring optimal performance on mobile, tablet, and large screens",
    demoLink: "https://beep-frontend.vercel.app",
    gitLink: "https://github.com/Sumonahmed69/Beep-ecommerce" 
  },
  {
    id: 2,
    title: "Dream Lounge Restaurants",
    img: "https://i.ibb.co.com/x8DWKD8S/Screenshot-2025-03-05-002455.png",
    discription:
      "Dream Lounge Restaurant is a full-stack, fully responsive web application designed to provide a seamless food ordering experience across mobile, tablet, and large screens. Users can create an account, log in, browse the menu, and place orders securely using Stripe for payments. The project features a dynamic and interactive UI, efficient state management, and a secure backend.",
    demoLink: "https://dream-lounge-restaurant.web.app",
    gitLink: "https://github.com/Sumonahmed69/Dream-lounge-restaurant-client" 
  },
  {
    id: 3,
    title: "Hotel Advisors - Room Rental Website",
    img: "https://i.ibb.co.com/DPgkgXKm/Screenshot-2025-03-12-010308.png",
    discription:
      "Hotel Advisors is a Room Rental Website, similar to Airbnb, designed to offer a seamless booking experience for guests and property management features for hosts. It also includes an admin dashboard for managing users and monitoring platform activity",
    demoLink: "https://hotel-advisors-ibt1.vercel.app/",
    gitLink: "https://github.com/Sumonahmed69/Hotel-Advisors" 
  },
  {
    id: 4,
    title: "Gadget Shop - eCommerce Web Application",
    img: "https://i.ibb.co.com/pjhSbzxp/Screenshot-2025-03-11-025052.png",
    discription:
      " Gadget Shop is a full-stack eCommerce platform built with Next.js, offering a seamless and responsive shopping experience. It includes a user-friendly storefront, a seller dashboard, and secure authentication. Users can browse products, manage orders, and purchase via Cash on Delivery (COD).",
    demoLink: "https://gadget-shop-psi.vercel.app/",
    gitLink: "https://github.com/Sumonahmed69/Gadget-Shop" 
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
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imgContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>

          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.discription}</p>

          

            <div className="git">
              <a className="git-demo" href={item.demoLink} target="_blank">
                <button>Preview</button>
              </a>
              <a className="git-link" href={item.gitLink} target="_blank">
                <button>GitHub</button>
              </a>
            </div>
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
