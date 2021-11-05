import styled from "styled-components";

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Title = styled.div`
    display: flex;
    justify-content: center;
    width: 300px;
    height: 44px;
    margin: 20px 92px 0 93px;
    padding: 13px 63.5px 12px;
    border-bottom: 1px solid #b8b8b8;
    margin-bottom: 1vh;
    span {
        width: 48px;
        height: 19px;
        font-family: Roboto;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.39px;
        text-align: center;
        color: #000;
    }
`

export const FilterName = styled.form`
    width: 300px;
    height: 50px;
    padding: 16px 8px 16px 17px;
    border-radius: 2px;
    border: solid 1px #b8b8b8;
    display: flex;
    align-items: center;
    button {
        border: none;
        background-color: transparent;
        width: 25px;
        height: 25px;
        padding: 0;
    }
`

export const Search = styled.input`
    width: 300px;
    height: 50px;
    padding: 16px 8px 16px 17px;
    border: none;
`

export const Filters = styled.div`
    display: flex;
    width: 360px;
    height: 42px;
    margin: 8px 0 0;
    padding: 12px 0 12px 16px;
    overflow-x: scroll;
`

export const FiltersOff = styled.span`
    width: 87px;
    height: 18px;
    margin: 0 8px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;
`

export const FiltersOn = styled.span`
    width: 87px;
    height: 18px;
    margin: 0 8px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;
    color: #e86e5a;
`

export const Feed = styled.div`
    width: 360px;
    height: 196px;
    margin: 50px 0 0;
    padding: 8px 16px 0;
    h1 {
        text-align: center;
    }
`

export const MenuTab = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  border-top: 1px solid #b8b8b8;
`