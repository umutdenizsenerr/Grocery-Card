import React, { useState } from "react";
import MyModal from "../Modal/MyModal";
import AddBar from "../AddBar/AddBar";
const Header = (props) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  return (
    <div className="AddItems">
      <link
        href="https://fonts.googleapis.com/css?family=Lobster"
        rel="stylesheet"
        type="text/css"
      />
      <img
        src="https://cdn.pixabay.com/photo/2013/07/12/14/53/cart-148964_960_720.png"
        alt=""
      />
      <MyModal
        item={props.items}
        setIsOpen={setIsOpen}
        modalIsOpen={modalIsOpen}
      />
      <AddBar setItems={props.setItems} setIsOpen={setIsOpen} />
      <h3>Umut Market</h3>
    </div>
  );
};

export default Header;
