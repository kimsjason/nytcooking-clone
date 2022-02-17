import styled from "styled-components";

const StyledFooter = styled.div`
  .footer {
    display: flex;
    flex-direction: column;
  }

  //   FOOTER 1 STYLES
  .footer-1 {
    display: flex;
    justify-content: center;
    gap: 200px;
    padding: 4rem 0;
    background: #e6e7e3;
  }

  .newsletter-container {
    flex: 0 0 500px;
    display: flex;
    flex-direction: column;
  }

  .newsletter-title {
    font-family: "Sorts Mill Goudy", Georgia;
    font-size: 3rem;
    color: #222222;
  }

  .newsletter-text {
    margin: 1rem 0;
    font-size: 1.5rem;
    color: #666666;
  }

  .sign-up-container {
    display: flex;
  }

  .email {
    width: 250px;
    height: 4rem;
    border: 1px solid rgb(222, 221, 213);
    padding: 1rem;
    margin-right: 1.5rem;
    font-size: 1.5rem;
    color: rgb(34, 34, 34);
  }

  .email:focus {
    outline-color: rgb(34, 34, 34);
    outline-width: 1px;
  }

  .sign-up-button {
    padding: 0 1.2rem;
    border: none;
    border-radius: 3px;
    background: #e33d26;
    color: white;
  }

  .sign-up-button:hover {
    background: #c83c26;
  }

  .social-media-container {
    flex: 0 0 300px;
    display: flex;
    flex-direction: column;
  }

  .social-media-title {
    margin-bottom: 1.2rem;
    font-weight: bold;
    font-size: 1.3rem;
  }

  .social-media-links {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.2rem;
  }

  .social-media-links > a > * {
    width: 4.4rem;
    height: 4.4rem;
    padding: 1rem;
    border-radius: 50%;
    color: #666666;
    background: #f8f8f7;
  }

  .social-media-links > a > *:hover {
    color: #222222;
  }

  .app-stores {
    display: flex;
    justify-content: space-between;
    gap: 25px;
  }

  .apple-app-store,
  .google-play-store {
    height: 40px;
  }

  // FOOTER 2 STYLES
  .footer-2 {
    display: flex;
    justify-content: center;
    gap: 80;
    background: black;
    color: white;
    padding: 3rem 0;
  }

  .about-us-title,
  .learn-more-title,
  .shop-title,
  .recipes-title {
    padding-bottom: 1.2rem;
    font-weight: bold;
    font-size: 1.3rem;
  }

  .about-us-container {
    flex: 0 0 600px;
    margin-right: 7rem;
  }

  .about-us-text {
    font-family: "Sorts Mill Goudy";
    font-size: 2rem;
  }

  .subscribe-now-link {
    color: #e33d26;
  }

  .subscribe-now-link:hover {
    text-decoration: underline;
  }

  .other-links-container {
    display: flex;
  }

  .other-links-container > * {
    width: 160px;
  }

  .col-1 {
    display: flex;
    flex-direction: column;
    gap: 25px;
  }

  .learn-more-links,
  .shop-links,
  .recipes-links {
    display: flex;
    flex-direction: column;
  }

  .col-1 a,
  .col-2 a {
    margin-bottom: 0.5rem;
    font-size: 1.3rem;
  }

  .col-1 a:hover,
  .col-2 a:hover {
    text-decoration: underline;
  }

  .feedback:before {
    content: "";
    position: absolute;
    width: 30px;
    margin-top: -1rem;
    border-top: 2px solid #999;
  }
`;

export { StyledFooter };
