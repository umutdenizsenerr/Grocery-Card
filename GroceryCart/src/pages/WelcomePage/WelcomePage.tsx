import React from "react";
import { FunctionComponent } from "react";
import "./WelcomePage.css";

interface IWelcomePageProps {}
const WelcomePage: FunctionComponent<IWelcomePageProps> = () => {
  return (
    <div className="app-container">
      <div className="app-image-container">
        <img
          className="app-image"
          src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/05/22/13/gin-cocktails.jpg?width=1200"
          alt=""
        />
      </div>
    </div>
  );
};

export default WelcomePage;
