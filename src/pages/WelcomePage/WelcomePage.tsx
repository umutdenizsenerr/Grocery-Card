import React from "react";
import { FunctionComponent } from "react";
import {
  WelcomePageContainer,
  WelcomePageImage,
  WelcomePageImageContainer,
} from "./WelcomePage.style";

interface IWelcomePageProps {}
const WelcomePage: FunctionComponent<IWelcomePageProps> = () => {
  return (
    <WelcomePageContainer>
      <WelcomePageImageContainer>
        <WelcomePageImage
          src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/05/22/13/gin-cocktails.jpg?width=1200"
          alt=""
        />
      </WelcomePageImageContainer>
    </WelcomePageContainer>
  );
};

export default WelcomePage;
