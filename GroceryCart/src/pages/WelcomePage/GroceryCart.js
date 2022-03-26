import React, { useEffect, useState } from "react";
import "./GroceryCart.css";

const GroceryCart = (props) => {
  const [items, setItems] = useState([]);

  useEffect(() => {}, [items]);
  const handleSubmit = (event) => {
    event.preventDefault();
    let addedItem = event.target[0].value;
    if (addedItem !== "") {
      setItems((items) => [...items, event.target[0].value]);
    }
  };

  const handleRemove = (event) => {
    let newArr = [...items];
    newArr.splice(event.target.value, 1);
    setItems(newArr);
    console.log(items);
  };

  return (
    <div>
      <div className="AddItems">
        <img
          src="https://cdn.pixabay.com/photo/2013/07/12/14/53/cart-148964_960_720.png"
          height="50vh"
        />
        <form onSubmit={handleSubmit}>
          <label>
            <h5> Add Item</h5>
            <input type="text" />
          </label>
          <button type="submit">+</button>
        </form>
        <h5>asd</h5>
      </div>

      <h5>Grocery Cart</h5>
      <div className="ListContainer">
        <ul>
          {items.map((element, index) => (
            <div className="Items">
              <li key={index}>{element}</li>
              <button className="Button" value={index} onClick={handleRemove}>
                -
              </button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GroceryCart;
