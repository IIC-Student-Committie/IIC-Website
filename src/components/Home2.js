import React, { useEffect } from 'react';
import "./Home.css";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Home2 = () => {
    useEffect(() => {
        AOS.init({duration:2000},{offset:200});
      
      }, [])
    //   const windows=window.innerWidth>786;
  return (
    <div className='container'>
    <img className='right-image' src='bulb2.png' data-aos="zoom-in-up"/>
    </div>
  )
}

export default Home2