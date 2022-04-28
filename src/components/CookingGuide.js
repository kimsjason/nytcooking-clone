import { useEffect } from "react";
import { useParams } from "react-router-dom";
import StyledCookingGuide from "../styles/CookingGuide.styled";

const CookingGuide = ({
  user,
  loggedIn,
  cookingGuides,
  setCurrentPage,
  showLogInPopup,
  hideLogInPopup,
}) => {
  useEffect(() => {
    loggedIn ? hideLogInPopup() : showLogInPopup();
  });

  useEffect(() => {
    setCurrentPage("cooking-guide");
    window.scrollTo(0, 0);
  });

  const cookingGuideTitle = useParams().guide;
  const [cookingGuide] = cookingGuides.filter(
    (cookingGuide) => cookingGuide.title === cookingGuideTitle
  );

  return (
    <StyledCookingGuide>
      <div className="cooking-guide">
        <div className="image-container">
          <img src={require(`../assets/${cookingGuide.img}`)} alt="" />
          <div className="text">
            <div className="title">How to Cook {cookingGuide.title}</div>
            <div className="author">
              A GUIDE BY {cookingGuide.author.toUpperCase()}
            </div>
          </div>
        </div>
        <div className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div className="guide">
          <div className="intro">
            <div className="title">{cookingGuide.title}</div>
            <div className="subtext">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>
          <div className="method">
            <div className="title">Method</div>
            <div className="subtext">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>
          <div className="tips">
            <div className="title">Tips</div>
            <ul>
              <li className="tip">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </li>
              <li className="tip">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </li>
              <li className="tip">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </li>
              <li className="tip">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </StyledCookingGuide>
  );
};

export default CookingGuide;
