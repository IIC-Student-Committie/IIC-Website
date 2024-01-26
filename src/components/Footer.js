// Footer.js

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
  return (
    <footer className="text-light py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-3 mb-3 mb-md-0">
           <img src='logo.png' style={{width:"150px"}}/>
          </div>
          <div className="col-md-3 mb-3 mb-md-0">
            <h5>Location</h5>
            <p>Thadomal Shahani Engineering College, Bandra West, Mumbai </p>
          </div>
         
          <div className="col-md-3">
            <h5>Connect With us</h5>
            <div >
            <a className='d-flex' style={{color:"#fff",textDecoration:"none"}} href='https://www.gmail.com'>
           <img src='gamil.png' style={{width:"20px",height:"20px",margin:"3px"}}/> <p>iictsec@gmail.com</p>
           </a>
                <a className='d-flex' style={{color:"#fff",textDecoration:"none"}} href='https://www.instagram.com/iictsec?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='>
           <img src='insta.png' style={{width:"20px",height:"20px",margin:"3px"}}/> <p>Instagram</p>
           </a>
           </div>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
