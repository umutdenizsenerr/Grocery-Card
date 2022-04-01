import React from "react";
import Button from "../Button/Button";
import "./SearchBar.css";
const AddBar = (props) => {
  const handleSearch = (event) => {
    event.preventDefault();
    props.setSearchTerm(event.target.value);
  };
  return (
    <div className="search-bar-button-container">
      <div className="search-bar-container">
        <input
          className="search-bar"
          type="text"
          placeholder="What are you looking for?"
          onChange={handleSearch}
        />
      </div>
      <Button type="icon" className="searchButton" iconName="search" />
    </div>
  );
};

export default AddBar;
