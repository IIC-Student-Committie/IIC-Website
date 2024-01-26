import React from 'react'
import ImageOne from '../components/Event/ImageOne'
import ImageTwo from '../components/Event/ImageTwo'
import ImageThree from '../components/Event/ImageThree'
import TextBox from '../components/Event/TextBox'

const Event = () => {
  return (
    <>
    {/* <div style={{textAlign:"center",color:"#fff",fontWeight:"750",fontSize:"40px"}}>Our Events</div> */}
    <TextBox title=" Event Overview" desc="The Ideathon is not just a competition; it's a celebration of ingenious ideas, a platform where innovation knows no bounds. Participants are encouraged to unleash their creativity and present their unique ideas for a product or startup. This event is a golden opportunity for visionaries, dreamers, and innovators to showcase their potential and make their mark on the world."/>
<ImageOne/>
<TextBox title="Why Participate?" desc="The Ideathon is not just about showcasing ideas; it's about recognizing the brilliance that lies within each innovation. Stand a chance to be acknowledged for your creative prowess and vision. Beyond the accolades, outstanding ideas may receive opportunities for funding and support, helping them transition from concept to reality. Join us at the Ideathon 2024, where innovation meets recognition, and your ideas become the building blocks of a transformative future."/>
<ImageThree/>
</>


  )
}

export default Event