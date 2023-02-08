import React from "react";
import { delay, motion } from "framer-motion";

const Left = (props: { children: any }) => {
  return (
    <motion.div
      className="flex flex-col space-y-10 h-screen w-screen lg:w-1/2 justify-center items-center lg:items-start p-10 lg:p-0 lg:ml-10"
    >
      
      {props.children}
    </motion.div>
  );
};

export default Left;
