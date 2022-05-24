import React from "react";

import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="social-links">
      <img
        src="https://airlines-review-images.s3.us-west-2.amazonaws.com/facebooklogo.png"
        alt="Facebook Logo"
      />
      <img
        src="https://airlines-review-images.s3.us-west-2.amazonaws.com/twitterlogo.png"
        alt="Twitter Logo"
      />
      <img
        src="https://airlines-review-images.s3.us-west-2.amazonaws.com/instagramlogo.png"
        alt="Instagram Logo"
      />
    </footer>
  );
};

export default Footer;