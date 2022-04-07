import { ThumbUp } from "@mui/icons-material";
import { formatDuration, intervalToDuration } from "date-fns";
import { StyledCookingNote } from "../styles/CookingNote.styled";

const CookingNote = ({ note, likeNote, recipe }) => {
  const duration = intervalToDuration({
    start: new Date(note.date),
    end: new Date(),
  });
  const timeElapsed = formatDuration(duration, { delimiter: ", " }).split(
    ","
  )[0];

  return (
    <StyledCookingNote>
      <div className="cooking-note">
        <img
          src={require(`../assets/${note.profileIcon}`)}
          alt="profile icon"
          className="profile-icon"
        />
        <div className="content">
          <div className="name-and-date">
            <div className="name">{note.user}</div>
            <span className="divider"></span>
            <div className="date-posted">
              {timeElapsed ? timeElapsed + " ago" : "just now"}
            </div>
          </div>
          <div className="text">{note.text}</div>
          {note.noteVisibility === "everyone" ? (
            <div className="likes" onClick={() => likeNote(recipe, note)}>
              <ThumbUp className="thumbup-icon" />
              {note.likes.length > 0 ? note.likes.length : ""} This is helpful
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </StyledCookingNote>
  );
};

export { CookingNote };
