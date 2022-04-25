import React, { useState } from "react";
import { getCocktailRequest } from "../../redux/cocktails/cocktailAction";
import { connect } from "react-redux";
import Button from "../Button/Button";
import "./SearchBar.css";
const SearchBar = (props) => {
  const { setSearchTerm, setSearchButtonClicked } = props;
  const [searchItem, setSearchItem] = useState("");
  const handleSearch = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
    setSearchItem(event.target.value);
  };
  const handleSearchButton = () => {
    //getCocktailRequest(searchItem, false, false);
    setSearchButtonClicked((prev) => prev + 1);
  };
  return (
    <div className="search-bar-button-container">
      <div className="search-bar-container">
        <input
          className="search-bar"
          type="text"
          placeholder="What are you looking for?"
          onChange={handleSearch}
          id="search-box"
        />
      </div>
      <Button
        type="icon"
        className="searchButton"
        iconName="search"
        onClick={handleSearchButton}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  //drinks: state,
});

const mapDispatchToProps = {
  getCocktailRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
