import styled from "styled-components";

export const ScreenContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const LogoImage = styled.img`
    width: 104px;
    height: 58px;
    margin: 104px auto 16px;
    object-fit: contain;
`

export const InputsContainer = styled.div`
    margin: auto;
    display: flex;
    flex-direction: column;
    width: 90vw;
    max-width: 500px;
    align-items: center;
    margin-bottom: 20px;    
`

export const LoginButton = styled.button`
    font-size: 16px;
    align-self: center;
    margin: auto;
    margin-top: 16px;
    width: 90vw;
    height: 42px;
    border-radius: 2px;
    border: none;
    background-color: #E86E5A;
`

export const SignUpButtonContainer = styled.div`
    margin-top: 28px;
    width: 80vw;
`