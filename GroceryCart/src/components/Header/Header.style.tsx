import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  background-color: #000000;
  width: 100%;
  //position: fixed;
  align-items: center;
  align-content: space-between;
  justify-content: space-between;
`;

const HeaderLinks = styled.ul`
  list-style-type: none;
  flex: 1;
  padding-left: 0;
  margin-left: 6em;

  height: 0%;
  & > li {
    & > a {
      text-decoration: none;
      &:hover,
      &:focus {
        background-color: #000000;
        border-bottom: 1px solid #ffffff;
      }
    }
  }
`;

const MiddleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin-right: 1em;
  flex: 1;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 4em;
  flex: 1;
`;

const Logo = styled.div`
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  color: pink;
  font-size: x-large;
`;

const CartImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;

export {
  CartImageContainer,
  HeaderContainer,
  HeaderLinks,
  Logo,
  LogoContainer,
  MiddleContainer,
};
