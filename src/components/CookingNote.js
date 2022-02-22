import { ThumbUp } from "@mui/icons-material";
import { StyledCookingNote } from "../styles/CookingNote.styled";

const CookingNote = (props) => {
  return (
    <StyledCookingNote>
      <div className="cooking-note">
        <img src="" alt="profile icon" className="profile-icon" />
        <div className="content">
          <div className="name-and-date">
            <div className="name">{props.note.user}</div>
            <span className="divider"></span>
            <div className="date-posted">{props.note.date}</div>
          </div>
          <div className="text">{props.note.text}</div>
          <div className="likes">
            <ThumbUp className="thumbup-icon" />
            {props.note.likes} This is helpful
          </div>
        </div>
      </div>
      ;
    </StyledCookingNote>
  );
};

export { CookingNote };
