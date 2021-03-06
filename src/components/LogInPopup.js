import { Link } from "react-router-dom";
import { StyledLogInPopup } from "../styles/LogInPopup.styled";
import { Close, Facebook, Apple } from "@mui/icons-material";
import { ReactComponent as Logo } from "../assets/nyt-cooking-logo.svg";

const LogInPopup = ({
  currentPage,
  signInWithGoogle,
  signInWithFacebook,
  hideLogInPopup,
}) => {
  const showWebPopup = () => {
    const webPopup = document.querySelector(".popup-web");
    const mobilePopup = document.querySelector(".popup-mobile");
    webPopup.classList.add("flex");
    mobilePopup.classList.add("hidden");
  };

  const hideWebPopup = () => {
    const webPopup = document.querySelector(".popup-web");
    const mobilePopup = document.querySelector(".popup-mobile");
    webPopup.classList.remove("flex");
    mobilePopup.classList.remove("hidden");
  };

  return (
    <StyledLogInPopup className="log-in-popup hidden">
      <div
        className="overlay"
        onClick={() => {
          hideWebPopup();
          if (
            currentPage !== "recipe" &&
            currentPage !== "cooking-guide" &&
            currentPage !== "recipe-box"
          ) {
            hideLogInPopup();
          }
        }}
      >
        <div
          className="content"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          <div className="popup-mobile">
            <div className="header">
              Welcome to
              <Logo className="nyt-cooking-logo" />
              <div className="description">
                Unlock New York Times recipes and your personal recipe box with
                a free account.
              </div>
              <div className="options">
                <div className="create-account">Create Account</div>
                <div className="log-in" onClick={showWebPopup}>
                  Log In
                </div>
                <div className="subscribe">Subscribe Now</div>
              </div>
              <div
                className="home"
                onClick={() => {
                  if (currentPage === "home") {
                    hideLogInPopup();
                  }
                }}
              >
                <Link to="/">No thanks,</Link> <span>take me home</span>
              </div>
            </div>
          </div>
          <div className="popup-web">
            {currentPage === "recipe" ||
            currentPage === "cooking-guide" ||
            currentPage === "recipe-box" ? (
              ""
            ) : (
              <Close
                className="close-icon"
                onClick={() => {
                  hideLogInPopup();
                  hideWebPopup();
                }}
              />
            )}
            <div className="image-container">
              <img
                src={require("../assets/login-popup.jpg")}
                className="image"
                alt="hamburger"
              />
              <div className="caption">
                Unlock New York Times recipes and your personal recipe box with
                a free account.
              </div>
            </div>
            <div className="log-in-info">
              <div className="header">
                Enter your email address to log in or create an account.
              </div>
              <div className="log-in-email">
                <label>Email Address</label>
                <input type="text" className="email-address" />
                <div className="continue">Continue</div>
              </div>
              <div className="divider-container">
                <span className="divider"></span> or{" "}
                <span className="divider"></span>
              </div>
              <div className="terms-and-privacy">
                By continuing, you agree to the Terms of Service and acknowledge
                our Privacy Policy.
              </div>
              <div className="log-in-social">
                <div className="google" onClick={signInWithGoogle}>
                  <img
                    src={require("../assets/google-icon.png")}
                    className="google-icon"
                    alt="google logo icon"
                  />
                  Continue with Google
                </div>
                <div className="facebook" onClick={signInWithFacebook}>
                  <Facebook className="facebook-icon" />
                  Continue with Facebook
                </div>
                <div className="apple">
                  <Apple className="apple-icon" />
                  Continue with Apple
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledLogInPopup>
  );
};

export default LogInPopup;
