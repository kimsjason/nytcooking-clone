import styled from "styled-components";

const StyledRecipeThumbnail = styled.div`
  .recipe-thumbnail {
    display: flex;
    flex-direction: column;
    width: 235px;
    height: 275px;
    border: 1px solid #cccccc;
    background: white;
    cursor: pointer;
  }

  .recipe-thumbnail:hover {
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
  }

  .recipe-image {
    object-fit: cover;
    height: 157px;
  }

  .thumbnail-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1.2rem;
  }

  .title {
    font-size: 1.7rem;
    font-weight: bold;
  }

  .author {
    font-size: 1.3rem;
  }

  .thumbnail-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .time {
    flex: 1;
    display: flex;
    font-size: 1.2rem;
    color: #999999;
  }

  .saved,
  .not-saved {
    display: flex;
    align-items: center;
  }

  .saved:active {
    transform: scale(1.1);
  }

  .bookmark-icon {
    width: 2.5rem;
    height: auto;
    color: #999999;
  }

  .save-recipe {
    position: relative;
  }

  .save-recipe:hover .description-box-container {
    display: flex;
  }

  .description-box-container {
    display: none;
    flex-direction: column;
    align-items: center;
    text-align: center;
    position: absolute;
    width: 165px;
    height: 7rem;
    padding: 1.5rem;
    right: -2rem;
    bottom: 3rem;
    border: 1px solid #ccc;
    color: #222222;
    background: white;
    box-shadow: 0 0 10px rgb(0 0 0 / 10%);
  }

  .description-box {
    margin-bottom: 1rem;
    padding: 1.5rem;
  }

  .log-in-sign-up {
    font-weight: bold;
    font-size: 1.4rem;
  }

  .log-in-sign-up span {
    color: #e33d26;
  }

  .log-in-sign-up span:hover {
    text-decoration: underline;
  }

  .arrow {
    position: absolute;
    bottom: -1rem;
    right: 2rem;
    width: 0;
    height: 0;
    border-left: 1rem solid transparent;
    border-right: 1rem solid transparent;
    border-top: 1rem solid #ccc;
  }

  .arrow:after {
    content: "";
    width: 0;
    height: 0;
    border-left: 0.9rem solid transparent;
    border-right: 0.9rem solid transparent;
    border-top: 0.9rem solid white;
    position: absolute;
    bottom: 2px;
    right: -9px;
  }
`;

export { StyledRecipeThumbnail };
