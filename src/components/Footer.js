import React from 'react';
import './Footer.css'; // Make sure this line exists to apply styles

const Footer = () => (
  <footer className="footer">

    <p>&copy; {new Date().getFullYear()} Royals Webtech Pvt. Ltd. All rights reserved.</p>
  </footer>
);

export default Footer;
