import React,{useState,useEffect} from "react";
import "./OurServices.css";
import { OurservicesData } from "../../Data/OurServicesData";
import useWindowDimensions from "../Hooks/WindowDimensions/useWindowDimensions";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import { Pagination,Navigation } from "swiper/modules";
//swiper-End

// icon
import { BiPlus } from "react-icons/bi";
//icon-end

const OurServices1 = () => {
  const [noOfSlides,setNoOfSlides] = useState(4)
  const [slideGap,setSlidegap] = useState(30);
  const {width} = useWindowDimensions();
  useEffect(()=>{
    if(width<=1300 && width>=1020){
      setSlidegap(55)
      setNoOfSlides(3)
    }
    else if(width<=1020 && width>=670){
      setSlidegap(65)
      setNoOfSlides(2)
    }
    else if(width<=670){
      setNoOfSlides(1)
    }
    else{
      setNoOfSlides(4)
      setSlidegap(30)
    }
  },[width])
  return (
    <div className="ourservices-swiper-container">
      <Swiper 
        slidesPerView={noOfSlides} 
        spaceBetween={slideGap} 
        pagination={{clickable: true,}}
        navigation={true}
        modules={[Pagination,Navigation]}
        className="mySwiper"
      >
        {
        OurservicesData.map((key)=>{
          return(
            <SwiperSlide key={key.id}>
            <div className="ourservices-icon">
                 {key.icon}
            </div>
            <div className="ourservices-heading">
              <h2>{key.title}</h2>
            </div>
            <div className="ourservices-text">
              {key.text}
            </div>
            <div className="ourservices-button">
              <BiPlus size={30} color="blue" style={{ marginRight: "20px" }} />{" "}
              {"   "} Read More
            </div>
            </SwiperSlide>
          )
        })
      }
      </Swiper>
    </div>
  );
};

export default OurServices1;
