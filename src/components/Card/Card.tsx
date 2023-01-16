import React, { FunctionComponent } from "react";
import Button from "../Button/Button";
import {
  CardContainter,
  CardDetails,
  CardImageContainer,
  CardImage,
  Circle,
  ButtonsContainer,
  CircleContainer,
  MainContainer,
  ListAmountText,
  ListButtonContainer,
  ListItemCart,
  ListItemName,
  ListItemThumbContainer,
  ListItemThumb,
  CartContainer,
} from "./Card.style";

interface ICartProps {
  index: number;
  element: any;
  handleRemove?: (event: any) => any;
  handleAdd?: (event: any) => any;
}
const Cart: FunctionComponent<ICartProps> = ({
  index,
  element,
  handleRemove,
  handleAdd,
}) => {
  return (
    <ListItemCart key={index}>
      <ListItemThumbContainer>
        <ListItemThumb src={element.strDrinkThumb} alt="" />
      </ListItemThumbContainer>
      <ListItemName>{element.strDrink}</ListItemName>
      <ListAmountText>{element.amount}</ListAmountText>
      <ListButtonContainer>
        <Button
          type="icon"
          iconName="remove"
          onClick={handleRemove}
          value={index}
        ></Button>
        <Button
          type="icon"
          iconName="add"
          onClick={handleAdd}
          value={index}
        ></Button>
      </ListButtonContainer>
    </ListItemCart>
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
    <CardContainter>
      <MainContainer>
        <CardImageContainer>
          <CardImage src={thumb} alt="" />
        </CardImageContainer>
        <CircleContainer>
          <Circle>{data.serving} SERVINGS</Circle>
          <Circle>{data.minute} MINS</Circle>
        </CircleContainer>
        <ButtonsContainer>
          <Button
            type="icon"
            iconName="details"
            onClick={handleDetails}
            value={[id]}
          />
          <Button
            type="icon"
            iconName="add"
            onClick={handleAdd}
            value={[cocktail_name, thumb]}
          />
        </ButtonsContainer>
      </MainContainer>
      <CardDetails>
        <h3>{cocktail_name}</h3>
      </CardDetails>
    </CardContainter>
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
      <CartContainer>
        <Cart
          index={data.index}
          element={data.element}
          handleRemove={handleRemove}
          handleAdd={handleAdd}
        />
      </CartContainer>
    ),
  };
  return cardType[type];
};

export default Card;
