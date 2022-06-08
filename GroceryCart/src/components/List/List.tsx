import React, { FunctionComponent } from "react";
import styled from "styled-components";
//import "./List.css";
import LoadingSpin from "react-loading-spin";
import Card from "../Card/Card";

const ListItem = styled.div`
  display: flex;
  padding: 2vh;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  margin-top: 20vh;
  margin-left: 5vh;
  z-index: 0;
`;

const ListContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

interface IListProps {
  data?: any;
  handleAdd?: (event: any) => any;
  handleDetails?: (event: any) => any;
  handleRemove?: (event: any) => any;
  cardType?: string;
  isLoading?: boolean;
}
const List: FunctionComponent<IListProps> = ({
  data,
  isLoading,
  handleAdd,
  handleDetails,
  handleRemove,
  cardType,
}) => {
  const renderList = () => {
    return data?.map((element, index) => (
      <ListItem key={element?.idDrink}>
        <Card
          id={element?.idDrink}
          thumb={element.strDrinkThumb}
          handleAdd={handleAdd}
          handleDetails={handleDetails}
          handleRemove={handleRemove}
          data={{
            serving: (element.idDrink % 10) + 1,
            minute: ((element.idDrink * 4) % 10) + 1,
            index: index,
            element: element,
            cocktail_name: element.strDrink,
          }}
          type={cardType}
        />
      </ListItem>
    ));
  };
  return (
    <ListContainer>
      {cardType === "showCase" ? (
        isLoading ? (
          <LoadingSpin />
        ) : (
          renderList()
        )
      ) : (
        renderList()
      )}
    </ListContainer>
  );
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

// context-api props drilling
