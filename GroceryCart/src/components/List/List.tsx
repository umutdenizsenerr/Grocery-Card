import React, { FunctionComponent } from "react";

import "./List.css";
import LoadingSpin from "react-loading-spin";
import Card from "../Card/Card";
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
    return data.map((element, index) => (
      <div className="list-item list-render" key={element?.idDrink}>
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
      </div>
    ));
  };
  return (
    <div className="list-container">
      {cardType === "showCase" ? (
        isLoading ? (
          <LoadingSpin />
        ) : (
          renderList()
        )
      ) : (
        renderList()
      )}
    </div>
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
