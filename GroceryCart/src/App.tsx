import React, { FunctionComponent, useEffect, useState } from "react";
import { Provider } from "react-redux";
import Header from "./components/Header/Header";
import CartPage from "./pages/CartPage/CartPage";
import DrinkPage from "./pages/DrinkPage/DrinkPage";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import store from "./redux/store";
interface IAppProps {
  isAlcoholic?: boolean;
  openGroceryCart?: boolean;
  isWelcomePage?: boolean;
}
const App: FunctionComponent<IAppProps> = ({
  isAlcoholic,
  openGroceryCart,
  isWelcomePage,
}) => {
  const [groceryCartList, setGroceryCartList] = useState([]);
  useEffect(() => {}, [groceryCartList]);
  return (
    <div>
      <Header />
      {isWelcomePage ? (
        <WelcomePage />
      ) : !openGroceryCart ? (
        <Provider store={store}>
          <DrinkPage
            setGroceryCartList={setGroceryCartList}
            groceryCartList={groceryCartList}
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
export default App;
