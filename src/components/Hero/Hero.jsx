import React from "react";
import "./Hero.css";
import Discount from "../../assets/Discount.svg";
import Robot from "../../assets/robot.png";
import { BsArrowUpRight } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="hero-container" id="home">
      <script>
        document.documentElement.setAttribute("data-agent", navigator.userAgent)
      </script>
      <div className="left-container">
        <div className="left-container-blur"></div>
        <div className="discount-tag-container">
          <img src={Discount} alt="discount-img" />
          <p>
            <span className="focus-text">20%</span> DISCOUNT FOR
            <span className="focus-text"> 1 MONTH </span> ACCOUNT
          </p>
        </div>
        <div className="main-content">
          <h1 className="main-text">
            <div className="main-text-first-part main-text-h1 ">
              The Next{" "}
              <span className="gradient-text main-text-h1">Generation</span>
            </div>
            <div className="circle-button ">
              <a href="#home">
                <span className="gradient-text arrow-left">Get</span>

                <BsArrowUpRight className="arrow" color="#fff" size={15} />
                <span className="gradient-text"> Started</span>
              </a>
            </div>
          </h1>
          <div className="main-text-last-part main-text-h1">
            <h1> Payment Method. </h1>
          </div>
        </div>
        <div className="sub-content">
          <p>
            Our team of experts uses a methodology to identify the credit cards
            most likely to fit your needs. We examine annual percentage rates,
            annual fees.
          </p>
        </div>
      </div>
      <div className="right-container">
        <img src={Robot} alt="img" />
        <div className="right-container-blur" id="blur"></div>
      </div>
      <div className="circle-button-mobile ">
        <a href="#home">
          <span className="gradient-text arrow-left">Get</span>

          <BsArrowUpRight className="arrow" color="#fff" size={15} />
          <span className="gradient-text"> Started</span>
        </a>
      </div>
    </div>
  );
};

export default Hero;
