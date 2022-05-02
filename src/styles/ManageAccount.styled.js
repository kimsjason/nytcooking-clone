import styled from "styled-components";

const StyledManageAccount = styled.div`
  .account {
    display: flex;
    justify-content: center;
    background: white;
  }

  .container {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 5rem;
    max-width: 600px;
    padding: 4.8rem 1.5rem;
  }

  .header {
    font-size: 1.6rem;
  }

  .greeting {
    font-size: 3.6rem;
    font-family: "Sorts Mill Goudy";
  }

  .profile,
  .subscriptions {
    padding-top: 1.5rem;
    border-top: 2px solid black;
    font-size: 2.2rem;
    font-weight: bold;
  }

  .profile > h2,
  .subscriptions h2 {
    display: block;
    padding-bottom: 3rem;
    font-size: 2.2rem;
  }

  .profile > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border-top: 1px solid #cccccc;
    padding: 1.5rem 0 2.4rem;
    font-size: 1.6rem;
  }

  .profile > * > * {
    font-weight: normal;
  }

  .nyt-cooking {
    border: 1px solid #cccccc;
    border-radius: 3px;
    padding: 2.4rem;
    font-family: "Sorts Mill Goudy";
    font-weight: bold;
  }

  .nyt-cooking .description {
    padding-top: 1rem;
    font-family: "Libre Franklin";
    font-weight: normal;
    font-size: 1.5rem;
    color: #666666;
  }
`;

export default StyledManageAccount;
