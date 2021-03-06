import styled from "styled-components";

const StyledCookingGuideThumbnail = styled.div`
  .cooking-guide-thumbnail {
    display: flex;
    flex-direction: column;
    width: 145px;
    height: 212px;
    background: #1b1b1b;
    font-size: 1.2rem;
    color: white;
    cursor: pointer;
  }

  .cooking-guide-image {
    object-fit: cover;
    width: 144px;
    height: 96px;
  }

  .cooking-guide-thumbnail:hover {
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
  }

  .thumbnail-content {
    padding: 1.2rem;
  }

  .title {
    margin-top: 3px;
    font-size: 1.7rem;
    font-weight: bold;
  }

  .author {
    padding-top: 3px;
    font-size: 1.3rem;
  }

  @media only screen and (min-width: 510px) {
    .cooking-guide-thumbnail {
      width: 235px;
      height: 275px;
    }

    .cooking-guide-image {
      width: 235px;
      height: 145px;
    }
  }
`;

export { StyledCookingGuideThumbnail };
