import React, { useEffect } from 'react';
import Typed from 'typed.js';

const Cursor = () => {
  
  useEffect(() => {
    const options = {
      strings: ['Innovate', ' Elevate', 'Reimagine', 'Revolutionize', 'Modernize'],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed('.auto-type', options);

    // Clean up the Typed instance when the component unmounts
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="content" style={{marginTop:"-300px"}}>
    <h1 className='mt-10 absolute z-40 ml-44 mt-52 text-[70px] font-bold' style={{ textShadow: '2px 2px #000',color:"#0047AB" }}>
     #<span className="auto-type"></span>
    </h1>
  </div>
  
  );
};

export default Cursor;
