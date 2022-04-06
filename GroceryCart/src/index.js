import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GroceryCart from "./pages/WelcomePage/GroceryCart";
import List from "./components/List/List";
//TO DO useEfeect cleanup function
//redux

//styled components
//css dribble

//dökümantasyon
//github co-pilot

//i18
//typescript
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="alcoholic" element={<GroceryCart isAlcoholic={true} />} />
        <Route
          path="nonalcoholic"
          element={<GroceryCart isAlcoholic={false} />}
        />
        <Route
          path="grocerycart"
          element={<GroceryCart isAlcoholic={false} />}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
