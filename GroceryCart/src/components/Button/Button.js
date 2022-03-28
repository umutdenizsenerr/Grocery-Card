const Button = (props) => {
  return (
    <button
      type={props.type}
      className="Button"
      onClick={props.onClick}
      value={props.value}
    >
      {props.content}
    </button>
  );
};

export default Button;
