import React, { FunctionComponent } from "react";
import SearchBar from "../SearchBar/SearchBar";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import Button from "../Button/Button";
import store from "../../redux/store";
import { Provider } from "react-redux";

interface IHeaderProps {}
const Header: FunctionComponent<IHeaderProps> = () => {
  const location = useLocation();
  return (
    <div className="app-header">
      <div>
        <ul className="header-links">
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
        </ul>
      </div>
      {!(location.pathname === "/") ? (
        <div className="middle-container">
          <Provider store={store}>
            <SearchBar action="search_cocktail" />
          </Provider>
          <div className="cart-image-container">
            <Button
              iconName="image"
              content={
                <nav>
                  <Link to="/grocerycart">
                    {
                      <img
                        className="cart-image"
                        src="https://cdn.pixabay.com/photo/2013/07/12/14/53/cart-148964_960_720.png"
                        alt=""
                      />
                    }
                  </Link>
                </nav>
              }
            />
          </div>
        </div>
      ) : null}

      <div className="text-class">Cocktail Bar</div>
    </div>
  );
};

export default Header;

//react routerdan path name alıp headerı ona göre ayarla
//app.js router olayını ayarla
