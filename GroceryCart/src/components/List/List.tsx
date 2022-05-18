import React, {
  Dispatch,
  FunctionComponent,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import Button from "../Button/Button";
import {
  getCocktailRequest,
  searchCocktailRequest,
} from "../../redux/cocktails/cocktailAction";
import { connect } from "react-redux";
import "./List.css";
import LoadingSpin from "react-loading-spin";
import MyModal from "../Modal/MyModal";
import Card from "../Card/Card";
interface IListProps {
  searchButtonClicked: number;
  drinks: any;
  searchTerm: string;
  isAlcoholic: boolean;
  groceryCartList: any;
  getCocktailRequestFunc: (string, boolean, arg2: boolean) => {};
  setGroceryCartList: Dispatch<SetStateAction<any[]>>;
  openGroceryCart: boolean;
  searchCocktailRequestFunc: (string) => {};
}
const List: FunctionComponent<IListProps> = ({
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
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [ingredients, setIngredients] = useState([]);

  const pathname = window.location.pathname;
  useEffect(() => {
    getCocktailNames(true);
  }, [pathname]);

  useEffect(() => {
    if (searchButtonClicked > 0) {
      console.log(searchButtonClicked);
      const timer = setTimeout(() => {
        getCocktailNames(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [searchButtonClicked]);

  const getCocktailNames = (isBasePage) => {
    isBasePage
      ? getCocktailRequestFunc(searchTerm, true, isAlcoholic)
      : searchCocktailRequestFunc(searchTerm);
  };
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

    console.log(groceryCartList);
    return null;
  };

  const handleRemove = (event) => {
    event.preventDefault();
    let index = event.currentTarget.value;
    let temp = [...groceryCartList];
    if (temp[index].amount > 1) {
      temp[index].amount -= 1;
    } else {
      temp.splice(index, 1);
    }
    setGroceryCartList([...temp]);
    return null;
  };

  const handleDetails = (event) => {
    event.preventDefault();
    let splitArray = event.currentTarget.value.split(",");
    splitArray = splitArray.filter((item) => item);
    setIngredients([...splitArray]);
    setModalIsOpen(true);
    console.log(splitArray);
    return null;
  };
  const generate_random_number = (min, max) => {
    return Math.floor(Math.random() * max) + min;
  };

  const renderList = () => {
    return openGroceryCart ? (
      <div className="list-container-cart">
        {groceryCartList.map((element, index) => (
          <div className="list-item-cart " key={index}>
            <div className="list-item-thumb-container">
              <img className="list-item-thumb" src={element.strDrinkThumb} />
            </div>

            <div className="list-item-name">{element.strDrink}</div>
            <div className="list-amount-class">{element.amount}</div>

            <div className="list-button-container">
              <Button
                type="icon"
                iconName="remove"
                onClick={handleRemove}
                value={index}
              ></Button>
            </div>
          </div>
        ))}
      </div>
    ) : drinks.loading ? (
      <LoadingSpin />
    ) : (
      drinks.data?.map((element) => (
        <div className="list-item list-render" key={element.idDrink}>
          <Card
            ingredients={[
              element?.strIngredient1,
              element?.strIngredient2,
              element?.strIngredient3,
              element?.strIngredient4,
              element?.strIngredient5,
              element?.strIngredient6,
              element?.strIngredient7,
              element?.strIngredient8,
              element?.strIngredient9,
              element?.strIngredient10,
              element?.strIngredient11,
              element?.strIngredient12,
              element?.strIngredient13,
              element?.strIngredient14,
              element?.strIngredient15,
            ]}
            thumb={element.strDrinkThumb}
            cocktail_name={element.strDrink}
            recipe={element.strInstructions}
            handleAdd={handleAdd}
            handleDetails={handleDetails}
            serving={generate_random_number(2, 6)}
            minute={generate_random_number(15, 15)}
          />
        </div>
      ))
    );
  };
  return (
    <div className="list-container">
      {modalIsOpen && (
        <div className="list-modal">
          <MyModal setOpenModal={setModalIsOpen} ingredients={ingredients} />
        </div>
      )}
      {renderList()}
    </div>
  );
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

detail button ilk apidan ingredients bilgisi gelmiyor

css design
alcoholic içinde sadece homepage değil nonalcoholic de olsun
homepage - yolda.com homepage gibi

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
