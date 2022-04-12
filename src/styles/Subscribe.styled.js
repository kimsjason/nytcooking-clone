import styled from "styled-components";

const StyledSubscribe = styled.div`
  .subscribe {
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }

  .subscribe-hero {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }

  .main-image {
    position: relative;
    width: 100%;
    transform: scale(3.25);
    transform-origin: 65% 50%;
    height: 450px;
    object-fit: cover;
  }

  .text {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    position: absolute;
    max-width: 400px;
    padding: 2rem;
    text-align: center;
  }

  .ny-times {
    height: 1.2rem;
  }

  .cooking {
    height: 3.1rem;
  }

  .hero-title {
    font-size: 3rem;
    font-family: "Sorts Mill Goudy";
  }

  .hero-subtitle {
    font-size: 1.6rem;
  }

  .subscribe-now {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 165px;
    height: 4rem;
    border-radius: 3px;
    background: #e33d26;
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
    cursor: pointer;
  }

  .scroll-down {
    transform: rotate(90deg);
    width: 6rem;
    height: 6rem;
    color: white;
    cursor: pointer;
    animation: bounce 2s infinite;
  }

  @keyframes bounce {
    0% {
      transform: rotate(90deg) translateX(0);
    }
    50% {
      transform: rotate(90deg) translateX(10px);
    }
  }

  .container {
    align-self: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding: 2rem;
    max-width: 425px;
  }

  .box {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .box img {
    width: 100%;
  }

  .box .main-text {
    margin: 2rem 0;
    font-size: 2rem;
    font-family: "Sorts Mill Goudy";
  }

  .box .sub-text {
    font-size: 1.6rem;
    font-family: "Libre Franklin";
    color: #666666;
    line-height: 2.25rem;
  }

  .subscription-plans {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    text-align: center;
  }

  .subscription-plans .header {
    margin: 4rem 5rem;
    font-size: 2rem;
    font-family: "Sorts Mill Goudy";
  }

  .plans {
    display: flex;
    flex-direction: column;
  }

  .monthly,
  .yearly {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 295px;
    padding: 2rem 0;
  }

  .rate {
    padding: 1rem 0;
    font-size: 2.5rem;
    font-weight: bold;
  }

  .subscribe-monthly,
  .subscribe-yearly {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 4rem;
    border-radius: 3px;
    margin: 1rem 0;
    background: #e33d26;
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
    cursor: pointer;
  }

  .bill-frequency {
    padding: 1rem;
    font-size: 1.3rem;
    color: #717171;
  }

  .terms {
    padding: 2rem;
    font-size: 1.1rem;
    color: #4a4a4a;
  }

  @media only screen and (min-width: 415px) {
    .box .main-text {
      font-size: 2.9rem;
    }

    .box .sub-text {
      font-size: 1.6rem;
    }

    .subscription-plans .header {
      font-size: 2.9rem;
    }
  }

  @media only screen and (min-width: 765px) {
    .main-image {
      transform: scale(2.25);
    }

    .text {
      max-width: 475px;
    }

    .hero-title {
      font-size: 4.1rem;
    }

    .hero-subtitle {
      font-size: 2.3rem;
    }

    .container {
      flex-direction: row;
      align-items: flex-start;
      gap: 4rem;
      padding-top: 6rem;
      max-width: none;
    }

    .box {
      flex: 1;
      max-width: 300px;
    }

    .plans {
      flex-direction: row;
      gap: 2rem;
    }

    .subscribe-monthly,
    .subscribe-yearly {
      width: 260px;
    }

    .terms {
      max-width: 925px;
    }
  }

  @media only screen and (min-width: 1020px) {
    .main-image {
      transform: scale(2);
    }
  }
`;

export default StyledSubscribe;
