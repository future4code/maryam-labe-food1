import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "../Pages/LoginPage/LoginPage";
import SignUp from "../Pages/SignUpPage/SignUpPage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import HomePage from "../Pages/HomePage/HomePage";
import Cart from "../Pages/CartPage/CartPage";
import MyProfile from "../Pages/MyProfilePage/MyProfilePage";
import EditAddressPage from "../Pages/EditProfilePage/EditAddressPage/EditAddressPage";
import EditProfilePage from "../Pages/EditProfilePage/EditProfilePage/EditProfilePage";
import AddressPage from "../Pages/CreateAddressPage/AddressPage";
import RestaurantPage from "../Pages/RestaurantPage/RestaurantPage";
import SplashScreen from "../Pages/SplashScreen/SplashScreen";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/login"}>
          <Login />
        </Route>
        <Route exact path={"/cadastro"}>
          <SignUp />
        </Route>
        <Route exact path={"/endereco"}>
          <AddressPage />
        </Route>
        <Route exact path={"/home"}>
          <HomePage />
        </Route>
        <Route exact path={"/restaurante/:id"}>
          <RestaurantPage />
        </Route>
        <Route exact path={"/carrinho"}>
          <Cart />
        </Route>
        <Route exact path={"/perfil/"}>
          <MyProfile />
        </Route>
        <Route exact path={"/perfil/editar-perfil"}>
          <EditProfilePage />
        </Route>
        <Route exact path={"/perfil/editar-endereco"}>
          <EditAddressPage />
        </Route>
        <Route exact path={"/"}>
          <SplashScreen />
        </Route>
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
