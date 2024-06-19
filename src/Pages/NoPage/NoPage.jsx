import React from 'react'
import { motion } from 'framer-motion'
const NoPage = () => {
  return (
    <motion.center
      style={{ marginTop: "2rem" }}
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth }}
    >
      <h1>BANNE KA HAI RE, SABAR RAKH...</h1>
    </motion.center>
  );
}

export default NoPage
