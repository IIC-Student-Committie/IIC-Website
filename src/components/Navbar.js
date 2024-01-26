import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
// import { Link } from 'react-router-dom';


const CustomNavbar = () => {
  return (
    <Navbar bg="transparent" variant="dark" expand="lg" style={{ fontSize: '20px', fontWeight: '700' }}>
      <Navbar.Brand className="" style={{ paddingLeft: '30px' }} href="#">
        <img src="logo.png" style={{ width: '80px' }} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link href="/" style={{ marginRight: '15px' }}>
            Home
          </Nav.Link>
          <Nav.Link href="/about" style={{ marginRight: '15px' }}>
            About Us
          </Nav.Link>
          <Nav.Link href="/contact" className='event' style={{marginRight: '15px' }}>
            Contact
          </Nav.Link>
          <Nav.Link href="/event" className='event' style={{ marginRight: '65px' }}>
            Events
          </Nav.Link>
          {/* <Nav.Link href="#">Contact Us</Nav.Link> */}
        </Nav>
      </Navbar.Collapse>
      <style jsx>{`
        @media (max-width: 768px) {
          .navbar-nav {
            text-align: center;
            margin: 0 auto;
          }

          .navbar-nav .nav-link {
            display: block;
            text-align: center;
          }
          .event{
            margin-left: 50px;
          }
        }
      `}</style>
    </Navbar>
  );
};

export default CustomNavbar;
