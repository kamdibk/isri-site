import React from 'react'
import { motion } from 'framer-motion'
const CaseStudy = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth }}
    >
      CaseStudy
    </motion.div>
  );
}

export default CaseStudy