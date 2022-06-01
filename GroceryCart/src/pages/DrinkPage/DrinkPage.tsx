import React, {
  Dispatch,
  FunctionComponent,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import {
  getCocktailRequest,
  getCocktailIdRequest,
} from "../../redux/cocktails/cocktailAction";
import { connect } from "react-redux";
import "../../components/List/List.css";
import MyModal from "../../components/MyModal/MyModal";
import List from "../../components/List/List";
interface IDrinkPageProps {
  drinks: any;
  drinks_ingredients: any;
  isAlcoholic: boolean;
  groceryCartList: any;
  getCocktailRequestFunc: (boolean) => {};
  getCocktailIdRequestFunc: (string) => {};
  setGroceryCartList: Dispatch<SetStateAction<any[]>>;
}
const DrinkPage: FunctionComponent<IDrinkPageProps> = ({
  drinks_ingredients,
  drinks,
  isAlcoholic,
  groceryCartList,
  getCocktailRequestFunc,
  setGroceryCartList,
  getCocktailIdRequestFunc,
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [ingredients, setIngredients] = useState([]);
  const pathname = window.location.pathname;

  useEffect(() => {
    getCocktailRequestFunc(isAlcoholic);
    console.log(isAlcoholic, pathname, drinks.data);
  }, [pathname]);

  const handleAdd = (event) => {
    event.preventDefault();
    let splitArray = event.currentTarget.value.split(",");
    let name = splitArray[0];
    let thumb = splitArray[1];
    if (groceryCartList.some((e) => e.strDrink === name)) {
      let temp = [...groceryCartList];
      let objIndex = groceryCartList.findIndex((obj) => obj.strDrink === name);
      temp[objIndex].amount += 1;
      setGroceryCartList([...temp]);
    } else {
      setGroceryCartList([
        ...groceryCartList,
        { strDrink: name, strDrinkThumb: thumb, amount: 1 },
      ]);
    }
    return null;
  };
  useEffect(() => {
    if (drinks_ingredients.loading === false) {
      let temp = [];
      for (let i = 1; i < 16; i++) {
        let ingredient_name = "strIngredient" + i;
        temp.push(drinks_ingredients?.data?.[0]?.[ingredient_name]);
      }
      setIngredients([...temp]);
    }
  }, [drinks_ingredients.loading]);

  const handleDetails = (event) => {
    event.preventDefault();
    getCocktailIdRequestFunc(event.currentTarget.value);
    setModalIsOpen(true);
    return null;
  };

  return (
    <div className="list-container">
      {modalIsOpen && (
        <div className="list-modal">
          <MyModal
            title="Ingredients"
            setOpenModal={setModalIsOpen}
            data={{
              ingredients: ingredients,
              drinks_ingredients: drinks_ingredients,
            }}
          />
        </div>
      )}
      <List
        handleAdd={handleAdd}
        handleDetails={handleDetails}
        data={drinks.data}
        isLoading={drinks.loading}
        cardType="showCase"
      />
    </div>
  );
};
const mapStateToProps = (state) => ({
  drinks: state?.cocktail?.drinks,
  drinks_ingredients: state?.cocktail?.drinks_ingredients,
});
const mapDispatchToProps = {
  getCocktailRequestFunc: getCocktailRequest,
  getCocktailIdRequestFunc: getCocktailIdRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(DrinkPage);

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
