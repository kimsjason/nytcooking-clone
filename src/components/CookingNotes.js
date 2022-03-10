import { useState } from "react";
import { CookingNote } from "./CookingNote";
import uniqid from "uniqid";
import { StyledCookingNotes } from "../styles/CookingNotes.styled";

const CookingNotes = ({
  user,
  recipe,
  addPrivateNote,
  addPublicNote,
  likeNote,
}) => {
  const [tab, setTab] = useState("Most Helpful");
  const [nameCharCount, setNameCharCount] = useState(0);
  const [noteCharCount, setNoteCharCount] = useState(0);
  const [showMore, setShowMore] = useState({
    all: 0,
    mostHelpful: 0,
    private: 0,
  });

  const didPrivateNote = user.commentedRecipes.some(
    (commentedRecipe) => commentedRecipe.title === recipe.title
  );
  const [userRecipeNotes] = didPrivateNote
    ? user.commentedRecipes.filter(
        (commentedRecipe) => commentedRecipe.title === recipe.title
      )
    : [{ notes: [] }];

  const handleAddNote = () => {
    const newNoteEntry = document.querySelector(".new-note-entry");
    const userName = newNoteEntry.querySelector(".user-name");
    const userComment = newNoteEntry.querySelector(".user-comment");
    const noteVisibility = document.querySelector(
      'input[name="note-visibility"]:checked'
    ).value;

    const note = {
      id: uniqid(),
      uid: user.uid,
      user: userName.value,
      text: userComment.value,
      noteVisibility: noteVisibility,
      date: new Date().toString(),
      likes: [],
      profileIcon: user.profileIcon,
    };

    noteVisibility === "everyone"
      ? addPublicNote(recipe.title, note)
      : addPrivateNote(recipe.title, note);

    // Reset note inputs
    userName.value = "";
    userComment.value = "";
    setNoteCharCount(0);
    setNameCharCount(0);
  };

  const expandNewNoteEntry = () => {
    const newNoteEntry = document.querySelector(".new-note-entry");
    const userName = newNoteEntry.querySelector(".user-name");
    const userComment = newNoteEntry.querySelector(".user-comment");
    const charCount = newNoteEntry.querySelector(".character-count");
    const submit = newNoteEntry.querySelector(".options-submit");

    newNoteEntry.classList.remove("collapsed");
    userName.classList.remove("hidden");
    userComment.classList.add("expanded");
    charCount.classList.remove("hidden");
    submit.classList.remove("hidden");
  };

  const collapseNewNoteEntry = () => {
    const newNoteEntry = document.querySelector(".new-note-entry");
    const userName = newNoteEntry.querySelector(".user-name");
    const userComment = newNoteEntry.querySelector(".user-comment");
    const charCount = newNoteEntry.querySelector(".character-count");
    const submit = newNoteEntry.querySelector(".options-submit");

    newNoteEntry.classList.add("collapsed");
    userName.classList.add("hidden");
    userComment.classList.remove("expanded");
    charCount.classList.add("hidden");
    submit.classList.add("hidden");
  };

  const showMoreNotes = () => {
    if (tab === "All") {
      setShowMore((showMore) => ({
        ...showMore,
        all: showMore.all + 1,
      }));
    } else if (tab === "Most Helpful") {
      setShowMore((showMore) => ({
        ...showMore,
        mostHelpful: showMore.mostHelpful + 1,
      }));
    } else if (tab === "Private") {
      setShowMore((showMore) => ({
        ...showMore,
        private: showMore.private + 1,
      }));
    }
  };

  return (
    <StyledCookingNotes>
      <div className="cooking-notes">
        <div className="cooking-notes-title">COOKING NOTES</div>
        <div className="new-note-entry collapsed">
          <input
            type="text"
            className="user-name hidden"
            placeholder="Your name (required)"
            onChange={(e) => {
              setNameCharCount(e.target.value.length);
            }}
          />
          <div className="comment-container">
            <textarea
              className="user-comment"
              placeholder="Share your notes with other cooks or leave a private note."
              onClick={expandNewNoteEntry}
              maxLength="500"
              onChange={(e) => {
                setNoteCharCount(e.target.value.length);
              }}
            />
            <span className="character-count hidden">
              {500 - noteCharCount}
            </span>
          </div>
          <div className="options-submit hidden">
            <div className="note-visibility">
              Who can see this note?
              <div className="options">
                <label htmlFor="everyone">
                  <input
                    type="radio"
                    id="everyone"
                    value="everyone"
                    name="note-visibility"
                    defaultChecked="true"
                  />{" "}
                  Everyone
                </label>

                <label htmlFor="only-you">
                  <input
                    type="radio"
                    id="only-you"
                    value="only you"
                    name="note-visibility"
                  />{" "}
                  Only You
                </label>
              </div>
            </div>
            <div className="submit">
              <div className="cancel" onClick={collapseNewNoteEntry}>
                Cancel
              </div>
              <div className="divider"></div>
              <div
                className={`add-note ${
                  nameCharCount < 1 || noteCharCount < 5 ? "blocked" : ""
                }`}
                onClick={() => {
                  handleAddNote();
                  collapseNewNoteEntry();
                }}
              >
                Add Note
              </div>
            </div>
          </div>
        </div>
        <div className="notes-container">
          <div className="notes-header">
            <div
              className={`all ${tab === "All" ? "selected-header" : ""}`}
              onClick={() => setTab("All")}
            >
              All
            </div>
            <div
              className={`most-helpful ${
                tab === "Most Helpful" ? "selected-header" : ""
              }`}
              onClick={() => setTab("Most Helpful")}
            >
              Most Helpful
            </div>
            <div
              className={`private ${
                tab === "Private" ? "selected-header" : ""
              }`}
              onClick={() => setTab("Private")}
            >
              Private
            </div>
          </div>
          {recipe.notes.length > 0 ? (
            <div className="notes">
              {tab === "All" ? (
                <div className="all-notes">
                  {recipe.notes
                    .slice(0, 4 + 10 * showMore.all)
                    .sort((a, b) => {
                      if (a.date < b.date) return -1;
                      if (a.date > b.date) return 1;
                      return 0;
                    })
                    .map((note) => {
                      return (
                        <CookingNote
                          key={note.id}
                          note={note}
                          likeNote={likeNote}
                          recipe={recipe}
                        />
                      );
                    })}
                </div>
              ) : (
                ""
              )}
              {tab === "Most Helpful" ? (
                <div className="most-helpful-notes">
                  {recipe.notes
                    .slice(0, 4 + 10 * showMore.mostHelpful)
                    .sort((a, b) => {
                      if (a.likes.length < b.likes.length) return 1;
                      if (a.likes.length > b.likes.length) return -1;
                      return 0;
                    })
                    .map((note) => {
                      return (
                        <CookingNote
                          key={note.id}
                          note={note}
                          likeNote={likeNote}
                          recipe={recipe}
                        />
                      );
                    })}
                </div>
              ) : (
                ""
              )}
              {tab === "Private" ? (
                <div className="private-notes">
                  {userRecipeNotes
                    ? userRecipeNotes.notes
                        .slice(0, 4 + 10 * showMore.private)
                        .sort((a, b) => {
                          if (a.date < b.date) return -1;
                          if (a.date > b.date) return 1;
                          return 0;
                        })
                        .map((note) => {
                          return (
                            <CookingNote
                              key={note.id}
                              note={note}
                              likeNote={likeNote}
                              recipe={recipe}
                            />
                          );
                        })
                    : ""}
                </div>
              ) : (
                ""
              )}
            </div>
          ) : (
            ""
          )}

          <div
            className={`show-more ${
              tab === "Private" &&
              userRecipeNotes.notes.length <= showMore.private * 10 + 4
                ? "hidden"
                : ""
            }
                ${
                  recipe.notes.length <=
                  (tab === "All"
                    ? showMore.all
                    : tab === "Most Helpful"
                    ? showMore.mostHelpful
                    : "") *
                    10 +
                    4
                    ? "hidden"
                    : ""
                }`}
            onClick={showMoreNotes}
          >
            Show More Notes
          </div>
        </div>
      </div>
    </StyledCookingNotes>
  );
};

export default CookingNotes;
