
import './App.css';
import Footer from './components/Footer';
import CustomNavbar from './components/Navbar';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Event from './pages/Event';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
   
    <Router>
    <div style={{backgroundColor:"#000"}}>
      <CustomNavbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/event" element={<Event/>} />
        


  
      </Routes>
      <Footer/>
    </div>
   
    </Router>
  );
}

export default App;
