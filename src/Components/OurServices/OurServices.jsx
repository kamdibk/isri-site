import React, { useState, useEffect, useRef } from "react";
import "./OurServices.css";
import { OurservicesData } from "../../Data/OurServicesData";
import useWindowDimensions from "../Hooks/WindowDimensions/useWindowDimensions";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
//swiper-End

// icon
import { BiPlus } from "react-icons/bi";
//icon-end

// Framer Motion
import { motion, useInView, useAnimation } from "framer-motion";

const OurServices1 = () => {
  const [noOfSlides, setNoOfSlides] = useState(4);
  const [slideGap, setSlidegap] = useState(30);
  const { width } = useWindowDimensions();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const slideControl = useAnimation();

  const slideVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    if (isInView) {
      slideControl.start("visible");
    }
  }, [isInView, slideControl]);

  useEffect(() => {
    if (width <= 1070 && width >= 1020) {
      setSlidegap(55);
      setNoOfSlides(3);
    } else if (width <= 1020 && width >= 670) {
      setSlidegap(65);
      setNoOfSlides(2);
    } else if (width <= 670) {
      setNoOfSlides(1);
    } else {
      setNoOfSlides(4);
      setSlidegap(30);
    }
  }, [width]);

  return (
    <div className="ourservices-swiper-container" ref={ref}>
      <Swiper
        slidesPerView={noOfSlides}
        spaceBetween={slideGap}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {OurservicesData.map((key) => (
          <SwiperSlide key={key.id}>
            <motion.div
              initial="hidden"
              animate={slideControl}
              variants={slideVariants}
              transition={{ duration: 0.5, delay: key.id * 0.1 }}
            >
              <div className={key.id === 1 ? "first-slide" : ""}>
                <div className="ourservices-icon">{key.icon}</div>
                <div className="ourservices-heading">
                  <h2>{key.title}</h2>
                </div>
                <div className="ourservices-text">{key.text}</div>
                <div className="ourservices-button">
                  <BiPlus
                    size={30}
                    color="#c10417"
                    style={{ marginRight: "20px" }}
                  />{" "}
                  {"   "} Read More
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OurServices1;
