import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #333;
  padding-left: 5vh;
  padding-right: 10vh;
  margin-bottom: 2vh;
  position: fixed;
`;

const HeaderLinks = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;

  li {
    float: left;
  }

  li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }

  li a:hover:not(.active) {
    background-color: #111;
  }
  .active {
    background-color: #04aa6d;
  }
`;

const MiddleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const HeaderText = styled.div`
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  color: pink;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: x-large;
`;

const CartImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    height: 5vh;
  }
`;

export {
  CartImageContainer,
  HeaderContainer,
  HeaderLinks,
  HeaderText,
  MiddleContainer,
};
