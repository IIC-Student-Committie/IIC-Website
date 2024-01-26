import React, { useEffect } from 'react';
import "../Home.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const About1 = (props) => {
  useEffect(() => {
    AOS.init({ duration: 2000 }, { offset: 200 });
  }, []);

  const orderClass = props.order === 'first' ? 'order-first' : 'order-last';

  return (
    <div className='container' style={{ color: "#fff",marginTop:"40px",marginBottom:"100px"}}>
      <div className='row'>
        <div className={`col-md-6 ${orderClass}`}>
          <h1 style={{ fontWeight: "700", textAlign: "center", marginTop: "50px" }}>{props.title}</h1>
          <p style={{ textAlign: "center" }}>{props.desc}</p>
        </div>
        <div className={`col-md-6 ${orderClass}`}>
          <img className='' style={{ width: "100%", height: "auto", borderRadius: "20px" }} src={props.image} data-aos="zoom-in" alt={props.alt} />
        </div>
      </div>
    </div>
  )
}

export default About1;
