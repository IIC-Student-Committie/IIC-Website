import { Parallax } from 'react-parallax';
import Event2 from "./Images/event2.jpg"
import "./Event.css"
const ImageTwo = () => (
    <Parallax className='image' blur={2} bgImage={Event2} bgImageAlt="the cat" strength={200}>
     
    </Parallax>
);
export default ImageTwo;