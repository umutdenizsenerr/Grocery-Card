import React, { FunctionComponent } from "react";
import "./Card.css";
import Button from "../Button/Button";

interface ICartProps {
  index: number;
  element: any;
  handleRemove?: (event: any) => any;
}
const Cart: FunctionComponent<ICartProps> = ({
  index,
  element,
  handleRemove,
}) => {
  return (
    <div className="list-item-cart " key={index}>
      <div className="list-item-thumb-container">
        <img className="list-item-thumb" src={element.strDrinkThumb} alt="" />
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
  );
};

const ShowCase = ({
  thumb,
  cocktail_name,
  id,
  handleAdd,
  handleDetails,
  data,
}) => {
  return (
    <div className="cont_principal">
      <div className="cont_central">
        <div className="cont_modal cont_modal_active">
          <div className="cont_photo">
            <div className="cont_img_back">
              <img src={thumb} alt="" />
            </div>
            <div className="cont_mins">
              <div className="sub_mins">
                <h5 className="min-text">
                  {data.minute}
                  <div> MINS</div>
                </h5>
              </div>
              <Button
                type="icon"
                iconName="add"
                onClick={handleAdd}
                value={[cocktail_name, thumb]}
              />
            </div>
            <div className="cont_mins">
              <div className="sub_mins">
                <h5 className="serve-text">{data.serving} SERVINGS</h5>
              </div>
              <Button
                type="icon"
                iconName="details"
                onClick={handleDetails}
                value={[id]}
              />
            </div>

            <div className="cont_detalles">
              <h3>{cocktail_name}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Card = ({
  thumb,
  id,
  handleAdd,
  handleDetails,
  data,
  handleRemove,
  type = "showCase",
}) => {
  const cardType = {
    showCase: (
      <ShowCase
        thumb={thumb}
        cocktail_name={data.cocktail_name}
        id={id}
        handleAdd={handleAdd}
        handleDetails={handleDetails}
        data={data}
      />
    ),
    cartCase: (
      <Cart
        index={data.index}
        element={data.element}
        handleRemove={handleRemove}
      />
    ),
  };
  return cardType[type];
};

export default Card;
