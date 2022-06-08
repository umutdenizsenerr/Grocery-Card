import styled from "styled-components";

const CardContainter = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  height: 25vh;
  width: 25vh;
`;
const CardImageContainer = styled.div`
  display: block;
  position: absolute;

  z-index: -1;
`;

const CardImage = styled.img`
  height: 25vh;
`;
const Circle = styled.div`
  display: flex;
  border-radius: 4px;
  background-color: #ffffffcc;
  align-self: flex-start;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 1vh;
  padding: 0.5vh 1vh;
`;
const CardDetails = styled.div`
  display: flex;
  flex: 1;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-end;
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

export {
  CardContainter,
  CardImageContainer,
  Circle,
  CardDetails,
  CardImage,
  ButtonsContainer,
  CircleContainer,
  MainContainer,
};
