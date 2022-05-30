import React, { FunctionComponent } from "react";
import Button from "../Button/Button";
import "./SearchBar.css";

interface ISearchBarProps {
  handleSearch: (event: any) => any;
  handleSearchButton: (event: any) => any;
}
const SearchBar: FunctionComponent<ISearchBarProps> = ({
  handleSearch,
  handleSearchButton,
}) => {
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

export default SearchBar;
