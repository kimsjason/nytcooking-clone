import styled from "styled-components";

const StyledCookingNote = styled.div`
  .cooking-note {
    display: flex;
    padding: 3rem 0 1.5rem 1.5rem;
    border-bottom: 1px solid #f4f4f4;
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
    font-size: 1.6rem;
  }

  .likes {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 0.7rem;
    font-size: 1.4rem;
    color: #767676;
  }
`;

export { StyledCookingNote };
