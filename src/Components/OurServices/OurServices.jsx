import React from 'react'
import './OurServices.css'
import { BsShieldLock } from "react-icons/bs";
const OurServices = () => {
  return (
    <div className='ourservices-main-container'>
        <center className='ourservices-main-center'>
            <div className="ourservices-item">
                <div className='ourservices-icon'><BsShieldLock size={32} color='blue' style={{fontWeight:"bolder"}}/></div>
                <div className='ourservices-heading'></div>
                <div className='ourservices-text'></div>
                <div className='ourservices-button'></div>
            </div>
            <div className="ourservices-item"></div>
            <div className="ourservices-item"></div>
            <div className="ourservices-item"></div>
        </center>
    </div>
  )
}

export default OurServices