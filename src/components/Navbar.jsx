// src/components/Navbar.jsx
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import './Navbar.css';

const Navbars = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark" className='navColor' style={{
        background: "linear-gradient(135deg, #934133, #e49060)", // Gradient background
        fontFamily: "'Poppins', sans-serif", // Font family
        color: "#ffffff", // Font color
      }}>
        <Container>
          <Navbar.Brand href="/"           style={{ color: "#ffffff", fontWeight: "bold", fontSize: "1.5rem" }}
          >Blogee</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/" style={{ color: "#ffffff" }}>Home</Nav.Link>
            <Nav.Link href="/contact" style={{ color: "#ffffff" }}>Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
   
  );
};

export default Navbars;

// <nav className="navbar">
// <div className="logo">My Blog</div>
// <ul>
//   <li><a href="/">Home</a></li>
//   <li><a href="/contact">Contact</a></li>
// </ul>
// </nav>