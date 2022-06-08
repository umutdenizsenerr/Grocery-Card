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
  HeaderText,
  MiddleContainer,
} from "./Header.style";

const Header = () => {
  const location = useLocation();
  return (
    <HeaderContainer isBigger={true}>
      <div>
        <HeaderLinks>
          <li>
            <Link to="/">Home Page</Link>
            <link
              href="https://fonts.googleapis.com/css?family=Lobster"
              rel="stylesheet"
              type="text/css"
            />
          </li>
          <li>
            <nav>
              <Link to="/alcoholic">Alcoholic</Link>
            </nav>
          </li>
          <li>
            <nav>
              <Link to="/nonalcoholic">NonAlcoholic</Link>
            </nav>
          </li>
        </HeaderLinks>
      </div>
      {!(location.pathname === "/") ? (
        <MiddleContainer>
          <Provider store={store}>
            <SearchBar action="search_cocktail" />
          </Provider>
          <CartImageContainer>
            <Button iconName="cart" type="icon" />
          </CartImageContainer>
        </MiddleContainer>
      ) : null}

      <HeaderText>Cocktail Bar</HeaderText>
    </HeaderContainer>
  );
};

export default Header;
