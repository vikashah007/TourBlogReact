// src/components/Footer.jsx
import React from 'react';
// import './Footer.css';

const Footer = () => {
  return (
    <>
    <footer className="footer">
      <div className='footerSection'>
      <h3>Newsletter</h3>
      <p>Subscribe to our newsletter for the latest updates:</p>
      <input type="email" placeholder="Enter your email"/>
      <button type="submit">Subscribe</button>
      </div>
      <div className='footerSection footerHide'>
      <h3>Quick Links</h3>
      <ul className='pageLink'>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/privacy-policy">Privacy Policy</a></li>
        <li><a href="/terms-of-service">Terms of Service</a></li>
      </ul>
      </div>
      <div className='footerSection footerHide'>
      <h3>Follow Me</h3>
      <ul className="socialLinks">
        <li><a href="https://instagram.com/yourprofile" target="_blank">Instagram</a></li>
        <li><a href="https://twitter.com/yourprofile" target="_blank">Twitter</a></li>
        <li><a href="https://facebook.com/yourprofile" target="_blank">Facebook</a></li>
        <li><a href="https://pinterest.com/yourprofile" target="_blank">Pinterest</a></li>
      </ul>
      </div>
      
    </footer>
    <p className='footerRule'>© 2024 My Blog. All rights reserved.</p>
    </>
  );
};

export default Footer;
