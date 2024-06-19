import React from 'react'
import { motion } from 'framer-motion'
const Blog = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth }}
    >
      Blog
    </motion.div>
  );
}

export default Blog