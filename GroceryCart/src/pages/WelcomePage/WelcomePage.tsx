import React from "react";
import { FunctionComponent } from "react";
//import "./WelcomePage.css";

import styled from "styled-components";

const WelcomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const WelcomePageImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const WelcomePageImage = styled.img`
  height: 93.5vh;
`;

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
