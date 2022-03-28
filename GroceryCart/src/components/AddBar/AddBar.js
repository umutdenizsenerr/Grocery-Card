import React, { useState } from "react";
import Button from "../Button/Button";
const AddBar = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    if (event.target[0].value !== "") {
      props.setItems((items) => [...items, event.target[0].value]);
    }
    props.setIsOpen(true);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <h5> Add Item</h5>
        <input type="text" />
      </label>
      <Button type="submit" content="+" />
    </form>
  );
};

export default AddBar;
