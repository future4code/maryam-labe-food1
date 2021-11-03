import React, {useState, useEffect} from "react";
import axios from "axios"
import HomeCard from "../../Components/HomeCard";
import { HomeContainer, Title, Search, Filters, Feed } from "./styled";

const HomePage = () => {

    const [restaurants, setRestaurants] = useState([])

    const url = " https://us-central1-missao-newton.cloudfunctions.net/rappi4A/restaurants"

    const headers = {
        'Content-Type':'application/json',
        headers: {auth: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkEwMDVtSEJmeVNrdDdPTjBITGFwIiwibmFtZSI6IkFzdHJvZGV2IiwiZW1haWwiOiJhc3Ryb2RldkBmdXR1cmU0LmNvbSIsImNwZiI6IjMzMy44ODguNjY2LTQ0IiwiaGFzQWRkcmVzcyI6dHJ1ZSwiYWRkcmVzcyI6IlJ1YSBQcmF0ZXMsIDYxMyAtIEJvbSBSZXRpcm8iLCJpYXQiOjE2MzU3ODYwMjJ9.c3DrQNxkx04oHnK17zfWApScHr6uqZayrPIxKN7RXcA'}
    }

    const getRestaurants = () => {
        axios
            .get (url, headers)
            .then ((response) => {
                setRestaurants (response.data.restaurants)
            }).catch ((error) => {
                console.log(error.response)
            })
    }
    
    useEffect(() => {
        getRestaurants()
    }, [])

    const listRestaurants = restaurants && restaurants.map((restaurant) => {
        return (
            <HomeCard 
                key={restaurant.id}
                restId={restaurant.id}
                description={restaurant.description}
                shipping={restaurant.shipping}
                address={restaurant.address}
                name={restaurant.name}
                logoUrl={restaurant.logoUrl} 
                deliveryTime={restaurant.deliveryTime}
            />
        )
    })

    return (
        <HomeContainer>
            <Title>
                <span>Rappi4</span>
            </Title>
            <div>
                <Search placeholder='Restaurante' />
                <Filters>
                    <span>Burguer</span>
                    <span>Asiática</span>
                    <span>Massa</span>
                    <span>Saudáveis</span>
                </Filters>
            </div>
            <Feed>
                {listRestaurants}
            </Feed>
        </HomeContainer>
    )
}

export default HomePage;