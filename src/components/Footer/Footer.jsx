import React from "react";
import "./Footer.css";
import comapanyLogo from "../../assets/logo.svg";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import linkedin from "../../assets/linkedin.svg";
import twitter from "../../assets/twitter.svg";

const Footer = () => {
  return (
    <div className="footer-section container" id="contact">
      <div className="footer-header">
        <div className="footer-logo-column">
          <img src={comapanyLogo} alt="company-logo" className="logo" />
          <p>A new way to make the payments easy, reliable and secure.</p>
        </div>
        <div className="footer-column">
          <h3>Usefull Links</h3>
          <a href="#footer">
            <p>Content</p>
          </a>
          <a href="#footer">
            <p>How it Works</p>
          </a>
          <a href="#footer">
            <p>Create</p>
          </a>
          <a href="#footer">
            <p>Explore</p>
          </a>
          <a href="#footer">
            <p>Terms & Services</p>
          </a>
        </div>

        <div className="footer-column">
          <h3>Community</h3>
          <a href="#footer">
            <p>Help Center</p>
          </a>
          <a href="#footer">
            <p>Partners</p>
          </a>
          <a href="#footer">
            <p>Suggestions</p>
          </a>
          <a href="#footer">
            <p>Blog</p>
          </a>
          <a href="#footer">
            <p>Newsletters</p>
          </a>
        </div>

        <div className="footer-column">
          <h3>Partner</h3>
          <a href="#footer">
            <p>Our Partner</p>
          </a>
          <a href="#footer">
            <p>Become a Partner</p>
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Made by Arsh</p>
        <div className="social-icons">
          <a href="#footer">
            <img src={instagram} alt="fb" />
          </a>
          <a href="#footer">
            <img src={facebook} alt="fb" />
          </a>
          <a href="#footer">
            <img src={twitter} alt="fb" />
          </a>
          <a href="#footer">
            <img src={linkedin} alt="fb" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
