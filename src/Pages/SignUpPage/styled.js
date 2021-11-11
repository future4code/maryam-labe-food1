import styled from "styled-components";

export const ScreenContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const BackButton = styled.img`
    width: 23px;
    height: 24px;
    margin: auto 321px 0 16px;
    object-fit: contain;

    :hover {
        cursor: pointer;
    }
`

export const Header = styled.header`
    display: flex;
    width: 100%;
    height: 64px;
    margin: 0 0 24px;
    padding: 0 0 10px;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
    background-color: #fff;
`

export const LogoImage = styled.img`
    width: 104px;
    height: 58px;
    margin: 12px auto 16px;
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

export const SignUpButton = styled.button`
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