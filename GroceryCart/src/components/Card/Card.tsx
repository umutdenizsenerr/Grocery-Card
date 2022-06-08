import React, { FunctionComponent } from "react";
import Button from "../Button/Button";
import styled from "styled-components";

const CardContPrincipal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45vh;
  height: 30vh;
`;

const CardContCentral = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardContModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardContPhoto = styled.div`
  position: relative;
  width: 50vh;
  height: 50vh;
  overflow: hidden;
  background-color: #eee;
  border-radius: 5px;
  top: -20px;
  z-index: 2;

  box-shadow: 1px 1px 20px -5px rgba(0, 0, 0, 0.5);
`;

const CardContImage = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 5px;

  img {
    width: 100%;
    opacity: 0.7;
  }
`;

const CardContMins = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: space-between;
`;

const CardSubMins = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  float: left;
  width: 8vh;
  height: 8vh;
  background-color: rgba(255, 253, 112, 0.8);
  border-radius: 50%;
  margin: 2vh;
  margin-bottom: 0px;
`;

const CardMinsText = styled.h5`
  font-size: 13px;
`;

const CardServesText = styled.h5`
  font-size: 11px;
`;

const CardDetails = styled.div`
  bottom: -15vh;
  height: 20vh;
  border-radius: 5px;
  width: 100%;

  h3 {
    margin-top: 10vh;
    color: #fff;
    font-size: 24px;
    opacity: 0.7;
  }
`;

const ListItemCart = styled.div`
  display: flex;
  padding: 2vh;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  width: 60vh;
  background-color: darksalmon;
  margin: 1vh;
`;

const ListItemThumbContainer = styled.div`
  display: flex;
  flex: 1;
`;

const ListItemThumb = styled.img`
  border-radius: 50vh;
  display: flex;
  height: 10vh;
`;

const ListItemName = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  color: white;
  flex: 4;
`;

const ListAmountText = styled.div`
  font-family: "Courier New", Courier, monospace;
  font-weight: 700;
`;

const ListButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

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
    <CardContPrincipal>
      <CardContCentral>
        <CardContModal>
          <CardContPhoto>
            <CardContImage>
              <img src={thumb} alt="" />
            </CardContImage>
            <CardContMins>
              <CardSubMins>
                <CardMinsText>
                  {data.minute}
                  <div> MINS</div>
                </CardMinsText>
              </CardSubMins>
              <Button
                type="icon"
                iconName="add"
                onClick={handleAdd}
                value={[cocktail_name, thumb]}
              />
            </CardContMins>
            <CardContMins>
              <CardSubMins>
                <CardServesText>{data.serving} SERVINGS</CardServesText>
              </CardSubMins>
              <Button
                type="icon"
                iconName="details"
                onClick={handleDetails}
                value={[id]}
              />
            </CardContMins>

            <CardDetails>
              <h3>{cocktail_name}</h3>
            </CardDetails>
          </CardContPhoto>
        </CardContModal>
      </CardContCentral>
    </CardContPrincipal>
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
        handleAdd={handleAdd}
      />
    ),
  };
  return cardType[type];
};

export default Card;
