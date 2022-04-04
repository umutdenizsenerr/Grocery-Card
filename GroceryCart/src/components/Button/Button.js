import { AiOutlinePlusCircle, AiOutlineSearch } from "react-icons/ai";
import { BiDetail, BiShow } from "react-icons/bi";
import "./Button.css";

const Button = (props) => {
  const iconList = {
    add: <AiOutlinePlusCircle size={32} />,
    details: <BiDetail size={32} />,
    search: <AiOutlineSearch />,
    show: <BiShow />,
  };
  const renderContent = () => {
    if (props.type === "icon") {
      return iconList[props.iconName];
    }
    return props.content;
  };
  return (
    <button
      type={props.type}
      className={props.iconName + "-button"}
      onClick={props.onClick}
      value={props.value}
    >
      {renderContent()}
    </button>
  );
};

export default Button;
