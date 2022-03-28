import React from "react";
import Button from "../Button/Button";
const List = (props) => {
  const handleRemove = (event) => {
    let newArr = [...props.items];
    newArr.splice(event.target.value, 1);
    props.setItems(newArr);
  };
  return (
    <div>
      <h5>Grocery Cart</h5>
      <div className="ListContainer">
        <ul>
          {props.items.map((element, index) => (
            <div className="Items">
              <li key={index}>{element}</li>
              <Button value={index} onClick={handleRemove} content="-" />
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default List;
