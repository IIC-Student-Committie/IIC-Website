import { Parallax } from 'react-parallax';
import Event3 from "./Images/event3.jpg"
import "./Event.css"
const ImageThree = () => (
    <Parallax className='image' blur={2} bgImage={Event3} bgImageAlt="the cat" strength={200}>
       {/* <div className='content'>
        <span className='img-txt'>A trip to Space</span>
       </div> */}
    </Parallax>
);
export default ImageThree;