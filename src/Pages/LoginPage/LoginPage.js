import React from 'react';
import {  LogoImage,  InputsContainer, SignUpButtonContainer } from './styled';
import logo from "../../Assets/assets_Login/logo-future-eats-invert.png";
import { Button } from '@material-ui/core';
import LoginForm from './LoginForm';
import { goToSignUp } from "../../Routes/coordinator";
import { useHistory } from 'react-router-dom';
import useUnprotectedPage from "../../Hooks/useUnprotectedPage";

const LoginPage = () => {

    useUnprotectedPage();
    const history = useHistory();

    return (
        <InputsContainer>
            <LogoImage src={logo} alt="logo Rappi4" />
            Entrar
           <LoginForm />
        <SignUpButtonContainer>
            <Button
            onClick={() => goToSignUp(history)}
            type={"submit"}
            fullWidth
            variant={"text"}
            >
                Não Possui Cadastro? Clique-aqui.
            </Button>
        </SignUpButtonContainer>
        </InputsContainer>
    )
}

export default LoginPage;