import { Parallax } from 'react-parallax';
import Event1 from "./Images/event1.jpg"
import "./Event.css"
const ImageOne = () => (
    <Parallax className='image' blur={5} bgImage={Event1} bgImageAlt="the cat" strength={200}>
      
    </Parallax>
);
export default ImageOne;