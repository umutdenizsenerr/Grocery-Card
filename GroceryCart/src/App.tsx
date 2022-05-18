import "./App.css";
import { Link } from "react-router-dom";
import React from "react";
const App = () => {
  return (
    <div className="app-container">
      <div className="app-header">
        <div>
          <nav>
            <ul className="header-links">
              <li>
                <Link to="/">Home Page</Link>
              </li>
              <li>
                <Link to="/alcoholic">Alcoholic</Link>
              </li>
              <li>
                <Link to="/nonalcoholic">NonAlcoholic</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="text-class">Cocktail Bar</div>
      </div>
      <div className="app-image-container">
        <img
          className="app-image"
          src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/05/22/13/gin-cocktails.jpg?width=1200"
        />
      </div>
    </div>
  );
};
export default App;
