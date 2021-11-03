import styled from "styled-components";

export const CardContainer = styled.div`
    width: 22.5rem;
    height: 12.25rem;
    margin: 3.125rem 0 0;
    padding: 0.5rem 1rem 0;
`
export const Card = styled.div`
    width: 20.5rem;
    height: 11.75rem;
    padding: 0 0 1rem;
    border: solid 1px #b8b8b8;
    border-radius: 8px;
`

export const CardImage = styled.img`
    width: 20.5rem;
    height: 7.5rem;
    margin: 0 0 0.75rem;
    object-fit: contain;
`

export const CardDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

export const Name = styled.h3`
    width: 18.5rem;
    height: 1.125rem;
    margin: 0.75rem 1rem 0.25rem;
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #e8222e;
`

export const Delivery = styled.div`
    display: flex;
    justify-content: space-between;
`

export const Time = styled.p`
    width: 9.25rem;
    height: 1.125rem;
    margin: 0.25rem 0.5rem 0 1rem;
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #b8b8b8;
`

export const Freight = styled.p`
    width: 8.75rem;
    height: 1.125rem;
    margin: 0.25rem 1rem 0 0.5rem;
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: right;
    color: #b8b8b8;
`