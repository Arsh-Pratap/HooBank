import React from "react";
import "./Features.css";
import star from "../../assets/Star.svg";
import shield from "../../assets/Shield.svg";
import send from "../../assets/Send.svg";
import playStore from "../../assets/google.svg";
import appleStore from "../../assets/apple.svg";
import billImage from "../../assets/bill.png";
import cardImage from "../../assets/card.png";
const Features = () => {
  return (
    <div>
      <div className="trusted-by container" id="about-us">
        <div className="trusted-by-card">
          <h2>3800+</h2>
          <h3 className="gradient-text">USER ACTIVE</h3>
        </div>

        <div className="trusted-by-card">
          <h2>230+</h2>
          <h3 className="gradient-text">TRUSTED BY COMPANY</h3>
        </div>

        <div className="trusted-by-card">
          <h2>$230M+</h2>
          <h3 className="gradient-text">TRANSACTION</h3>
        </div>
      </div>

      <div className="container features " id="features">
        <div className="features-blur-white"></div>
        <div className="features-blur-pink"></div>
        <div className="feature-card">
          <div className="feature-card-left">
            <h2>You do the business, we'll handle the money.</h2>
            <p>
              With the right credit card, you can improve your financial life by
              building credit, earning rewards and saving money. But with
              hundreds of credit cards on the market.
            </p>
            <a href="#features" className="primary-button">
              Get Started
            </a>
          </div>
          <div className="feature-card-right">
            <a href="#features" className="features-specifications">
              <div className="features-specification-img">
                <img alt="Features-img" src={star} />
              </div>
              <div className="features-specification-content">
                <h4>Rewards</h4>
                <p>
                  The best credit cards offer some tantalizing combinations of
                  promotions and prizes
                </p>
              </div>
            </a>
            <a href="#features" className="features-specifications">
              <div className="features-specification-img">
                <img alt="Features-img" src={shield} />
              </div>
              <div className="features-specification-content">
                <h4>100% Secured</h4>
                <p>
                  We take proactive steps make sure your information and
                  transactions are secure.
                </p>
              </div>
            </a>
            <a href="#features" className="features-specifications">
              <div className="features-specification-img">
                <img alt="Features-img" src={send} />
              </div>
              <div className="features-specification-content">
                <h4>Balance Transfer</h4>
                <p>
                  A balance transfer credit card can save you a lot of money in
                  interest charges.
                </p>
              </div>
            </a>
          </div>
        </div>

        <div className="feature-card">
          <div className="feature-card-left">
            <h2>Easily control your billing & invoicing.</h2>
            <p>
              Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
              aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
              placerat.
            </p>
            <div className="download-buttons">
              <a href="#features" className="download-buttons-btn">
                <img src={playStore} alt="download btn" />
              </a>

              <a href="#features" className="download-buttons-btn">
                <img src={appleStore} alt="download btn" />
              </a>
            </div>
          </div>
          <div className="feature-card-right">
            <img src={billImage} alt="bill-img " />
          </div>
        </div>

        <div className="feature-card">
          <div className="feature-card-left">
            <h2>Find a better card deal in few easy steps.</h2>
            <p>
              Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
              aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
            </p>
            <a href="#features" className="primary-button">
              Get Started
            </a>
          </div>
          <div className="feature-card-right">
            <img src={cardImage} alt="cards-img " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
