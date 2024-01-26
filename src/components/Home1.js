import React from 'react'
import Cursor from './Cursor'
import "./Home.css";

const Home1 = () => {
  return (
    <div className='home_container col-lg-12 col-md-12 col-sm-12' style={{height:"100vh"}}>
      <div className='container1'>
      <p style={{color:"#fff"}}>TSEC</p>
      <h1 style={{color:"#fff"}}>Institute's Innovation Council</h1>
      </div>
      <div className='cursor_div'>
      <Cursor/>
      
      </div>
    </div>
  )
}

export default Home1