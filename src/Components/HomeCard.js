import React from "react";
import { useHistory } from "react-router-dom";
import { goToRestaurant } from "../Routes/coordinator";
import { CardContainer, Card, CardImage, CardDetails, Name, Delivery, Time, Freight } from "./StyledHomeCard";

const HomeCard = (props) => {

    const history = useHistory()

    return(
        <CardContainer>
            <Card onClick={() => goToRestaurant (history, props.restId)}>
                <CardImage src={props.logoUrl} />
                <CardDetails>
                    <Name>{props.name}</Name>
                    <Delivery>
                        <Time>{props.deliveryTime} min</Time>
                        <Freight>Frete R${props.shipping},00</Freight>
                    </Delivery>
                </CardDetails>
            </Card>
        </CardContainer>
    )
}

export default HomeCard;