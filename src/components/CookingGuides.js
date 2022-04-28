import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StyledCookingGuides from "../styles/CookingGuides.styled";
import { CookingGuideThumbnail } from "./CookingGuideThumbnail";

const CookingGuides = ({
  user,
  loggedIn,
  cookingGuides,
  setCurrentPage,
  showLogInPopup,
  hideLogInPopup,
}) => {
  const [carouselSelection, setCarouselSelection] = useState(cookingGuides[0]);

  useEffect(() => {
    setCurrentPage("cooking-guides");
    window.scrollTo(0, 0);
  }, []);

  const selectCarousel = (cookingGuide) => {
    const cookingGuides = document.querySelectorAll(".cooking-guide");
    cookingGuides.forEach((cookingGuide) =>
      cookingGuide.classList.remove("selected")
    );
    cookingGuide.classList.add("selected");
  };

  return (
    <StyledCookingGuides>
      <div className="cooking-guides-carousel">
        <Link to={`/cooking-guide/${carouselSelection.title}`}>
          <div className="image-container">
            <img
              src={require(`../assets/${carouselSelection.img}`)}
              alt=""
              className="recipe-image"
            />
            <div className="text">
              Learn to Cook {carouselSelection.title}
              <div className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                nisi tempora iure reiciendis deserunt minima eius qui aperiam
                sequi rerum, voluptates, commodi blanditiis eveniet quis!{" "}
                <Link to={`/cooking-guide/${carouselSelection.title}`}>
                  Get Started
                </Link>
              </div>
            </div>

            <div
              className="carousel-buttons"
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
              }}
            >
              <div
                className="cooking-guide selected"
                onClick={(e) => {
                  setCarouselSelection(cookingGuides[0]);
                  selectCarousel(e.target);
                }}
              ></div>
              <div
                className="cooking-guide"
                onClick={(e) => {
                  setCarouselSelection(cookingGuides[1]);
                  selectCarousel(e.target);
                }}
              ></div>
              <div
                className="cooking-guide"
                onClick={(e) => {
                  setCarouselSelection(cookingGuides[2]);
                  selectCarousel(e.target);
                }}
              ></div>
              <div
                className="cooking-guide"
                onClick={(e) => {
                  setCarouselSelection(cookingGuides[3]);
                  selectCarousel(e.target);
                }}
              ></div>
            </div>
          </div>
        </Link>
      </div>
      <div className="cooking-guides-container">
        <div className="cooking-guides-header">
          <div className="title">Master the Anime Basics</div>
          <div className="subtitle">
            Our guides offer recipes, videos, techniques and tips for novices
            and advanced cooks.
          </div>
        </div>
        <div className="cooking-guides">
          {cookingGuides.map((cookingGuide) => {
            return (
              <Link
                to={`/cooking-guide/${cookingGuide.title}`}
                key={cookingGuide.title}
              >
                <CookingGuideThumbnail
                  user={user}
                  loggedIn={loggedIn}
                  cookingGuide={cookingGuide}
                  showLogInPopup={showLogInPopup}
                  hideLogInPopup={hideLogInPopup}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </StyledCookingGuides>
  );
};

export default CookingGuides;
