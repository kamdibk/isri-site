import React, { useEffect, useRef } from "react";
import "./TestComponent.css";
import { motion, useInView, useAnimation } from "framer-motion";
import SplitString from "../../Utils/SplitString";

const TestComponent = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControl = useAnimation();
  const slideControl = useAnimation();

  const heading = SplitString("TestComponent");
  const text = SplitString(
    "ipsum dolor sit amet consectetur adipisicing elit. Quisquam,aperiam minima. Architecto in, adipisci exercitationem soluta inventore excepturi expedita alias quasi, consequatur facilis vel et. Ullam voluptate iure asperiores eius totam, dolor quod unde quibusdam corporis eos ratione, nesciunt laborum, harum voluptates suscipit ipsum veritatisnihil illum! Voluptatem, consequatur dignissimos accusamus, maiores cumque magnam non similique commodi quisquam hic perferendis fugit aliquid dolores architecto repellendus dicta. Hic repellat reprehenderit quisquam molestias consectetur non, commodi asperiores beatae soluta ipsum similique eligendi maiores numquam sit laudantium excepturi corrupti odit perferendis quo esse illo. Iste expedita, odit provident veniam quia laudantium recusandae veritatis!"
  );

  const charVariants = {
    hidden: { opacity: 0 },
    reveal: { opacity: 1 },
  };

  useEffect(() => {
    if (isInView) {
      mainControl.start("reveal");
      slideControl.start("reveal");
    }
  }, [isInView, mainControl, slideControl]);

  return (
    <div className="testcomponent-container" ref={ref}>
      <motion.h1
        initial="hidden"
        animate={mainControl}
        transition={{ staggerChildren: 0.01 }}
      >
        {heading.map((char, index) => (
          <motion.span
            key={index}
            variants={charVariants}
            transition={{ duration: 0.5 }}
          >
            {char}
          </motion.span>
        ))}
      </motion.h1>
      <motion.p
        initial="hidden"
        animate={slideControl}
        transition={{ staggerChildren: 0.01 }}
      >
        {text.map((char, index) => (
          <motion.span
            key={index}
            variants={charVariants}
            transition={{ duration: 0.2 }}
          >
            {char}
          </motion.span>
        ))}
      </motion.p>
    </div>
  );
};

export default TestComponent;
