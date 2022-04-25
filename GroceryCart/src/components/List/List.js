import { React, useState, useEffect } from "react";
import Button from "../Button/Button";
import {
  getCocktailRequest,
  searchCocktailRequest,
} from "../../redux/cocktails/cocktailAction";
import { connect } from "react-redux";
import "./List.css";
import LoadingSpin from "react-loading-spin";

const List = ({
  searchButtonClicked,
  drinks,
  searchTerm,
  isAlcoholic,
  groceryCartList,
  getCocktailRequestFunc,
  setGroceryCartList,
  openGroceryCart,
  searchCocktailRequestFunc,
}) => {
  useEffect(() => {
    getCocktailNames(false);
  }, [searchButtonClicked]);

  useEffect(() => {
    console.log("listpropsinuseeffect", drinks);
  }, [drinks]);

  const getCocktailNames = (isBasePage) => {
    isBasePage
      ? getCocktailRequestFunc(searchTerm, true, isAlcoholic)
      : searchCocktailRequestFunc(searchTerm);
  };
  const handleAdd = (event) => {
    event.preventDefault();
    setGroceryCartList([...groceryCartList, event.currentTarget.value]);
  };

  const renderList = () => {
    return openGroceryCart ? (
      groceryCartList
    ) : drinks.loading ? (
      <LoadingSpin />
    ) : (
      drinks.data?.map((element) => (
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
      ))
    );
  };
  return <div className="list-container">{renderList()}</div>;
};
const mapStateToProps = (state) => ({
  searchData: state,
  drinks: state?.cocktail?.drinks,
});
const mapDispatchToProps = {
  getCocktailRequestFunc: getCocktailRequest,
  searchCocktailRequestFunc: searchCocktailRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(List);

/*

typescript documentation https://www.typescriptlang.org/docs/
typescripte dönüştür
tüm component propsları ve redux variableları
how to migrate react to ts

her harfe basıldıgında istek atsın settimeout ile

grocery cart içi router ile gözüksün, remove işlemi cartın içinde , add işlemi adet inputu girerek

main sayfada + butonunun yanında ilk başta eklerken default set 1

detail button

css design
alcoholic içinde sadece homepage değil nonalcoholic de olsun
homepage - yolda.com homepage gibi
css breakpoints

documentation




onboarding
tutorial
react projesi kurma
fetch
routing
redux
git
typescript

*/
