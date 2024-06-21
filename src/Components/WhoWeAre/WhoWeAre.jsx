import React, { useEffect, useState, useRef } from "react";
import "./WhoWeAre.css";
import sign from "../../images/sign.png";
import useWindowDimensions from "../Hooks/WindowDimensions/useWindowDimensions";
import SplitString from "../../Utils/SplitString";
// Framer
import { motion, useInView, useAnimation, transform } from "framer-motion";

const WhoWeAre = () => {
  const ref = useRef();
  const subHead1 = SplitString("Highly Tailored IT Design,");
  const subHead2 = SplitString("Management & Support");
  const subHead3 = SplitString("Services.");
  const text = SplitString(
    "Accelerate innovation with world-class tech teams We’ll match you to an entire remote team of incredible freelance talent for all your software development needs."
  );

  const [showDiv, setShowDiv] = useState(false);
  const { width } = useWindowDimensions();
  useEffect(() => {
    if (width <= 990) {
      setShowDiv(true);
    } else {
      setShowDiv(false);
    }
  }, [width]);

  // Animation
  const isInView = useInView(ref, { once: true });
  const mainControl = useAnimation();
  const slideControl = useAnimation();
  const slideDownControl = useAnimation();

  const slideVarients = {
    start1: { opacity: 0, x: "-13%" },
    start2: { opacity: 0, x: "108%" },
    reveal: { opacity: 1, x: 0 },
  };

  const charVariants = {
    hidden: { opacity: 0 },
    reveal: { opacity: 1 },
  };

  const fadeInVariant = {
    initial: { opacity: 0, y : '-20%' }, 
    reveal: { opacity: 1,  y : 0},
  };

  useEffect(() => {
    if (isInView) {
      mainControl.start("reveal");
      slideControl.start("reveal");
      slideDownControl.start("reveal");
    }
  }, [isInView, mainControl, slideControl, slideDownControl]);

  return (
    <div className="whoweare-container" ref={ref}>
      <div className="whoweare-subcontainer">
        <div className="whoweare-contant">
          <motion.div
            className="whoweare-container-left"
            variants={slideVarients}
            initial="start1"
            animate={slideControl}
            transition={{ duration: 1 }}
          >
            <h4 className="whoweare-heading-txt">WHO WE ARE</h4>
            <motion.div
              className="whoweare-sub-txt"
              initial="hidden"
              animate={mainControl}
              transition={{ staggerChildren: 0.04 }}
            >
              {" "}
              {subHead1.map((char, index) => (
                <motion.span
                  key={index}
                  variants={charVariants}
                  transition={{ duration: 0.2 }}
                >
                  {char}
                </motion.span>
              ))}
              <br />
              {subHead2.map((char, index) => (
                <motion.span
                  key={index}
                  variants={charVariants}
                  transition={{ duration: 0.2 }}
                >
                  {char}
                </motion.span>
              ))}
              <br />
              {subHead3.map((char, index) => (
                <motion.span
                  key={index}
                  variants={charVariants}
                  transition={{ duration: 0.2 }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.div>
            <motion.div
              className="whoweare-text"
              initial="hidden"
              animate={mainControl}
              transition={{ staggerChildren: 0.02 }}
            >
              {text.map((char, index) => (
                <motion.span
                  key={index}
                  variants={charVariants}
                  transition={{ duration: 0.03 }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.div>
            <motion.div
              className="inner-div"
              variants={fadeInVariant}
              initial="initial"
              animate={slideDownControl}
              transition={{ duration: 1}}
            >
              <div className="inner-div-child-left">
                <div className="who-we-are-left-sign">
                  <img src={sign} alt="sig" className="sign-img" />
                </div>
                <div className="who-we-are-left-name">Lorem Bhau</div>
                <div className="who-we-are-left-desig">CEO, Somewhere</div>
              </div>
              <div className="inner-div-child-right">
                <div className="who-we-are-text">Call to ask any question</div>
                <div className="who-we-are-num">+91 0987654321</div>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            className="whoweare-container-right"
            variants={slideVarients}
            initial="start2"
            animate={slideControl}
            transition={{ duration: 1 }}
          >
            {showDiv ? (
              <div className="show-div">
                <div className="whoweare-container-right-img1"></div>
                <div className="whoweare-container-right-img2"></div>
              </div>
            ) : (
              <>
                <div className="whoweare-container-right-img1"></div>
                <div className="whoweare-container-right-img2"></div>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
