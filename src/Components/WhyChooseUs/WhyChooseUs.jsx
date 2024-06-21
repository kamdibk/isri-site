import { useEffect, useRef } from "react";
import "./WhyChooseUs.css";
import { WhyChooseUsData } from "../../Data/WhyChooseUsData";
import SplitString from "../../Utils/SplitString";
// Framer
import { motion, useInView, useAnimation } from "framer-motion";

const WhyChooseUs = () => {
  const subHeading = SplitString("WE TRANSFORM YOUR BUSINESS");
  const ref = useRef();
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const slideControl = useAnimation();
  const blockControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControl.start("visible");
      blockControls.start("visible");
    }
  }, [isInView, mainControls, slideControl, blockControls]);

  return (
    <div className="whychooseus-container" ref={ref}>
      <div className="whychooseus-subcontainer">
        <div className="whychooseus-content">
          <h4 className="heading-text">WHY CHOOSE US</h4>
          <div
            className="heading-wrapper"
            style={{ position: "relative", display: "inline-block" }}
          >
            <motion.h1
              className="h1-txt stroke-text2"
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              WE TRANSFORM YOUR BUSINESS
            </motion.h1>
            <motion.div
              className="green-slide"
              variants={{
                hidden: { left: 0 },
                visible: { left: "100%" },
              }}
              initial="hidden"
              animate={slideControl}
              transition={{ duration: 0.5, ease: "easeIn" }}
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                background: "#800000",
                zIndex: 10,
              }}
            />
          </div>
          <div className="whychooseus-rsn-blocks">
            {WhyChooseUsData.map((key) => {
              return (
                <motion.div
                  className="whychooseus-rsn-block"
                  key={key.id}
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  animate={blockControls}
                  transition={{ duration: 0.5, delay: key.id * 0.1 }}
                >
                  <div className="rsn-block-icon">{key.icon}</div>
                  <div className="rsn-block-heading">{key.heading}</div>
                  <div className="rsn-block-text">{key.description}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
