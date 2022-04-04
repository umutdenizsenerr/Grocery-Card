import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import "./Header.css";
const Header = (props) => {
  return (
    <div className="header-container">
      <link
        href="https://fonts.googleapis.com/css?family=Lobster"
        rel="stylesheet"
        type="text/css"
      />
      <div className="cart-image-container">
        <img
          className="cart-image"
          src="https://cdn.pixabay.com/photo/2013/07/12/14/53/cart-148964_960_720.png"
          alt=""
        />
        <div className="length-of-list">{props.groceryCartList.length}</div>
      </div>
      <SearchBar
        setSearchTerm={props.setSearchTerm}
        setSearchList={props.setSearchList}
        setSearchButtonClicked={props.setSearchButtonClicked}
      />
      <h3>Umut Market</h3>
    </div>
  );
};

export default Header;
