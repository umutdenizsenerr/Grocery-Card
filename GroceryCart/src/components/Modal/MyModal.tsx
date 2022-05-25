import React from "react";
import LoadingSpin from "react-loading-spin";
import "./MyModal.css";

function Modal({ setOpenModal, ingredients, drinks_ingredients }) {
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
          {!drinks_ingredients?.loading ? (
            ingredients.map((element, index) => (
              <div key={index}>{element}</div>
            ))
          ) : (
            <LoadingSpin />
          )}
        </div>
      </div>
    </div>
  );
}

export default Modal;
