import styled from "styled-components";

const StyledFooter = styled.div`
  .footer {
    display: flex;
    flex-direction: column;
  }

  //   FOOTER 1 STYLES
  .footer-1 {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 3rem 2rem;
    background: #e6e7e3;
  }

  .newsletter-container {
    display: flex;
    flex-direction: column;
  }

  .newsletter-title {
    font-family: "Sorts Mill Goudy", Georgia;
    font-size: 2.6rem;
    color: #222222;
  }

  .newsletter-text {
    max-width: 500px;
    margin: 1rem 0;
    font-size: 1.3rem;
    color: #666666;
  }

  .sign-up-container {
    display: flex;
  }

  .email {
    flex: 1;
    max-width: 250px;
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
    flex: 0 0 80px;
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
    display: flex;
    flex-direction: column;
  }

  .social-media-title,
  div.text {
    margin-bottom: 1.2rem;
    font-weight: bold;
    font-size: 1.3rem;
  }

  .social-media-links {
    display: flex;
    gap: 1.5rem;
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
    gap: 1.5rem;
  }

  .apple-app-store,
  .google-play-store {
    height: 40px;
  }

  // FOOTER 2 STYLES
  .footer-2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: black;
    color: white;
    padding: 3rem 2rem;
  }

  .about-us-title,
  .learn-more-title,
  .shop-title,
  .recipes-title {
    padding-bottom: 1.2rem;
    font-weight: bold;
    font-size: 1.2rem;
  }

  .about-us-container {
    padding-bottom: 3rem;
  }

  .about-us-text {
    font-family: "Sorts Mill Goudy";
    font-size: 1.8rem;
  }

  .subscribe-now-link {
    color: #e33d26;
    cursor: pointer;
  }

  .subscribe-now-link:hover {
    text-decoration: underline;
  }

  .other-links-container {
    display: flex;
    flex-direction: column;
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

  .col-1 .link,
  .col-2 .link,
  .col-1 a,
  .col-2 a {
    margin-bottom: 0.5rem;
    font-size: 1.3rem;
    cursor: pointer;
  }

  .col-1 .link:hover,
  .col-2 .link:hover,
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

  @media only screen and (min-width: 640px) {
    .social-media-app-stores {
      display: flex;
      flex-direction: row;
      gap: 5rem;
    }

    .footer-2 {
      justify-content: center;
      background: black;
    }

    .other-links-container {
      flex-direction: row;
    }
  }

  @media only screen and (min-width: 765px) {
    .footer-2 {
      flex-direction: row;
      gap: 80px;
    }

    .social-media-app-stores {
      justify-content: space-between;
    }
  }

  @media only screen and (min-width: 1024px) {
    .footer-1 {
      flex-direction: row;
      justify-content: center;
      gap: 200px;
    }

    .social-media-app-stores {
      flex-direction: column;
      gap: 0;
    }

    .app-store-download .text {
      display: none;
    }

    .footer-2 {
      gap: 50px;
    }

    .about-us-container {
      width: 600px;
    }
  }
`;

export { StyledFooter };
