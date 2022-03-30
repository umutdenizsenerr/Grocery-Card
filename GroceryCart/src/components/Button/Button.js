import { AiOutlinePlusCircle, AiOutlineSearch } from "react-icons/ai";
import { BiDetail } from "react-icons/bi";
import "./Button.css";

//TO DO button kendi propertilerini kaldır
const Button = (props) => {
  const iconList = {
    add: <AiOutlinePlusCircle size={32} />,
    details: <BiDetail size={32} />,
    search: <AiOutlineSearch />,
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
