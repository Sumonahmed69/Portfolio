// import { delay, motion } from "framer-motion";
// import { useState } from "react";

// const Test = () => {
//   const [opne, setOpen] = useState(false);
//   const variants = {
//     //     // visible: { opacity: 1, x:1000, transition:{duration:2} },
//     //     visible: { opacity: 1, x:100, transition:{staggerChildren:1} },
//     // visible: {
//     //   opacity: 1,
//     //   x: 500,
//     //   transition: { type: "spring", stiffness: 200, damping: 100 },
//     // },

//     visible: (i) => ({ opacity: 1, x: 100, transition: { delay:i* 0.9 } }),

//     hidden: { opacity: 0 },
//   };

//   const items = ["item1", "item2", "item3", "item4"];
//   return (
//     <div className="course">
//       {/* <motion.div
//         className="box"
//         variants={variants}
//         // initial="hidden"
//         // animate="visible"




//         // initial={{opacity:0.5, scale: 0.5}}
//         // animate={{ opacity: 1, scale: 1, x:200, y:500}}
//         transition={{ duration: 2}}
//         animate={opne ? 'visible' : 'hidden'}


//         // whileHover={{opacity:1, scale:2}}
//         // whileInView={{opacity:1, scale:2}}
//         // drag
//       ></motion.div> */}

//       <motion.ul initial="hidden" animate="visible" variants={variants}>
//         {items.map((item,i) => (
//           <motion.li variants={variants} key={item} custom={i}>
//             {item}
//           </motion.li>
//         ))}
//       </motion.ul>

//       {/* <button onClick={() => setOpen(prev=>!prev)}>click</button> */}
//     </div>
//   );
// };

// export default Test;
