import styled from "styled-components";

export const CadastroDeEndereco = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Title = styled.div`
    width: 296px;
    height: 18px;
    margin: 8px 0 0;
    padding: 12px 32px;
    text-align: center; 
    
`

export const Text = styled.div`
    
    height: 18px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #000;
`

export const Input_nolocus = styled.div`
    padding: 8px 0px 8px 0px;
    

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
    height: 44px;
    margin: 0 0 24px;
    padding: 0 0 10px;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
    background-color: #fff;
`