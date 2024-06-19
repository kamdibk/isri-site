import React from "react";
import { motion } from "framer-motion";
const TechnologiesContent = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth }}
    >
      TechnologiesContent
    </motion.div>
  );
};

export default TechnologiesContent;
