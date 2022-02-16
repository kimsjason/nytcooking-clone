import { Link } from "react-router-dom";
import { StyledHeader } from "../styles/Header.styled";
import Settings from "@mui/icons-material/Settings";
import { ReactComponent as Logo } from "../assets/nyt-cooking-logo.svg";
import { Search } from "@mui/icons-material";

const Header = (props) => {
  return (
    <StyledHeader>
      <div className="header">
        <Link to="/" className="nyt-cooking-logo">
          <Logo />
        </Link>
        <div className="search">
          <Search className="search-icon" />
          <input
            type="text"
            className="search-bar"
            placeholder="What would you like to cook?"
          />
        </div>
        <Link to="/weeknight" className="weeknight">
          WEEKNIGHT
        </Link>
        <Link to="/grocery-list" className="grocery-list">
          YOUR GROCERY LIST
        </Link>
        <div className="recipe-box-container">
          <Link to="/recipe-box" className="recipe-box">
            YOUR RECIPE BOX
          </Link>
        </div>
        <Link to="/settings" className="settings">
          <Settings className="settings-icon" />
        </Link>
      </div>
    </StyledHeader>
  );
};

export default Header;
