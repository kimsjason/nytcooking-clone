import { StyledFooter } from "../styles/Footer.styled";
import {
  Instagram,
  Facebook,
  YouTube,
  Twitter,
  Pinterest,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <StyledFooter>
      <div className="footer">
        <div className="footer-1">
          <div className="newsletter-container">
            <div className="newsletter-title">Get Our Newsletter</div>
            <div className="newsletter-text">
              Get recipes, tips and NYT special offers delivered straight to
              your inbox. Opt out or contact us anytime. See our Privacy Policy.
            </div>
            <div className="sign-up-container">
              <input
                type="text"
                className="email"
                placeholder="Add Your Email"
              />
              <button className="sign-up-button">Sign Up</button>
            </div>
          </div>
          <div className="social-media-app-stores">
            <div className="social-media-container">
              <div className="social-media-title">FOLLOW US</div>
              <div className="social-media-links">
                <a
                  className="instagram-link"
                  href="https://www.instagram.com/nytcooking"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Instagram className="instagram-icon" />
                </a>
                <a
                  className="facebook-link"
                  href="https://www.facebook.com/nytcooking"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Facebook className="facebook-icon" />
                </a>
                <a
                  className="youtube-link"
                  href="https://www.youtube.com/nytcooking"
                  target="_blank"
                  rel="noreferrer"
                >
                  <YouTube className="youtube-icon" />
                </a>
                <a
                  className="twitter-link"
                  href="https://twitter.com/nytfood"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Twitter className="twitter-icon" />
                </a>
                <a
                  className="pinterest-link"
                  href="https://www.pinterest.com/nytcooking/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Pinterest className="pinterest-icon" />
                </a>
              </div>
            </div>
            <div className="app-store-download">
              <div className="text">GET THE APP</div>
              <div className="app-stores">
                <a
                  href="https://apps.apple.com/us/app/nyt-cooking/id911422904"
                  className="apple-app-store-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="apple-app-store"
                    src={require("../assets/apple-app-store.png")}
                    alt="apple app store icon"
                  />
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.nytimes.cooking"
                  className="google-play-store-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="google-play-store"
                    src={require("../assets/google-play-store.png")}
                    alt="google play store icon"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-2">
          <div className="about-us-container">
            <div className="about-us-title">ABOUT US</div>
            <div className="about-us-text">
              NYT Cooking is a subscription service of The New York Times. It is
              a digital cookbook and cooking guide alike, available on all
              platforms, that helps home cooks of every level discover, save and
              organize the world’s best recipes, while also helping them become
              better, more competent cooks.{" "}
              <span className="subscribe-now-link">Subscribe now</span> for full
              access.
            </div>
          </div>
          <div className="other-links-container">
            <div className="col-1">
              <div className="learn-more">
                <div className="learn-more-title">LEARN MORE</div>
                <div className="learn-more-links">
                  <div className="link">Our Cooks</div>
                  <div className="link">See Our Features</div>
                  <div className="link">FAQ</div>
                  <div className="link">Tools for Saving</div>
                  <div className="link">NYTimes.com/food</div>
                </div>
              </div>
              <div className="shop">
                <div className="shop-title">SHOP</div>
                <div className="shop-links">
                  <div className="link">Gift Subscription</div>

                  <div className="link">Merchandise</div>
                </div>
              </div>
              <a href="mailto: cookingcare@nytimes.com" className="feedback">
                Send Us Feedback
              </a>
            </div>
            <div className="col-2">
              <div className="recipes">
                <div className="recipes-title">RECIPES</div>
                <div className="recipes-links">
                  <div className="link">What to Cook This Week</div>

                  <div className="link">Weeknight</div>

                  <div className="link">Pasta</div>

                  <div className="link">Dinner</div>

                  <div className="link">Healthy</div>

                  <div className="link">Vegetarian</div>

                  <div className="link">Vegan</div>

                  <div className="link">Dessert</div>

                  <div className="link">Thanksgiving</div>

                  <div className="link">Christmas</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
