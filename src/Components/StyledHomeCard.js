import styled from "styled-components";

export const CardContainer = styled.div`
    width: 360px;
    height: 196px;
    margin: 50px 0 0;
    padding: 8px 16px 0;
`

export const Card = styled.div`
    width: 328px;
    height: 188px;
    padding: 0 0 16px;
    border-radius: 8px;
    border: solid 1px #b8b8b8;
`

export const CardImage = styled.img`
    width: 100%;
    height: 120px;
    margin: 0 0 12px;
    object-fit: contain;
`

export const CardDetails = styled.div`
    display: flex;
    flex-direction: column;
`

export const Name = styled.h3`
    width: 296px;
    height: 18px;
    margin: 12px 16px 4px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #e86e5a;
`

export const Delivery = styled.div`
    display: flex;
    justify-content: space-between;
`

export const Time = styled.p`
    width: 148px;
    height: 18px;
    margin: 4px 8px 0 16px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #b8b8b8;
`

export const Freight = styled.p`
    width: 140px;
    height: 18px;
    margin: 4px 16px 0 8px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: right;
    color: #b8b8b8;
`