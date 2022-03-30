import React from "react";
import Button from "../Button/Button";
import "./SearchBar.css";
const AddBar = (props) => {
  /*const handleSubmit = (event) => {
    event.preventDefault();
    if (event.target[0].value !== "") {
      props.setItems((items) => [...items, event.target[0].value]);
    }
    props.setIsOpen(true);
  };*/
  return (
    <div className="search-bar-button-container">
      <div className="search-bar-container">
        <input
          className="search-bar"
          type="text"
          placeholder="What are you looking for?"
        />
      </div>
      <Button type="icon" className="searchButton" iconName="search" />
    </div>
  );
};

export default AddBar;
