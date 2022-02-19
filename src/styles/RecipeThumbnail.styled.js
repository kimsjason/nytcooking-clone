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

  .time {
    font-size: 1.2rem;
    color: #999999;
  }

  .thumbnail-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .bookmark-icon {
    width: 2.5rem;
    height: auto;
    color: #999999;
  }
`;

export { StyledRecipeThumbnail };
