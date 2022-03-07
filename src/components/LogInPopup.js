import { Close, Facebook, Google, Apple } from "@mui/icons-material";
import { StyledLogInPopup } from "../styles/LogInPopup.styled";

const LogInPopup = ({ currentPage, signIn, hideLogInPopup }) => {
  return (
    <StyledLogInPopup className="log-in-popup">
      <div
        className="overlay"
        onClick={currentPage === "recipe" ? () => {} : hideLogInPopup}
      >
        <div
          className="content"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          {currentPage === "recipe" ? (
            ""
          ) : (
            <Close className="close-icon" onClick={hideLogInPopup} />
          )}
          <div className="image-container">
            <img
              src={require("../assets/login-popup.jpg")}
              className="image"
              alt=""
            />
            <div className="caption">
              Unlock New York Times recipes and your personal recipe box with a
              free account.
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
              <div className="google" onClick={signIn}>
                <Google className="google-icon" />
                Continue with Google
              </div>
              <div className="facebook">
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
    </StyledLogInPopup>
  );
};

export { LogInPopup };
