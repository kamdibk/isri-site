import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import routesConfig from "../../Routes/routes";
import axios from "axios";

const IndustriesContent = () => {
  const { id } = useParams();
  const path = `industries/${id}`;
  const content = routesConfig.industries.find((route) => route.path === path);
  // console.log(content)
  // const uri = "http://localhost:1337/api/industries";
  // const token =
  //   "acb04ff2f6c1398f1cd44ebc402139795ca12d897b7756ea76775e3be77ef0e7f5700399aa4bef5cf3b293735446a1b96b883cd99a6b030221c6185424a4f7faef5797897becb39dd4611609603019a006cd7964d7603ee18bff6a3e5092a598274fa27ca60a06c0e7aa69cf7ae48929e102437c8d95c6d973ab397a69088acf";
  // const [data, setData] = useState();
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(uri, {
  //         headers: {
  //           Authorization: `bearer ${token}`,
  //         },
  //       });
  //       console.log(response.data.data[1].attributes);
  //       // setData(response)
  //     } catch (err) {
  //       console.log("error" + err);
  //     }
  //   };
  //   fetchData()
  // }, []);

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
