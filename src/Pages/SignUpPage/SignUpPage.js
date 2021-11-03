import React from 'react';
import { ScreenContainer, LogoImage, Header, BackButton } from "./styled.js";
import logo from "../../Assets/assets_Sign Up/logo-future-eats-invert.png";
import back from "../../Assets/assets_Sign Up/back.png";
import { goToLogin} from '../../Routes/coordinator.js';
import { useHistory } from 'react-router-dom';
import SignUpForm from './SignUpForm.js';
import useUnprotectedPage from '../../Hooks/useUnprotectedPage.js';

const SignUpPage = () => {
    useUnprotectedPage();
    const history = useHistory();

    return (
        <ScreenContainer>
            <Header>
                <BackButton src={back} onClick={() => goToLogin(history)} />
            </Header>
            <LogoImage src={logo} alt="logo Rappi4" />
            Cadastrar
            <SignUpForm />
        </ScreenContainer>
    )
}

export default SignUpPage;