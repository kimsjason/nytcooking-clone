import { StyledFooter } from "../styles/Footer.styled";
import {
  Instagram,
  Facebook,
  YouTube,
  Twitter,
  Pinterest,
} from "@mui/icons-material";

const Footer = (props) => {
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
            <div className="app-store-download">
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
              <a
                href="#"
                className="subscribe-now-link"
                target="_blank"
                rel="noreferrer"
              >
                Subscribe now
              </a>{" "}
              for full access.
            </div>
          </div>
          <div className="other-links-container">
            <div className="col-1">
              <div className="learn-more">
                <div className="learn-more-title">LEARN MORE</div>
                <div className="learn-more-links">
                  <a
                    href="https://cooking.nytimes.com/ourcooks"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Our Cooks
                  </a>
                  <a
                    href="https://cooking.nytimes.com/see-our-features"
                    target="_blank"
                    rel="noreferrer"
                  >
                    See Our Features
                  </a>
                  <a
                    href="https://cooking.nytimes.com/frequently-asked-questions"
                    target="_blank"
                    rel="noreferrer"
                  >
                    FAQ{" "}
                  </a>
                  <a
                    href="https://cooking.nytimes.com/tools"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Tools for Saving{" "}
                  </a>
                  <a
                    href="https://www.nytimes.com/section/food"
                    target="_blank"
                    rel="noreferrer"
                  >
                    NYTimes.com/food
                  </a>
                </div>
              </div>
              <div className="shop">
                <div className="shop-title">SHOP</div>
                <div className="shop-links">
                  <a
                    href="https://www.nytimes.com/subscriptions/Multiproduct/cooking_gift.html?campaignId=7HYRF"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Gift Subscription
                  </a>
                  <a
                    href="https://store.nytimes.com/collections/cooking-collection?utm_source=nyt_cooking&utm_medium=referral&utm_campaign=cooking_collection&utm_content=footer"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Merchandise
                  </a>
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
                  <a
                    href="https://cooking.nytimes.com/topics/what-to-cook-this-week"
                    target="_blank"
                    rel="noreferrer"
                  >
                    What to Cook This Week
                  </a>
                  <a
                    href="https://cooking.nytimes.com/topics/easy-weeknight"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Weeknight
                  </a>
                  <a
                    href="https://cooking.nytimes.com/topics/our-best-pasta-recipes"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Pasta
                  </a>
                  <a
                    href="https://cooking.nytimes.com/topics/dinner-recipes"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Dinner
                  </a>
                  <a
                    href="https://cooking.nytimes.com/topics/healthy-recipes"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Healthy
                  </a>
                  <a
                    href="https://cooking.nytimes.com/topics/vegetarian"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Vegetarian
                  </a>
                  <a
                    href="https://cooking.nytimes.com/topics/vegan-recipes"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Vegan
                  </a>
                  <a
                    href="https://cooking.nytimes.com/topics/desserts"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Dessert
                  </a>
                  <a
                    href="https://cooking.nytimes.com/thanksgiving"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Thanksgiving
                  </a>
                  <a
                    href="https://cooking.nytimes.com/christmas"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Christmas
                  </a>
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
