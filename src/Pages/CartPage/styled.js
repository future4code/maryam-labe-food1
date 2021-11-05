import styled from "styled-components";

export const ScreenContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    margin-top: 5vh;
`
export const RestaurantContainer = styled.div`
    display:flex;
    flex-direction:column;
    width: 350px;

`

export const ProductContainer = styled.div`
    display: flex;
    align-items: center;
    width: 350px;
    /* margin-top: 5vh; */
    height: 150px;
    border: solid black 1px;
    align-items: center;
    margin-bottom: 5px;
    border-radius:10px;
`
export const DetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100px;
    margin-left: 5px;
    /* border: solid black 1px; */
`


export const Logo = styled.img`
    width: 150px;
    height: 150px;
    border-top-left-radius:10px;
    border-bottom-left-radius:10px;
    border-right: solid black 1px;
`

export const RestaurantLogo = styled.img`
    width: 350px;
    height: 200px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`