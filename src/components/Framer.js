import * as React from "react";
import { motion } from "framer-motion";
import { useSpring, animated } from "react-spring";

const Framer = () => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });
  return <animated.h1 style={props}> I will fade in </animated.h1>;
  // <div className="wrapper">

  //   <motion.div
  //     className="container"
  //     animate={{ scale: 2 }}
  //     transition={{ duration: 0.5 }}
  //   />
  // </div>
};

export default Framer;
