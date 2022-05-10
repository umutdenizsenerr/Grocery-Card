import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GroceryCart from "./pages/WelcomePage/GroceryCart";

//TO DO useEfeect cleanup function
//redux -- rootingde parametre yollanması redux saga

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
        <Route
          path="alcoholic"
          element={<GroceryCart openGroceryCart={false} isAlcoholic={true} />}
        />
        <Route
          path="nonalcoholic"
          element={<GroceryCart openGroceryCart={false} isAlcoholic={false} />}
        />
        <Route
          path="grocerycart"
          element={<GroceryCart openGroceryCart={true} isAlcoholic={false} />}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
