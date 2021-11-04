import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import {
  MainContainer,
  TextP,
  MenuTab,
  HeaderContainer,
  ContainerProfile,
  ContainerAdress,
  TextBorder,
  Border,
  CardOrder,
  Name,
  Date,
  Price,
  EditButton,
  TextAdressTitle,
} from "./styled";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import {
  goToHome,
  goToCart,
  goToProfile,
  goToEditProfile,
  goToCreateAddress,
} from "../../Routes/coordinator";
import avatar from "../../Assets/assets_MyProfilePage/avatar.svg";
import homepage from "../../Assets/assets_MyProfilePage/homepage.svg";
import shoppingcart from "../../Assets/assets_MyProfilePage/shoppingcart.svg";
import edit from "../../Assets/assets_MyProfilePage/edit.svg";
import useProtectedPage from "../../Hooks/useProtectedPage";

const MyProfilePage = () => {
  useProtectedPage();
  const history = useHistory();
  const [profile, setProfile] = useState({});
  const [orderHistory, setOrderHistory] = useState([]);

  const getProfile = () => {
    axios
      .get(
        `https://us-central1-missao-newton.cloudfunctions.net/rappi4A/profile`,
        {
          headers: {
            auth: window.localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        setProfile(res.data.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getOrderHistory = () => {
    axios
      .get(
        `https://us-central1-missao-newton.cloudfunctions.net/rappi4A/orders/history`,
        {
          headers: {
            auth: window.localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        setOrderHistory(res.data.orders);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProfile();
    getOrderHistory();
  }, []);

  const orderComponents = orderHistory.map((order) => {
    let timestamp = order.expiresAt;
    return (
      <CardOrder>
        <Name>{order.restaurantName}</Name>
        <Date>
          {new Intl.DateTimeFormat("pt-BR", {
            year: "numeric",
            month: "long",
            day: "2-digit",
          }).format(timestamp)}
        </Date>
        <Price>Subtotal: R${order.totalPrice}</Price>
      </CardOrder>
    );
  });

  return (
    <MainContainer>
      <HeaderContainer>
        <TextP>Meu perfil</TextP>
      </HeaderContainer>
      <ContainerProfile>
        <div>
          <TextP>{profile && profile.name}</TextP>
          <TextP>{profile && profile.email}</TextP>
          <TextP>{profile && profile.cpf}</TextP>
        </div>
        <div>
          <EditButton onClick={() => goToEditProfile(history)}>
            <img src={edit} />
          </EditButton>
        </div>
      </ContainerProfile>
      <ContainerAdress>
        <div>
          <TextAdressTitle>Endereço cadastrado</TextAdressTitle>
          <TextP>{profile && profile.address}</TextP>
        </div>
        <div>
          <EditButton onClick={() => goToCreateAddress(history)}>
            <img src={edit} />
          </EditButton>
        </div>
      </ContainerAdress>
      <Border>
        <TextBorder>Histórico de pedidos</TextBorder>
      </Border>
      {orderHistory !== null ? (
        orderComponents
      ) : (
        <p>Você não realizou nenhum pedido</p>
      )}
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
    </MainContainer>
  );
};

export default MyProfilePage;
