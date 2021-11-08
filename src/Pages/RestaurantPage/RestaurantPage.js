import React, { useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import  BASE_URL  from '../../Constants/urls'
import MyContext from '../../Contexts/myContext';
import useRequestRestaurant from '../../Hooks/useRequestRestaurant';
import { goToCart } from '../../Routes/coordinator';
import { ScreenContainer,Logo, ProductContainer, DetailsContainer, RestaurantLogo, RestaurantContainer } from './styled';



const RestaurantPage = () => {
    localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkEwMDVtSEJmeVNrdDdPTjBITGFwIiwibmFtZSI6IkFzdHJvZGV2IiwiZW1haWwiOiJhc3Ryb2RldkBmdXR1cmU0LmNvbSIsImNwZiI6IjMzMy44ODguNjY2LTQ0IiwiaGFzQWRkcmVzcyI6dHJ1ZSwiYWRkcmVzcyI6IlJ1YSBQcmF0ZXMsIDYxMyAtIEJvbSBSZXRpcm8iLCJpYXQiOjE2MzU3ODYwMjJ9.c3DrQNxkx04oHnK17zfWApScHr6uqZayrPIxKN7RXcA')
    const params = useParams()
    const history = useHistory()
    const newCart = []
    const {cart, setCart} = useContext(MyContext)
    // setCart("teste")
    console.log("Carrinho", cart)

    const addCart = (product) => {
        newCart.push(product)
        
    }
    const goCart = () => {
        if (newCart.length !== 0){
            setCart(newCart)
            localStorage.setItem("cart", JSON.stringify(newCart))
            localStorage.setItem("restaurante", params.id)
            goToCart(history)
        }else 
        goToCart(history)
    }

    const details = useRequestRestaurant([], `${BASE_URL}/restaurants/${params.id}`)
    const products = details.products && details.products.map((product)=>{
        return(
            <ProductContainer>
                <Logo src={product.photoUrl}/>
                <DetailsContainer>
                    {product.name}<hr></hr>
                    
                    {product.description}<hr></hr>
                    R$ {product.price},00
                    <button onClick={()=>addCart(product)}>Add</button>
                </DetailsContainer>
                
            </ProductContainer>
        )
    })

    return (
        <ScreenContainer>
            <button onClick={()=>goCart()}>carrinho</button>
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