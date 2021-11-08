import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import logoRappi from "../../Assets/assets_SplashScreen/logo-future-eats@3x.png";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Background, LogoContainer, LogoCenter } from "./styled";

const SplashScreen = () => {
  const history = useHistory();
  useEffect(() => {
    const token = localStorage.getItem("token");

    setTimeout(() => {
      token ? history.push("/home") : history.push("/login");
    }, 3000);
  });
  return (
    <Background>
      <LogoContainer>
        <LogoCenter src={logoRappi} alt="rappi4 logo" />
        <CircularProgress color="inherit" size="40px" />
      </LogoContainer>
    </Background>
  );
};

export default SplashScreen;
