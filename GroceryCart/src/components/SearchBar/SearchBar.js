import React from "react";
import { searchTermFunction } from "../../redux";
import { connect } from "react-redux";
import Button from "../Button/Button";
import "./SearchBar.css";
const SearchBar = (props) => {
  const { searchTermFunction, setSearchTerm, setSearchButtonClicked } = props;

  const handleSearch = (event) => {
    event.preventDefault();
    searchTermFunction(event.target.value);
    setSearchTerm(event.target.value);
  };
  const handleSearchButton = () => {
    setSearchButtonClicked((prev) => prev + 1);
  };
  console.log({ props });
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
  searchTerm: state,
});

const mapDispatchToProps = {
  searchTermFunction,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
