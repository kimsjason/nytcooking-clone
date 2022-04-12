import { ChevronRight } from "@mui/icons-material";
import { useEffect } from "react";
import StyledSubscribe from "../styles/Subscribe.styled";

const Subscribe = ({ setCurrentPage, showLogInPopup, hideLogInPopup }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    // hideLogInPopup();
    setCurrentPage("subscribe");
  }, []);

  const jumpToElement = () => {};

  return (
    <StyledSubscribe>
      <div className="subscribe">
        <div className="subscribe-hero">
          <img
            src={require("../assets/subscribe.jpg")}
            alt=""
            className="main-image"
          />
          <div className="text">
            <img
              src={require("../assets/nytimes.png")}
              alt=""
              className="ny-times"
            />
            <img
              src={require("../assets/cooking.png")}
              alt=""
              className="cooking"
            />
            <div className="hero-title">
              Recipes from experts for any occasion or taste.
            </div>
            <div className="hero-subtitle">
              Includes tens of recipes, a personal Recipe Box, video guides, and
              more.
            </div>
            <div
              className="subscribe-now"
              onClick={() => {
                const plans = document.querySelector(".subscription-plans");
                plans.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Subscribe Now
            </div>
            <ChevronRight
              className="scroll-down"
              onClick={() => {
                const container = document.querySelector(".container");
                container.scrollIntoView({ behavior: "smooth" });
              }}
            />
          </div>
        </div>
        <div className="container">
          <div className="box">
            <img src={require("../assets/subscribe-1.jpeg")} alt="" />
            <div className="main-text">Expert cooks. Essential recipes.</div>
            <div className="sub-text">
              You'll get unlimited digital access to 30+ recipes tested and
              curated by the experts at The Times, available on every device.
            </div>
          </div>
          <div className="box">
            <img src={require("../assets/subscribe-2.jpeg")} alt="" />
            <div className="main-text">Let us be your guide.</div>
            <div className="sub-text">
              From hamburgers to cassoulet, our food journalists and home cooks
              are here to serve — with easy-to-follow cooking guides offering
              recipes, videos, techniques and tips to help both novices and
              master chefs achieve success.
            </div>
          </div>
          <div className="box">
            <img src={require("../assets/subscribe-3.jpeg")} alt="" />
            <div className="main-text">
              The only Recipe Box you'll ever need.
            </div>
            <div className="sub-text">
              Build and organize your personal Recipe Box so all your culinary
              inspirations are in one place. Including recipes from outside The
              Times.
            </div>
          </div>
        </div>
        <div className="subscription-plans">
          <div className="header">Subscribe to NYT Cooking.</div>
          <div className="plans">
            <div className="monthly">
              <div className="rate">$5/month</div>
              <div className="subscribe-monthly" onClick={showLogInPopup}>
                Subscribe Monthly
              </div>
              <div className="bill-frequency">Billed as $5 every 4 weeks.</div>
            </div>
            <div className="yearly">
              <div className="rate">$40/year</div>
              <div className="subscribe-yearly" onClick={showLogInPopup}>
                Subscribe Yearly
              </div>
              <div className="bill-frequency">
                Billed as $40 for a 1-year subscription.
              </div>
            </div>
          </div>
          <div className="terms">
            Offers for a New York Times Cooking subscription. Your payment
            method will automatically be charged in advance every 4 weeks for a
            monthly subscription or once yearly for an annual subscription. Your
            subscription will continue until you cancel. Cancellation takes
            effect at the end of your current billing period. Annual subscribers
            with a Vermont billing address will be asked by email to consent to
            renewal. The print edition of The New York Times, digital news
            content and Games are not included. Taxes may apply. Offer terms are
            subject to change.
          </div>
        </div>
      </div>
    </StyledSubscribe>
  );
};

export default Subscribe;
