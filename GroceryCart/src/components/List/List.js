import React from "react";
import Button from "../Button/Button";
import axios from "axios";
const List = (props) => {
  let drinkNames = [];
  const handleRemove = (event) => {
    let newArr = [...props.items];
    newArr.splice(event.target.value, 1);
    props.setItems(newArr);
  };

  const getCocktailNames = async () => {
    const base_url =
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=";
    let url = "";
    for (let i = 97; i < 123; i++) {
      url = base_url + String.fromCharCode(i);
      await axios
        .get(url)
        .then((response) =>
          response.data.drinks !== null
            ? response.data.drinks.map((item) => drinkNames.push(item.strDrink))
            : null
        );
    }
  };
  return (
    <div>
      <h5>Grocery Cart</h5>
      <div className="ListContainer">
        <ul>
          {props.items.map((element, index) => (
            <div className="Items">
              <li key={index}>{element}</li>
              <Button value={index} onClick={handleRemove} content="-" />
            </div>
          ))}
        </ul>
        <Button onClick={getCocktailNames} content="get data" />
      </div>
    </div>
  );
};
export default List;
