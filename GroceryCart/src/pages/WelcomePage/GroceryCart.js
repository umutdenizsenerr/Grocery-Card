import React, { useEffect, useState } from "react";
import "./GroceryCart.css";
import Modal from "react-modal";

const GroceryCart = (props) => {
  const [items, setItems] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {}, [items]);
  const handleSubmit = (event) => {
    event.preventDefault();
    let addedItem = event.target[0].value;
    if (addedItem !== "") {
      setItems((items) => [...items, event.target[0].value]);
    }
    setIsOpen(true);
  };

  const handleRemove = (event) => {
    let newArr = [...items];
    newArr.splice(event.target.value, 1);
    setItems(newArr);
    console.log(items);
  };
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <div className="AddItems">
        <link
          href="https://fonts.googleapis.com/css?family=Lobster"
          rel="stylesheet"
          type="text/css"
        />
        <img
          src="https://cdn.pixabay.com/photo/2013/07/12/14/53/cart-148964_960_720.png"
          height="50vh"
        />
        <Modal className="ModalDesign" isOpen={modalIsOpen}>
          <h4>Item {items[items.length - 1]} added successfully.</h4>
          <button onClick={closeModal}>close</button>
        </Modal>
        <form onSubmit={handleSubmit}>
          <label>
            <h5> Add Item</h5>
            <input type="text" />
          </label>
          <button type="submit" className="Button">
            +
          </button>
        </form>
        <h3>Umut Market</h3>
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
