import React from "react";
import Button from "../Button/Button";
import "./SearchBar.css";
const AddBar = (props) => {
  const handleSearch = (event) => {
    event.preventDefault();
    props.setSearchTerm(event.target.value);
  };
  const handleSearchButton = () => {
    props.setSearchButtonClicked((prev) => prev + 1);
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

export default AddBar;
