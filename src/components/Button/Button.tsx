import React, { ReactNode, FunctionComponent } from "react";
import {
  AiOutlinePlusCircle,
  AiOutlineSearch,
  AiOutlineMinusCircle,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { BiDetail, BiShow } from "react-icons/bi";
import { Link } from "react-router-dom";
//import "./Button.css";
import styled from "styled-components";

const ImageButton = styled.button`
  height: 8vh;
  width: 8vh;
  background-color: rgb(160, 156, 156);
  border-radius: 100px;
  margin: 1vh;
  &:hover {
    background-color: beige;
  }
  &:active {
    box-shadow: 0 5px rgb(143, 95, 95);
  }
`;

const RemoveShowButton = styled.button`
  border-radius: 150px;
  background-color: darksalmon;
  border-width: 0px;
  width: 6vh;
  height: 6vh;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  &:hover {
    background-color: beige;
  }
  &:active {
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
`;

const AddDetailsButton = styled.button`
  background-color: transparent;
  width: 6vh;
  height: 6vh;
  border-radius: 150px;
  border-width: 0px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;

  &:hover {
    background-color: beige;
  }
  &:active {
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
`;

const SearchButton = styled.button`
  border-radius: 100px;
  background-color: beige;
  border-width: 0px;
  width: 5vh;
  &:hover {
    background-color: rgb(136, 2, 96);
  }
`;

interface IButtonProps {
  iconName?: "add" | "search" | "show" | "details" | "remove" | string;
  content?: ReactNode;
  type?: "icon" | string;
  onClick?: any;
  value?: any;
  className?: string;
}
interface IconListTypes {
  add: ReactNode;
  details: ReactNode;
  search: ReactNode;
  show: ReactNode;
  remove: ReactNode;
  cart: ReactNode;
}
const Button: FunctionComponent<IButtonProps> = ({
  iconName,
  content,
  type,
  onClick,
  value,
}) => {
  const iconList: IconListTypes = {
    add: <AiOutlinePlusCircle size={32} />,
    details: <BiDetail size={32} />,
    search: <AiOutlineSearch />,
    show: <BiShow />,
    remove: <AiOutlineMinusCircle size={32} />,
    cart: <AiOutlineShoppingCart size={32} />,
  };

  const renderContent = () => {
    if (type === "icon") {
      if (iconName === "search") {
        return (
          <SearchButton onClick={onClick} value={value}>
            {iconList[iconName]}
          </SearchButton>
        );
      } else if (iconName === "details" || iconName === "add") {
        return (
          <AddDetailsButton onClick={onClick} value={value}>
            {iconList[iconName]}
          </AddDetailsButton>
        );
      } else if (iconName === "remove" || iconName === "show") {
        return (
          <RemoveShowButton onClick={onClick} value={value}>
            {iconList[iconName]}
          </RemoveShowButton>
        );
      } else if (iconName === "cart") {
        return (
          <ImageButton onClick={onClick} value={value}>
            <nav>
              <Link to="/grocerycart"> {iconList[iconName]}</Link>
            </nav>
          </ImageButton>
        );
      }
      return (
        <button onClick={onClick} value={value}>
          {content}
        </button>
      );
    }
  };
  return renderContent();
};

Button.defaultProps = {
  onClick: () => null,
  type: "",
};

export default Button;
