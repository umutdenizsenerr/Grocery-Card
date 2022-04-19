import React from "react";
import { searchTermFunction } from "../../redux";
import { connect } from "react-redux";
import Button from "../Button/Button";
import "./SearchBar.css";
const SearchBar = (props) => {
  const handleSearch = (event) => {
    event.preventDefault();
    props.searchTermFunction(event.target.value);
    props.setSearchTerm(event.target.value);
  };
  const handleSearchButton = () => {
    props.setSearchButtonClicked((prev) => prev + 1);
  };
  console.log(props, "aaa");
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

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchBar,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchTermFunction: () => dispatch(searchTermFunction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
