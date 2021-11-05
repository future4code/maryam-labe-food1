import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { goToHome, goToCart, goToProfile } from "../../Routes/coordinator";
import avatar from "../../Assets/assets_MyProfilePage/avatar.svg";
import homepage from "../../Assets/assets_MyProfilePage/homepage.svg";
import shoppingcart from "../../Assets/assets_MyProfilePage/shoppingcart.svg";
import { MenuTab } from "./styled";
import { useHistory } from "react-router-dom";

const Footer = () => {
  const history = useHistory();
  return (
    <MenuTab>
      <BottomNavigation showLabels>
        <BottomNavigationAction
          onClick={() => goToHome(history)}
          icon={<img src={homepage} alt="" />}
        />
        <BottomNavigationAction
          onClick={() => goToCart(history)}
          icon={<img src={shoppingcart} alt="" />}
        />
        <BottomNavigationAction
          onClick={() => goToProfile(history)}
          icon={<img src={avatar} alt="" />}
        />
      </BottomNavigation>
    </MenuTab>
  );
};

export default Footer;
