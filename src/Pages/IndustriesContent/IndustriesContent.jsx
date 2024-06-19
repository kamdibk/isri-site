import React from "react";
import { motion } from "framer-motion";
const IndustriesContent = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth }}
    >
      IndustriesContent
    </motion.div>
  );
};

export default IndustriesContent;
