import { motion } from "framer-motion";
import React from "react";

let divStyles = "flex flex-row text-4xl lg:text-6xl text-center";

const Title = (props: {color: string; children: any }) => {
  const color = props.color;
  if (color === "lime") {
    divStyles += " text-lime-400 ";
  } else {
    divStyles += " text-white ";
  }

  return (
    <motion.div
    >
      <h1 className={divStyles}>{props.children}</h1>
    </motion.div>
  );
};

export default Title;
