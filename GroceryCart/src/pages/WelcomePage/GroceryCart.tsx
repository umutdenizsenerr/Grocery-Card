import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
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
  const [searchButtonClicked, setSearchButtonClicked] = useState(0);
  useEffect(() => {}, [groceryCartList]);
  return (
    <div>
      <Header
        groceryCartList={groceryCartList}
        setSearchTerm={setSearchTerm}
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
