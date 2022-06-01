import React, { Dispatch, FunctionComponent, SetStateAction } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import LoadingSpin from "react-loading-spin";
import "./MyModal.css";
interface IModalProps {
  title: string;
  data: any;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
}
const MyModal: FunctionComponent<IModalProps> = ({
  setOpenModal,
  data,
  title,
}) => {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            <AiOutlineCloseCircle />
          </button>
        </div>
        <div className="title">
          <h1>{title}</h1>
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

export default MyModal;
