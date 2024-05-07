import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./OurServicesSwiper.css";
import { Pagination } from "swiper/modules";
//
import { GrTechnology } from "react-icons/gr";
import { BiPlus } from "react-icons/bi";

const OurServicesSwiper = () => {
    const clr = "#07597F" ;
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          {" "}
          <div className="ourservices-item">
            <div className="ourservices-icon">
              <GrTechnology size={60} color={clr} />
            </div>
            <div className="ourservices-heading">
              <h2>
                Infrastructure
                <br />
                Technology
              </h2>
            </div>
            <div className="ourservices-text">
              Accelerate innovation with world-class tech teams We’ll match you
              to an entire remote team of incredible freelance talent.
            </div>
            <div className="ourservices-button">
              <BiPlus size={30} color="blue" style={{ marginRight: "20px" }} />{" "}
              {"   "} Read More
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
};

export default OurServicesSwiper;
