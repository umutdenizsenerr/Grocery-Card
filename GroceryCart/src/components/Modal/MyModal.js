import React from "react";
import Modal from "react-modal";
import Button from "../Button/Button";

const MyModal = (props) => {
  const closeModal = () => {
    props.setIsOpen(false);
  };
  return (
    <Modal className="ModalDesign" isOpen={props.modalIsOpen}>
      <h4>Item {props.item[props.item.length - 1]} added successfully.</h4>
      <Button onClick={closeModal} content="close" />
    </Modal>
  );
};

export default MyModal;
