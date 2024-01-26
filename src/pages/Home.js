import React from 'react'
// import Cursor from '../components/Home/Cursor'
import "../components/Home.css";
import Home1 from '../components/Home1';
import Home2 from '../components/Home2';
import Clock from '../components/Clock';
import Sponsor from '../components/Sponsor';


const Home = () => {
  return (
  <>
  <div className='container' style={{backgroundColor:"#000"}}>
  <div className='row'>
    <div className='col-md-6'>
 <Home1/>
 </div>
 <div className='col-md-6'>
 <Home2/>
 </div>
 </div>
 <h1 style={{color:"#fff", textAlign:"center",marginBottom:"20px"}}>Time Remaining for Ideathon</h1>
<Clock/>
<Sponsor/>
 </div>
  </>
  )
}

export default Home