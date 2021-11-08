import React, { useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import  BASE_URL  from '../../Constants/urls'
import MyContext from '../../Contexts/myContext';
import useRequestRestaurant from '../../Hooks/useRequestRestaurant';
import { goToCart } from '../../Routes/coordinator';
import { ScreenContainer,Logo, ProductContainer, DetailsContainer, RestaurantLogo, RestaurantContainer } from './styled';
import useProtectedPage from '../../Hooks/useProtectedPage';

const RestaurantPage = () => {
    useProtectedPage();

    const params = useParams()

    const history = useHistory()
    const newCart = []
    const {cart, setCart} = useContext(MyContext)

    const addCart = (productToAdd) => {
        const newCart = [...cart]
        let aux = false
        for (let i = 0; i<newCart.length; i++){
            if(newCart[i].id === productToAdd.id){
                newCart[i].quantity += 1
                aux = true
                break
            }
        }
        if(!aux)
        newCart.push({...productToAdd, quantity: 1})
        setCart(newCart)
        localStorage.setItem("cart", JSON.stringify(newCart))
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