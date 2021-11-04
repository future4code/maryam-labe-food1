import React from 'react';
import { useParams } from 'react-router-dom';
import  BASE_URL  from '../../Constants/urls'
import useRequestData from '../../Hooks/useRequestData';
import { ScreenContainer,Logo, ProductContainer, DetailsContainer, RestaurantLogo, RestaurantContainer } from './styled';
import useProtectedPage from '../../Hooks/useProtectedPage';

const RestaurantPage = () => {
    useProtectedPage();

    localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkEwMDVtSEJmeVNrdDdPTjBITGFwIiwibmFtZSI6IkFzdHJvZGV2IiwiZW1haWwiOiJhc3Ryb2RldkBmdXR1cmU0LmNvbSIsImNwZiI6IjMzMy44ODguNjY2LTQ0IiwiaGFzQWRkcmVzcyI6dHJ1ZSwiYWRkcmVzcyI6IlJ1YSBQcmF0ZXMsIDYxMyAtIEJvbSBSZXRpcm8iLCJpYXQiOjE2MzU3ODYwMjJ9.c3DrQNxkx04oHnK17zfWApScHr6uqZayrPIxKN7RXcA')
    const params = useParams()
    const details = useRequestData([], `${BASE_URL}/restaurants/${params.id}`)
    console.log("detalhes", details)
    const products = details.products && details.products.map((product)=>{
        return(
            <ProductContainer>
                <Logo src={product.photoUrl}/>
                <DetailsContainer>
                    {product.name}<hr></hr>
                    
                    {product.description}<hr></hr>
                    R$ {product.price},00
                </DetailsContainer>

            </ProductContainer>
        )
    })

    return (
        <ScreenContainer>
            <RestaurantContainer>
            <RestaurantLogo src={details.logoUrl} />
            <h3>{details.name}</h3>
            {details.category}
            <p>{details.deliveryTime}min -  Frete R$ {details.shipping},00</p>
            {details.address}
            {/* {details.description} */}
            {products}
            </RestaurantContainer>
        </ScreenContainer>
    );
}

export default RestaurantPage;