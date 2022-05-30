import React, { Dispatch, FunctionComponent, SetStateAction } from "react";
import SearchBar from "../SearchBar/SearchBar";
import "./Header.css";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import store from "../../redux/store";
import { Provider } from "react-redux";
import SearchBarPage from "../../pages/SearchBarPage/SearchBarPage";

interface IHeaderProps {
  groceryCartList: any[];
  setSearchTerm: Dispatch<SetStateAction<string>>;
  setSearchButtonClicked: Dispatch<SetStateAction<number>>;
}
const Header: FunctionComponent<IHeaderProps> = ({
  setSearchTerm,
  setSearchButtonClicked,
}) => {
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
      <Provider store={store}>
        <SearchBarPage
          setSearchTerm={setSearchTerm}
          setSearchButtonClicked={setSearchButtonClicked}
        />
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

      <div className="text-class">Cocktail Bar</div>
    </div>
  );
};

export default Header;
