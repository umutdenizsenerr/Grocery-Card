import React, { FunctionComponent, useEffect, useState } from "react";
import { Provider } from "react-redux";
import Header from "./components/Header/Header";
import CartPage from "./pages/CartPage/CartPage";
import DrinkPage from "./pages/DrinkPage/DrinkPage";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import store from "./redux/store";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const App = () => {
  const [groceryCartList, setGroceryCartList] = useState([]);
  useEffect(() => {}, [groceryCartList]);
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route
            path="/alcoholic"
            element={
              <Provider store={store}>
                <DrinkPage
                  setGroceryCartList={setGroceryCartList}
                  groceryCartList={groceryCartList}
                  isAlcoholic={true}
                />
              </Provider>
            }
          />
          <Route
            path="/nonalcoholic"
            element={
              <Provider store={store}>
                <DrinkPage
                  setGroceryCartList={setGroceryCartList}
                  groceryCartList={groceryCartList}
                  isAlcoholic={false}
                />
              </Provider>
            }
          />
          <Route
            path="/grocerycart"
            element={
              <CartPage
                groceryCartList={groceryCartList}
                setGroceryCartList={setGroceryCartList}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};
export default App;
