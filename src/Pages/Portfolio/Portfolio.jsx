import React from 'react'
import { motion } from 'framer-motion' 
const Portfolio = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth }}
    >
      Portfolio
    </motion.div>
  );
}

export default Portfolio