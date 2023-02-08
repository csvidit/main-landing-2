import { motion } from "framer-motion";
import React from "react";

let divStyles = "flex flex-row text-6xl";

const Title = (props: {spaced: string, color: string, children: any}) => {
  const spaced = props.spaced;
  const color = props.color;
  if (spaced) {
    divStyles += " mt-3 mb-3 ";
  }
  if(color === "lime")
  {
    divStyles += " text-lime-400 ";
  }
  else
  {
    divStyles += " text-white ";
  }

  return (
      <motion.div>
        <h1 className={divStyles}>
          {props.children}
        </h1>
      </motion.div>
  );
};

export default Title;
