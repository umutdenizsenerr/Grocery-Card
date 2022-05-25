import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import List from "../../components/List/List";
import store from "../../redux/store";
import { Provider } from "react-redux";
import { FunctionComponent } from "react";
import DrinkPage from "../DrinkPage/DrinkPage";
import CartPage from "../CartPage/CartPage";

interface IGroceryCartProps {
  isAlcoholic?: boolean;
  openGroceryCart: boolean;
}
const GroceryCart: FunctionComponent<IGroceryCartProps> = ({
  isAlcoholic,
  openGroceryCart,
}) => {
  const [groceryCartList, setGroceryCartList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchList, setSearchList] = useState([]);
  const [searchButtonClicked, setSearchButtonClicked] = useState(0);
  useEffect(() => {}, [groceryCartList]);
  return (
    <div>
      <Header
        groceryCartList={groceryCartList}
        setSearchTerm={setSearchTerm}
        setSearchList={setSearchList}
        setSearchButtonClicked={setSearchButtonClicked}
      />
      {!openGroceryCart ? (
        <Provider store={store}>
          <DrinkPage
            setGroceryCartList={setGroceryCartList}
            groceryCartList={groceryCartList}
            searchTerm={searchTerm}
            searchButtonClicked={searchButtonClicked}
            isAlcoholic={isAlcoholic}
            openGroceryCart={openGroceryCart}
          />
        </Provider>
      ) : (
        <CartPage
          groceryCartList={groceryCartList}
          setGroceryCartList={setGroceryCartList}
        />
      )}
    </div>
  );
};

export default GroceryCart;
