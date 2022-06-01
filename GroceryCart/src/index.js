import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App isWelcomePage={true} />} />
        <Route
          path="alcoholic"
          element={
            <App
              openGroceryCart={false}
              isAlcoholic={true}
              isWelcomePage={false}
            />
          }
        />
        <Route
          path="nonalcoholic"
          element={
            <App
              openGroceryCart={false}
              isAlcoholic={false}
              isWelcomePage={false}
            />
          }
        />
        <Route
          path="grocerycart"
          element={
            <App
              openGroceryCart={true}
              isAlcoholic={false}
              isWelcomePage={false}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// app.tsx düzenle
