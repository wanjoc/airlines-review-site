import React from 'react'
import facebookLogo from "../imgs/facebooklogo.png";
import twitterLogo from "../imgs/twitterlogo.png";
import instagramLogo from "../imgs/instagramlogo.png";

import "./Footer.scss"

const Footer = () => {
  return (
    <footer className="social-links">
    <img src={facebookLogo} alt="Facebook Logo" />
    <img src={twitterLogo} alt="Twitter Logo" />
    <img src={instagramLogo} alt="Instagram Logo" />
  </footer>
  )
}

export default Footer