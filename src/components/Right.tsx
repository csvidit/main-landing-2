import React from "react";
import { motion } from "framer-motion";

const Right = (props: { children: any }) => {
  return (
    <motion.div
      animate={{
        opacity: [0, 1],
        translateX: [80, 0],
        transition: {
          delay: 1.4,
          duration: 0.8,
          type: "spring",
        },
      }}
      className="flex flex-col h-full lg:h-screen w-screen lg:w-1/2 justify-evenly items-center"
    >
      {props.children}
    </motion.div>
  );
};

export default Right;
