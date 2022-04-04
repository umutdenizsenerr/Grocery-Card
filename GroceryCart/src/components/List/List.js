import { React, useState, useEffect } from "react";
import Button from "../Button/Button";
import axios from "axios";
import "./List.css";
const List = (props) => {
  const [drinkList, setDrinkList] = useState([]);

  useEffect(() => {
    getCocktailNames(props.searchButtonClicked);
  }, [props.searchButtonClicked]);
  /*  TODO grocerycartın içi
  const handleRemove = (event) => {
    let newArr = [...drinkNames];
    newArr.splice(event.target.value, 1);
    setDrinkNames(newArr);
  };*/
  //umut
  const getCocktailNames = async (buttonClicked) => {
    if (!buttonClicked) {
      const base_url =
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic";

      //TO DO then, catch  -> try, catch
      await axios
        .get(base_url)
        .then((response) => setDrinkList(response.data.drinks))
        .catch((error) => console.log(error));
    } else {
      const url =
        "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" +
        document.getElementById("search-box").value.toLowerCase();

      await axios
        .get(url)
        .then((response) => setDrinkList(response.data.drinks))
        .catch((error) => console.log(error));
    }
  };
  const handleAdd = (event) => {
    event.preventDefault();
    props.setGroceryCartList([
      ...props.groceryCartList,
      event.currentTarget.value,
    ]);
  };

  const renderList = () => {
    return drinkList
      .filter((element) => {
        if (props.searchTerm === "") {
          return element;
        } else if (
          element.strDrink
            .toLowerCase()
            .includes(props.searchTerm.toLowerCase())
        ) {
          return element.strDrink;
        }
      })
      .map((element) => (
        <div className="list-item" key={element.idDrink}>
          <div className="list-item-thumb-container">
            <img className="list-item-thumb" src={element.strDrinkThumb} />
          </div>

          <div className="list-item-name">{element.strDrink}</div>
          <div className="list-button-container">
            <Button
              type="icon"
              iconName="add"
              onClick={handleAdd}
              value={element.strDrink}
            />
            <Button type="icon" iconName="details" />
          </div>
        </div>
      ));
  };
  return <div className="list-container">{renderList()}</div>;
};
export default List;
