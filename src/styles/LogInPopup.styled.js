import styled from "styled-components";

const StyledLogInPopup = styled.div`
  z-index: 100;

  .overlay {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 100;
    transition: opacity 2s ease;
    animation: fadeIn 0.3s;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .content {
    display: flex;
    position: relative;
    height: 635px;
    background: white;
  }

  .close-icon {
    position: absolute;
    width: 2rem;
    height: auto;
    margin: 1.5rem;
    right: 0;
    color: #999999;
    cursor: pointer;
  }

  .image-container {
    display: flex;
    justify-content: center;
    position: relative;
    width: 550px;
    background: black;
    color: white;
  }
  .image {
    width: 100%;
    object-fit: cover;
  }

  .caption {
    position: absolute;
    padding: 3.5rem 4rem;
    text-align: center;
    font-size: 2.4rem;
    font-family: "Sorts Mill Goudy";
    background: linear-gradient(black, rgba(0, 0, 0, 0));
  }

  .log-in-info {
    display: flex;
    flex-direction: column;
    width: 350px;
    padding: 3.5rem;
    text-align: center;
  }

  .header {
    font-size: 2.2rem;
    font-family: "Sorts Mill Goudy";
    color: #222222;
  }

  .log-in-email {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 1.6rem;
  }

  .log-in-email label {
    font-size: 1.2rem;
    font-weight: bold;
  }

  .email-address {
    width: 100%;
    height: 4rem;
    margin-top: 4px;
    border: 1px solid rgba(204, 204, 204);
    border-radius: 3px;
    padding: 1rem;
    font-size: 1.6rem;
  }

  .email-address:focus {
    border: 1px solid #222222;
    outline: none;
  }

  .continue {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 4rem;
    margin: 1rem 0;
    border-radius: 3px;
    font-size: 1.6rem;
    font-weight: bold;
    color: white;
    background: #e33d26;
    cursor: pointer;
  }

  .continue:hover {
    background: #c83c26;
  }

  .divider-container {
    display: flex;
    justify-content: center;
    gap: 1rem;
    align-items: center;
    padding: 1rem 0;
    font-size: 1.2rem;
  }

  .divider {
    flex: 1;
    border-bottom: 1px solid rgb(204, 204, 204);
  }

  .terms-and-privacy {
    padding: 1rem 0;
    font-size: 1.2rem;
  }

  .log-in-social {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem 0;
  }

  .log-in-social > * {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 100%;
    height: 4rem;
    border: 1px solid #222222;
    border-radius: 3px;
    font-size: 1.6rem;
    font-weight: bold;
    cursor: pointer;
  }

  .log-in-social > *:hover {
    background: rgb(247, 247, 247);
  }

  .google-icon,
  .facebook-icon,
  .apple-icon {
    width: 2rem;
    height: auto;
  }
`;

export { StyledLogInPopup };
