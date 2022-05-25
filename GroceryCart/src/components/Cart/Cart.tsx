import React, { FunctionComponent, useState } from "react";
import Button from "../Button/Button";
import "./Cart.css";
import LoadingSpin from "react-loading-spin";
import Card from "../Card/Card";
interface IListProps {
  groceryCartList: any;

  handleRemove: (event: any) => any;
}
const List: FunctionComponent<IListProps> = ({
  groceryCartList,
  handleRemove,
}) => {
  const renderList = () => {
    return (
      <div className="list-container-cart">
        {groceryCartList.map((element, index) => (
          <div className="list-item-cart " key={index}>
            <div className="list-item-thumb-container">
              <img className="list-item-thumb" src={element.strDrinkThumb} />
            </div>
            <div className="list-item-name">{element.strDrink}</div>
            <div className="list-amount-class">{element.amount}</div>
            <div className="list-button-container">
              <Button
                type="icon"
                iconName="remove"
                onClick={handleRemove}
                value={index}
              ></Button>
            </div>
          </div>
        ))}
      </div>
    );
  };
  return <div className="list-container">{renderList()}</div>;
};

export default List;

/*
  
  
  onboarding
  tutorial
  react projesi kurma
  fetch
  routing
  redux
  git
  typescript
  
  */
