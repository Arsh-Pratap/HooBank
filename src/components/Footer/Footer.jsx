import React from "react";
import "./Footer.css";
import comapanyLogo from "../../assets/logo.svg"
import facebook from "../../assets/facebook.svg"
import instagram from "../../assets/instagram.svg"
import linkedin from "../../assets/linkedin.svg"
import twitter from "../../assets/twitter.svg"

const Footer = () => {
  return (
    <div className="footer-section container" id="contact">
      <div className="footer-header">
        <div className="footer-logo-column">
        <img src={comapanyLogo} alt="company-logo" className="logo"/>
        <p>A new way to make the payments easy, reliable and secure.</p>
        </div>
        <div className="footer-column">
          <h3>Usefull Links</h3>
          <p>Content</p>
          <p>How it Works</p>
          <p>Create</p>
          <p>Explore</p>
          <p>Terms & Services</p>
        </div>

        <div className="footer-column">
          <h3>Community</h3>
          <p>Help Center</p>
          <p>Partners</p>
          <p>Suggestions</p>
          <p>Blog</p>
          <p>Newsletters</p>
        </div>

        <div className="footer-column">
          <h3>Partner</h3>
          <p>Our Partner</p>
          <p>Become a Partner</p>
        </div>
      </div>
      <div className="footer-bottom">
      <p>Made by Arsh</p>  <div className="social-icons">
      <a href="#footer" ><img src={instagram} alt="fb" /></a>
      <a href="#footer" ><img src={facebook} alt="fb" /></a>
      <a href="#footer" ><img src={twitter} alt="fb" /></a>
      <a href="#footer" ><img src={linkedin} alt="fb" /></a>
      </div></div>
      
    </div>
  );
};

export default Footer;
