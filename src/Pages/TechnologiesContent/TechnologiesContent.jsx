import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import routesConfig from "../../Routes/routes";
import { useParams } from "react-router-dom";

const TechnologiesContent = () => {
  const { id } = useParams();
  const path = `technologies/${id}`;
  let content = routesConfig.Technologies.find((route) => route.path === path);
  content = content.content;

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth }}
    >
      {content}
    </motion.div>
  );
};

export default TechnologiesContent;
