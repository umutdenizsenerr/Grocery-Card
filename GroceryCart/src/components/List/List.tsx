import React, { FunctionComponent } from "react";
import styled from "styled-components";
import LoadingSpin from "react-loading-spin";
import Card from "../Card/Card";

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 15vh;
`;

const ListCartContainer = styled.div`
  display: flex;
  flex-direction: column;
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
      <Card
        key={element?.idDrink}
        id={element?.idDrink}
        thumb={element?.strDrinkThumb}
        handleAdd={handleAdd}
        handleDetails={handleDetails}
        handleRemove={handleRemove}
        data={{
          serving: (element?.idDrink % 10) + 1,
          minute: ((element?.idDrink * 4) % 10) + 1,
          index: index,
          element: element,
          cocktail_name: element?.strDrink,
        }}
        type={cardType}
      />
    ));
  };
  return cardType === "showCase" ? (
    isLoading ? (
      <LoadingSpin />
    ) : (
      <ListContainer>{renderList()}</ListContainer>
    )
  ) : (
    <ListCartContainer>{renderList()}</ListCartContainer>
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
