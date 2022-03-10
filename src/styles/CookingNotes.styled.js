import styled from "styled-components";

const StyledCookingNotes = styled.div`
  .cooking-notes {
    display: flex;
    flex-direction: column;
  }

  .cooking-notes-title {
    padding-bottom: 1rem;
    font-size: 1.3rem;
    font-family: Arvo;
  }

  .new-note-entry {
    display: flex;
    flex-direction: column;
    border: 1px solid #ddd;
    padding: 1.4rem;
    font-size: 1.5rem;
    background: #f7f7f5;
    transition: 0.5s all;
  }

  .collapsed {
    padding: 0;
    border: none;
  }

  .user-name {
    display: flex;
    height: 4.5rem;
    margin-bottom: 0.5rem;
    padding: 1.5rem;
    border: 1px solid #dddddd;
    box-shadow: inset 0 1px 6px #f2f3ef;
    font-family: "Libre Franklin";
    font-size: 1.5rem;
    outline: none;
  }

  .comment-container {
    display: flex;
    position: relative;
  }

  .user-comment {
    flex: 1;
    display: flex;
    height: 4.5rem;
    padding: 1.5rem;
    padding-right: 5rem;
    border: 1px solid #dddddd;
    box-shadow: inset 0 1px 6px #f2f3ef;
    font-family: "Libre Franklin";
    font-size: 1.5rem;
    resize: none;
    outline: none;
    transition: 0.5s height;
    overflow: hidden;
  }

  .character-count {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    color: #767676;
    font-size: 1.4rem;
  }

  .user-comment.expanded {
    height: 20rem;
  }

  .note-visibility {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 2rem 1rem 1rem;
  }

  input[type="radio"]:before {
    content: "";
    display: block;
    width: 60%;
    height: 60%;
    margin: 20% auto;
    border-radius: 50%;
  }

  input[type="radio"]:checked:before {
    background: #e33d26;
  }

  .options-submit {
    display: flex;
    flex-direction: column;
  }

  .options {
    display: flex;
    gap: 1.5rem;
  }

  .submit {
    align-self: flex-end;
    display: flex;
    gap: 1rem;
    margin: 1.5rem 1rem;
  }

  .cancel {
    color: #767676;
    cursor: pointer;
  }

  .cancel:hover {
    text-decoration: underline;
  }

  .add-note {
    color: #e33d26;
    cursor: pointer;
  }

  .add-note:hover {
    text-decoration: underline;
  }

  .blocked {
    color: #cccccc;
    cursor: not-allowed;
    pointer-events: none;
  }

  .blocked:hover {
    text-decoration: none;
  }

  .divider {
    border-right: 1px solid #666666;
  }

  .notes-header {
    display: flex;
    font-size: 1.6rem;
    margin-top: 2rem;
    border-bottom: 1px solid #cccccc;
    color: #222222;
  }

  .notes-header > * {
    cursor: pointer;
    padding: 1.6rem;
  }

  .selected-header {
    border-bottom: 4px solid #222222;
    font-weight: bold;
  }

  .show-more {
    justify-self: center;
    width: 175px;
    height: 4rem;
    margin: 1.5rem auto;
    padding: 1rem 3rem;
    border: 1px solid #222222;
    border-radius: 3px;
    font-size: 1.3rem;
    color: #222222;
    cursor: pointer;
  }

  .show-more:hover {
    color: white;
    background: #222222;
  }
  .hidden {
    display: none;
  }
`;

export { StyledCookingNotes };
