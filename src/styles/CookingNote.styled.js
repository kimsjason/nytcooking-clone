import styled from "styled-components";

const StyledCookingNote = styled.div`
  .cooking-note {
    display: flex;
    gap: 1rem;
    padding: 3rem 0 1.5rem 1.5rem;
    border-bottom: 1px solid #f4f4f4;
  }

  .profile-icon {
    flex-shrink: 0;
    width: 4rem;
    height: 4rem;
  }

  .name-and-date {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .name {
    font-size: 1.4rem;
    font-weight: bold;
  }

  .divider {
    height: 1rem;
  }

  .date-posted {
    font-size: 1.3rem;
    color: #767676;
  }

  .text {
    margin: 1rem 0;
    font-size: 1.5em;
    line-height: 2rem;
  }

  .likes {
    display: flex;
    align-items: center;
    gap: 1rem;
    max-width: 150px;
    margin-top: 0.7rem;
    font-size: 1.4rem;
    color: #767676;
    cursor: pointer;
  }

  .likes:hover {
    color: #e33d26;
  }
`;

export { StyledCookingNote };
