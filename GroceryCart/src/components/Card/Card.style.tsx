import styled from "styled-components";

const CardContainter = styled.div`
  display: flex;
  margin: 2em;
  border-radius: 50%;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  height: 50vh;
  width: 50vh;
`;
const CardImageContainer = styled.div`
  display: block;
  position: absolute;
  z-index: -1;
`;

const CardImage = styled.img`
  height: 50vh;
  border-radius: 10%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
const Circle = styled.div`
  display: flex;
  border-radius: 80%;
  background-color: #ffffffcc;
  align-self: flex-start;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 8vh;
  width: 8vh;
  margin: 2vh;
  justify-content: center;
  padding: 0.5vh 1vh;
  font-size: 15px;
`;
const CardDetails = styled.div`
  display: flex;
  flex: 1;

  & > h3 {
    color: white;
    font-family: "Courier New", monospace;
    text-shadow: 0.03em 0.03em 0 hsla(230, 40%, 50%, 1);
    font-weight: 700;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-end;
  margin: 3vh;
`;

const CircleContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex: 4;
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

const CartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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

export {
  CardContainter,
  CardImageContainer,
  Circle,
  CardDetails,
  CardImage,
  ButtonsContainer,
  CircleContainer,
  MainContainer,
  ListItemCart,
  ListItemThumbContainer,
  ListItemName,
  ListAmountText,
  ListButtonContainer,
  ListItemThumb,
  CartContainer,
};
