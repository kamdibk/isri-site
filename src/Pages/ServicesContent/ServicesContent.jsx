import React, { useEffect, useState, useRef } from "react";
import "./ServicesContent.css";
import { useParams } from "react-router-dom";
import routesConfig from "../../Routes/routes";
import useWindowDimensions from "../../Components/Hooks/WindowDimensions/useWindowDimensions";
import Footer from '../../Components/Footer/Footer'
import { motion, useAnimation, useInView } from "framer-motion";
import SplitString from "../../Utils/SplitString";

const ServicesContent = () => {
  const { width } = useWindowDimensions();
  const [isActive, setIsActive] = useState(false);
  const [isWide, setIsWide] = useState(false);
  const [isWhiteColor, setWhiteColor] = useState(false);
  const [gridItems, setGridItems] = useState(6);
  const { id } = useParams();
  const path = `services/${id}`;
  let content = routesConfig.services.find((route) => route.path === path);
  content = content.content;
  const headingPoints = content.headPoints;
  const quote = SplitString(content.quote.quote);
  const quoter = SplitString(content.quote.quoter);
  const whyus = content.whyUs;
  const Technologies = content.Technologies;
  const whatWeDo = content.whatWeDo;
  const [isMobileRoute, setIsMobileRoute] = useState(false);

  const returnBoxes = () => {
    if (id === "mobile-apps-development") {
      return null;
    }
    if (id === "ecommerce-solutions") {
      return Technologies.map((key, index) => {
        if (index < 4) {
          return (
            <motion.div
              className="box gray-box"
              key={index}
              variants={charVariants}
              initial="hidden"
              animate={techTransition}
              transition={{ duration: 2 }}
            >
              {key}
            </motion.div>
          );
        }
        return (
          <motion.div
            className="box"
            key={index}
            variants={charVariants}
            initial="hidden"
            animate={techTransition}
            transition={{ duration: 2 }}
          >
            {key}
          </motion.div>
        );
      });
    } else {
      return Technologies.map((key, index) => {
        return (
          <motion.div
            className="box"
            key={index}
            variants={charVariants}
            initial="hidden"
            animate={techTransition}
            transition={{ duration: 2 }}
          >
            {key}
          </motion.div>
        );
      });
    }
  };

  const changeGrid = isWide
    ? {
        gridTemplateColumns: `repeat(${gridItems},minmax(0,1fr))`,
      }
    : {};

  const changeToWhite = isWhiteColor
    ? {
        color: "white",
      }
    : {};

  useEffect(() => {
    if (id === "mobile-apps-development") {
      setIsActive(false);
    } else {
      setIsActive(true);
    }

    if (
      id === "website-development" ||
      id === "crm-solutions" ||
      id === "web-design" ||
      id === "hire-developer" ||
      id === "ai-ml"
    ) {
      setWhiteColor(true);
    } else {
      setWhiteColor(false);
    }

    if (
      width > 766 &&
      (id === "website-development" ||
        id === "cms-solutions" ||
        id === "crm-solutions")
    ) {
      if (id === "crm-solutions") setGridItems(4);
      else setGridItems(5);
      setIsWide(true);
    } else {
      setGridItems(6);
      setIsWide(false);
    }

    if (id === "mobile-apps-development") {
      setIsMobileRoute(true);
    } else {
      setIsMobileRoute(false);
    }
    returnBoxes();
  }, [id, width]);

  const mobContainer = isMobileRoute
    ? {
        background: "white",
        padding: "3rem",
      }
    : {};
  const headingStyle = isMobileRoute
    ? {
        paddingLeft: "1rem",
      }
    : {};
  const reasonBlock = isMobileRoute
    ? {
        height: "500px",
        border: "1px solid black",
      }
    : {};

  // Framer Motion
  const heroCompRef = useRef();
  const quoteCompRef = useRef();
  const whyUSRef = useRef();
  const whyChooseUsRef = useRef();
  const technologiesRef = useRef();

  const isHeroCompInView = useInView(heroCompRef, { once: true });
  const isQuoteInView = useInView(quoteCompRef, { once: true });
  const isWhyUSInView = useInView(whyUSRef, { once: true });
  const iswhyChooseUsInView = useInView(whyChooseUsRef, { once: true });
  const isTechnologiesInView = useInView(technologiesRef, { once: true });

  const slideUpTransition = useAnimation();
  const slideUpTransition2 = useAnimation();
  const slideUpTransition3 = useAnimation();
  const charTransition = useAnimation();
  const techTransition = useAnimation();

  useEffect(() => {
    if (isHeroCompInView) slideUpTransition.start("reveal");
    if (isQuoteInView) charTransition.start("reveal");
    if (isWhyUSInView) slideUpTransition2.start("reveal");
    if (iswhyChooseUsInView) slideUpTransition3.start("reveal");
    if (isTechnologiesInView) techTransition.start("reveal");
  }, [
    isHeroCompInView,
    isQuoteInView,
    slideUpTransition,
    charTransition,
    isWhyUSInView,
    iswhyChooseUsInView,
    isTechnologiesInView,
  ]);

  const slideUpVarient = {
    initial: { opacity: 0, y: 75 },
    reveal: { opacity: 1, y: 0 },
  };

  const charVariants = {
    hidden: { opacity: 0 },
    reveal: { opacity: 1 },
  };

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth }}
    >
      {content ? (
        <div className="services-content-main-container">
          <div className="services-content-container">
            {/* Hero Image */}
            <div
              className="services-pages-hero-image"
              style={{
                backgroundImage: `url(${content.heroImageLink})`,
              }}
              ref={heroCompRef}
            >
              <div className="services-page-hero-heading">
                <motion.h1
                  variants={slideUpVarient}
                  initial="initial"
                  animate={slideUpTransition}
                  transition={{ duration: 1 }}
                >
                  {content.heading}
                </motion.h1>
                <motion.ul
                  style={changeToWhite}
                  variants={slideUpVarient}
                  initial="initial"
                  animate={slideUpTransition}
                  transition={{ delay: 0.3, duration: 1 }}
                >
                  {headingPoints.map((element, key) => {
                    return <li key={key}>{element}</li>;
                  })}
                </motion.ul>
              </div>
            </div>
            {/* Quote */}
            <motion.div
              className="service-page-quote-container"
              ref={quoteCompRef}
            >
              <motion.center
                className="service-page-container-quote"
                initial="hidden"
                animate={charTransition}
                transition={{ staggerChildren: 0.03 }}
              >
                {quote.map((char, index) => (
                  <motion.span
                    key={index}
                    variants={charVariants}
                    transition={{ duration: 0.2 }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.center>
              <motion.center
                className="service-page-quoter"
                animate={charTransition}
                transition={{ staggerChildren: 0.03 }}
                initial="hidden"
              >
                {" "}
                {quoter.map((char, index) => (
                  <motion.span
                    variants={charVariants}
                    transition={{ delay: 2, duration: 3 }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.center>
            </motion.div>
            {/* why choose us */}
            <div className="whychooseus-container" ref={whyUSRef}>
              <div className="whychooseus-subcontainer">
                <h4 className="service-page-heading pt">WHY US ?</h4>
                <div className="whychooseus-rsn-blocks">
                  {whyus.map((key, index) => {
                    return (
                      <motion.div
                        className="service-whychooseus-rsn-block"
                        key={index}
                        initial="initial"
                        variants={slideUpVarient}
                        animate={slideUpTransition2}
                        transition={{ duration: 2 }}
                      >
                        <div className="service-rsn-block-icon">{key.icon}</div>
                        <div className="service-rsn-block-heading">
                          {key.heading}
                        </div>
                        <div className="service-rsn-block-text">
                          {key.reason}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
            {/* Technologies */}
            <div
              className={
                isActive
                  ? "service-page-technologies-main-container"
                  : "display-none"
              }
              ref={technologiesRef}
            >
              <div className="service-page-technologies-inner-container">
                <h4
                  className="service-page-heading"
                  style={{ paddingLeft: "2rem" }}
                >
                  Technologies
                </h4>
                <div
                  className={"service-page-technologies-grid-container"}
                  style={changeGrid}
                >
                  {returnBoxes()}
                </div>
              </div>
            </div>
            {/* What We Do */}
            <div className="whychooseus-container" ref={whyChooseUsRef}>
              <div className="whychooseus-subcontainer" style={mobContainer}>
                <h4 className="service-page-heading" style={headingStyle}>
                  What We Do
                </h4>
                <div className="whychooseus-rsn-blocks">
                  {whatWeDo.map((key, index) => (
                    <motion.iv
                      className="service-whychooseus-rsn-block h-ext"
                      key={index}
                      style={reasonBlock}
                      initial="initial"
                      variants={slideUpVarient}
                      animate={slideUpTransition3}
                      transition={{ duration: 2 }}
                    >
                      <div className="service-rsn-block-icon">{key.icon}</div>
                      <div className="service-rsn-block-heading">
                        {key.heading}
                      </div>
                      <div className="service-rsn-block-text">
                        {key.text}
                        {key.points ? (
                          <ul className="block-unordered-list">
                            {key.points.map((key, index) => (
                              <li key={index}>{key}</li>
                            ))}
                          </ul>
                        ) : null}
                      </div>
                    </motion.iv>
                  ))}
                </div>
              </div>
            </div>
            <div>Our Development Works</div>
            <div>Why ISRI is one of the best IT companies</div>
            <Footer/>
          </div>
        </div>
      ) : (
        // End
        <h1>Content not found</h1>
      )}
    </motion.div>
  );
};

export default ServicesContent;
