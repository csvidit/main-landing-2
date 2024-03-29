import styles from "./Font.module.css";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const divStyles = "flex flex-row text-4xl w-72";
const linkStyles = "flex flex-col self-center";
const linkLabelStyles = "flex flex-row space-x-2 self-center";
const linkUnderlineStyles = "border-b border-slate-500 self-center";

const MainLink = (props: { href: string; animate: string; children: any }) => {
  const href = props.href;
  const animate = props.animate; // this prop can have either "true" or "false" as its value. This controls the perpetual animation of the underline

  const linkLabelVariants = {
    animate: { x: 0, skewX: 0, color: "#64748B", fill: "#64748B" },
    hover: { x: 10, skewX: -10, color: "#FFFFFF", fill: "#FFFFFF" },
  };

  const linkArrowVariants = {
    animate: {
      rotate: 0,
    },
    hover: {
      rotate: [0, -45],
      transition: {
        type: "tween",
        ease: "easeInOut",
      },
    },
  };

  let linkUnderlineVariants;

  if (animate === "true") {
    linkUnderlineVariants = {
      animate: {
        width: [125, 75, 125],
        transition: { repeat: Infinity, duration: 1.5 },
      },
      hover: { width: 125, borderBottomColor: "#0ea5e9" },
    };
  } else {
    linkUnderlineVariants = {
      animate: {
        
      },
      hover: {
        width: 288,
        borderBottomColor: "#0ea5e9",
        transition: {
          type: "tween",
          ease: "easeInOut",
        },
      },
    };
  }

  return (
    <motion.div
      className={"flex flex-row text-2xl lg:text-4xl w-72"}
      animate="animate"
      whileHover="hover"
    >
      <motion.div
        initial={false}
        variants={linkLabelVariants}
        className="flex flex-col self-center"
      >
        <Link href={href} className="flex flex-col self-center">
          <motion.div className="flex flex-row space-x-2 self-center justify-between w-72">
            <motion.p className="self-center">{props.children}</motion.p>
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              color="currentColor"
              className="bi bi-arrow-right self-center"
              viewBox="0 0 16 16"
            >
              <motion.path
                variants={linkArrowVariants}
                fillRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              />
            </motion.svg>
          </motion.div>
        </Link>
        <motion.div
          className="border-b border-slate-500 self-start w-72"
          variants={linkUnderlineVariants}
        ></motion.div>
      </motion.div>
    </motion.div>
  );
};

export default MainLink;
