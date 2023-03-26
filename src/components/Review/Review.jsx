import React from "react";
import "./Review.css";
import quotesImage from "../../assets/quotes.svg";
import people1 from "../../assets/people01.png";
import people2 from "../../assets/people02.png";
import people3 from "../../assets/people03.png";
// brands
import airbnb from "../../assets/airbnb.png";
import binance from "../../assets/binance.png";
import coinbase from "../../assets/coinbase.png";
import dropbox from "../../assets/dropbox.png";

const Review = () => {
  return (
    <div>
      <div className="review-section container">
        <div className="review-header">
          <h2>What people are saying about us</h2>
          <p>
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
        <div className="reviews">
          <div className="review-card">
            <img src={quotesImage} className="quotes-img" alt="img" />
            <p>
              Money is only a tool. It will take you wherever you wish, but it
              will not replace you as the driver.
            </p>

            <div className="people-profile">
              <div className="people-profile-left">
                <img src={people1} alt="profile-img" />
              </div>
              <div className="people-profile-right">
                <p>Herman Jensen</p>
                <span>Founder & Leader</span>
              </div>
            </div>
          </div>

          <div className="review-card">
            <img src={quotesImage} className="quotes-img" alt="img" />
            <p>
              Money makes your life easier. If you're lucky to have it, you're
              lucky.
            </p>

            <div className="people-profile">
              <div className="people-profile-left">
                <img src={people2} alt="profile-img" />
              </div>
              <div className="people-profile-right">
                <p>Steve Mark</p>
                <span>Founder & Leader</span>
              </div>
            </div>
          </div>

          <div className="review-card">
            <img src={quotesImage} className="quotes-img" alt="img" />
            <p>
              It is usually people in the money business, finance, and
              international trade that are really rich.
            </p>

            <div className="people-profile">
              <div className="people-profile-left">
                <img src={people3} alt="profile-img" />
              </div>
              <div className="people-profile-right">
                <p>Kenn Gallagher</p>
                <span>Founder & Leader</span>
              </div>
            </div>
          </div>
        </div>
        <div className="review-section-blur"></div> 
      </div>

      <div className="brands-container container">
        <img src={airbnb} alt="company-logo" />
        <img src={binance} alt="company-logo" />
        <img src={coinbase} alt="company-logo" />
        <img src={dropbox} alt="company-logo" />
      </div>
    </div>
  );
};

export default Review;
