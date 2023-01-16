import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import Button from "../Button/Button";
import store from "../../redux/store";
import { Provider } from "react-redux";
import {
  CartImageContainer,
  HeaderContainer,
  HeaderLinks,
  Logo,
  LogoContainer,
  MiddleContainer,
} from "./Header.style";

const Header = () => {
  const location = useLocation();
  return (
    <HeaderContainer isBigger={true}>
      <LogoContainer>
        <Logo>Cocktail Bar</Logo>
        <HeaderLinks>
          <li>
            <Link to="/">Home Page</Link>
          </li>
          <li>
            <Link to="/alcoholic">Alcoholic</Link>
          </li>
          <li>
            <Link to="/nonalcoholic">Non-alcoholic</Link>
          </li>
        </HeaderLinks>
      </LogoContainer>

      {!(location.pathname === "/") ? (
        <MiddleContainer>
          <Provider store={store}>
            <SearchBar action="search_cocktail" />
          </Provider>
          <CartImageContainer>
            <Button iconName="cart" type="icon" />
          </CartImageContainer>
        </MiddleContainer>
      ) : (
        <div />
      )}
    </HeaderContainer>
  );
};

export default Header;
