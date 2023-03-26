import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);


  return (
    <div className="navbar-container">
    
      <div className="navbar-logo">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="navbar-links">
        <ul>
          <li>
            <a className="hover-links" href="#home">Home</a>
          </li>
          <li>
            <a className="hover-links" href="#about-us">About Us</a>
          </li>
          <li>
            <a className="hover-links" href="#features">Features</a>
          </li>
          <li>
            <a className="hover-links" href="#contact">Contact US</a>
          </li>
        </ul>
      </div>
      <div className="navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
      
            color="#fff"
            size={27}
            onClick={() => {
              setToggleMenu(false);

            }}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => {
              setToggleMenu(true);

            }}
          />
        )}
        {toggleMenu && (
          <div className="navbar-menu-links  scale-up-center">
     
              <ul>
                <li>
                  <a className="hover-links" href="#home">Home</a>
                </li>
                <li>
                  <a className="hover-links" href="#about-us">About Us</a>
                </li>
                <li>
                  <a className="hover-links" href="#features">Features</a>
                </li>
                <li>
                  <a className="hover-links" href="#solution">Solution</a>
                </li>
              </ul>

          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
