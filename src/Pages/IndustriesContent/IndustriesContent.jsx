import React from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import routesConfig from "../../Routes/routes";

const IndustriesContent = () => {
  const {id} = useParams()
  const path = `industries/${id}`
  const content = routesConfig.industries.find((route)=>route.path === path)
  console.log(content)
  
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth }}
    >

      {content.content}
    </motion.div>
  );
};

export default IndustriesContent;
