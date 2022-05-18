import React from "react";
import "./MyModal.css";

function Modal({ setOpenModal, ingredients }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Ingredients</h1>
        </div>
        <div className="body">
          {ingredients.slice(0, ingredients.length - 1).map((element) => (
            <div>{element}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Modal;
