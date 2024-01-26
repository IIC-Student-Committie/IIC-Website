import React, { useEffect } from 'react'
import "./Home.css";

import AOS from 'aos';
import 'aos/dist/aos.css';


const Sponsor = () => {
    useEffect(() => {
        AOS.init({duration:2000},{offset:200});
      
      }, [])
  return (
    <>
    
    <div style={{color:"#fff",textAlign:"center",fontSize:"35px",fontWeight:"700",marginTop:"50px"}}>Title Sponsor</div>
    <img className='sponsor' src='sponsor.jpg' data-aos="zoom-out"/>

    <div style={{color:"#fff",textAlign:"center",fontSize:"35px",fontWeight:"700",marginTop:"50px"}}>Other Sponsors</div>
    <div></div>
    </>
  )
}

export default Sponsor