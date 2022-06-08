import React, { Dispatch, FunctionComponent, SetStateAction } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import LoadingSpin from "react-loading-spin";
import styled from "styled-components";

const ModalBackground = styled.div`
  width: 10vw;
  height: 10vh;
  background-color: rgba(200, 200, 200);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  width: 50vh;
  height: 50vh;
  border-radius: 12px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  padding: 25px;

  .title {
    display: flex;
    text-align: center;
    margin-top: 10px;
    align-items: center;
    justify-content: center;
  }

  .body {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    flex-direction: column;
    width: 50vh;
  }

  .body:last-child {
    margin-top: 5vh;
  }
`;

const ModalCloseButton = styled.div`
  .titleCloseBtn {
    display: flex;
    justify-content: flex-end;
  }

  button {
    background-color: transparent;
    border: none;
    font-size: 25px;
    cursor: pointer;
  }
`;

interface IModalProps {
  title: string;
  data: any;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  isLoading: boolean;
}
const MyModal: FunctionComponent<IModalProps> = ({
  setOpenModal,
  data,
  title,
  isLoading,
}) => {
  return (
    <ModalBackground>
      <ModalContainer>
        <ModalCloseButton>
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            <AiOutlineCloseCircle />
          </button>
        </ModalCloseButton>
        <div className="title">
          <h1>{title}</h1>
        </div>
        <div className="body">
          {!isLoading ? (
            data.map((element, index) => <div key={index}>{element}</div>)
          ) : (
            <LoadingSpin />
          )}
        </div>
      </ModalContainer>
    </ModalBackground>
  );
};

export default MyModal;
