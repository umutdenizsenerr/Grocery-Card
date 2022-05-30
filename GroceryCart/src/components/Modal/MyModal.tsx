import React, { Dispatch, FunctionComponent, SetStateAction } from "react";
import LoadingSpin from "react-loading-spin";
import "./MyModal.css";
interface IModalProps {
  data: any;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
}
const Modal: FunctionComponent<IModalProps> = ({ setOpenModal, data }) => {
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
          {!data.drinks_ingredients?.loading ? (
            data.ingredients.map((element, index) => (
              <div key={index}>{element}</div>
            ))
          ) : (
            <LoadingSpin />
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
