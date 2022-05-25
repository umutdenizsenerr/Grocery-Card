import React, { FunctionComponent, useState } from "react";
import Button from "../Button/Button";

import "./List.css";
import LoadingSpin from "react-loading-spin";
import Card from "../Card/Card";
interface IListProps {
  searchButtonClicked: number;
  drinks: any;
  searchTerm: string;
  isAlcoholic: boolean;
  groceryCartList: any;
  openGroceryCart: boolean;
  handleAdd: (event: any) => any;
  handleDetails: (event: any) => any;
}
const List: FunctionComponent<IListProps> = ({
  drinks,
  handleAdd,
  handleDetails,
}) => {
  const renderList = () => {
    return drinks.loading ? (
      <LoadingSpin />
    ) : (
      drinks.data?.map((element) => (
        <div className="list-item list-render" key={element.idDrink}>
          <Card
            id={element?.idDrink}
            thumb={element.strDrinkThumb}
            cocktail_name={element.strDrink}
            handleAdd={handleAdd}
            handleDetails={handleDetails}
            serving={(element.idDrink % 10) + 1}
            minute={((element.idDrink * 4) % 10) + 1}
          />
        </div>
      ))
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
