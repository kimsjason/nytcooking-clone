import styled from "styled-components";

const styledCookingGuide = styled.div`
  .cooking-guide {
    background: white;
    padding-bottom: 5rem;
  }

  .image-container {
    position: relative;
  }

  .image-container img {
    width: 100%;
    min-height: 100vw;
    // max-height: 100vw;
    object-fit: cover;
  }

  .image-container::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100vw;
    max-height: 100vw;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.35);
  }

  .image-container .text {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 300px;
    padding: 1.2rem;
    transform: translateX(-50%) translateY(-50%);
    color: white;
  }

  .image-container .title {
    font-family: "Arvo";
    font-size: 2.7rem;
  }

  .image-container .author {
    font-family: "Libre Franklin";
    font-size: 1.4rem;
  }

  .description {
    max-width: 1000px;
    margin: 0 auto;
    padding: 5rem 2rem;
    font-family: "Sorts Mill Goudy";
    font-size: 2.4rem;
    color: #8d8d8d;
  }

  .guide {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 1.2rem;
  }

  .guide .title {
    border-top: 5px double #d3d3d3;
    padding-top: 2rem;
    font-family: "Arvo";
    font-size: 2.4rem;
  }

  .guide .subtext,
  .guide .tip {
    padding: 2rem 0;
    font-family: "Libre Franklin";
    font-size: 1.6rem;
    color: #4d4d4d;
  }

  .tips ul {
    display: flex;
    flex-direction: column;
    list-style: solid circle;
    padding: 0 2rem;
  }

  @media only screen and (min-width: 510px) {
    .image-container .text {
      width: 450px;
    }

    .image-container .title {
      font-size: 4.5rem;
    }
  }

  @media only screen and (min-width: 765px) {
    .guide .subtext,
    .guide .tip {
      width: 550px;
      margin: 0 auto;
    }
  }

  @media only screen and (min-width: 1000px) {
    .image-container .text {
      width: 600px;
    }

    .image-container .title {
      font-size: 6rem;
    }
  }
`;

export default styledCookingGuide;
