import styled from "styled-components";

const StyledGroceryList = styled.div`
  .overlay {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 100;
    background: rgba(0, 0, 0, 0.6);
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
    flex-direction: column;
    min-width: 320px;
    padding-top: 2rem;
    border-radius: 4px;
    background: #f2f3ef;
  }

  .header {
    display: flex;
    gap: 1rem;
    margin-left: 3.5rem;
    padding: 1.2rem 0 2.8rem;
    font-weight: bold;
    font-size: 1.2rem;
    color: #222222;
  }

  .divider {
    border: 0.5px solid #666666;
  }

  .recipe-count {
    font-weight: normal;
    color: #666666;
  }

  .grocery-list {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: scroll;
  }

  .caption {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 250px;
    margin: 100px 93px;
    text-align: center;
  }

  .grocery-list .title {
    font-size: 1.7rem;
    font-family: "Libre Franklin";
    color: #222222;
  }

  .text {
    font-size: 1.7rem;
    color: #666666;
  }

  .footer {
    display: flex;
    gap: 2rem;
    margin: 2rem;
  }

  .email {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 4rem;
    border: 1px solid #222222;
    border-radius: 3px;
    font-size: 1.4rem;
    cursor: pointer;
  }

  .email:hover {
    background: #222222;
    color: white;
  }

  .done {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 4rem;
    border-radius: 3px;
    background: #e33d26;
    font-size: 1.4rem;
    color: white;
    cursor: pointer;
  }

  .done:hover {
    background: #c83c26;
  }

  .hidden {
    display: none;
  }

  // grocery list item
  .recipe {
    align-self: stretch;
    display: flex;
    flex-direction: column;
  }

  .main {
    display: flex;
    gap: 2rem;
    align-items: center;
    position: relative;
    padding: 2.5rem 7.5rem;
  }

  .arrow-icon {
    position: absolute;
    left: 2.5rem;
    width: 3.5rem;
    height: auto;
    cursor: pointer;
    transition: all 0.3s;
  }

  .rotated {
    transform: rotate(90deg);
  }

  .title {
    flex: 1;
    display: flex;
    flex-direction: column;
    font-size: 1.7rem;
    font-family: "Libre Franklin";
    font-weight: bold;
  }

  .yield {
    font-size: 1.4rem;
    font-weight: normal;
    color: #666666;
  }

  .remove {
    margin-left: auto;
    font-size: 1.4rem;
    text-decoration: underline;
    cursor: pointer;
    color: #666666;
  }

  .remove:hover {
    color: #222222;
  }

  .ingredients {
    padding: 0 7.5rem;
    border-bottom: 1px solid #cccccc;
    font-size: 1.5rem;
    background: #fff;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s;
  }

  .ingredient {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.5rem;
    padding: 2.5rem 0;
  }

  .ingredients :not(:last-child) {
    border-bottom: 0.5px solid #ccc;
  }

  .remove-ingredient {
    color: #666666;
    cursor: pointer;
  }

  .hidden {
    display: auto;
  }

  .expanded {
    max-height: 5000px;
  }

  @media only screen and (min-width: 765px) {
    .content {
      width: 475px;
      height: 600px;
    }
  }

  @media only screen and (min-width: 1020px) {
    .content {
      width: 670px;
    }
  }
`;

export { StyledGroceryList };
