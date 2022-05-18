import React, { ReactNode, FunctionComponent } from "react";
import {
  AiOutlinePlusCircle,
  AiOutlineSearch,
  AiOutlineMinusCircle,
} from "react-icons/ai";
import { BiDetail, BiShow } from "react-icons/bi";
import "./Button.css";

interface IButtonProps {
  iconName?: "add" | "search" | "show" | "details" | "remove" | string;
  content?: ReactNode;
  type?: "icon" | string; // optionallara bak
  onClick?: (event: any) => {};
  value?: any;
  className?: string;
  onMouseEnter?: (event: any) => {};
  onMouseLeave?: (event: any) => {};
}
interface IconListTypes {
  add: ReactNode;
  details: ReactNode;
  search: ReactNode;
  show: ReactNode;
  remove: ReactNode;
}
const Button: FunctionComponent<IButtonProps> = ({
  iconName,
  content,
  type,
  onClick,
  value,
  onMouseEnter,
  onMouseLeave,
}) => {
  const iconList: IconListTypes = {
    add: <AiOutlinePlusCircle size={32} />,
    details: <BiDetail size={32} />,
    search: <AiOutlineSearch />,
    show: <BiShow />,
    remove: <AiOutlineMinusCircle size={32} />,
  };
  const renderContent = () => {
    if (type === "icon") {
      return iconList[iconName];
    }
    return content;
  };
  return (
    <button
      className={iconName + "-button"}
      onClick={onClick}
      value={value}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {renderContent()}
    </button>
  );
};
Button.defaultProps = {
  onClick: () => null,
  type: "",
};
export default Button;
