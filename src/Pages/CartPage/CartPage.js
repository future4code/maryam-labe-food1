import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import MyContext from '../../Contexts/myContext';
import { ScreenContainer,Logo, ProductContainer, DetailsContainer, RestaurantLogo, RestaurantContainer } from './styled';
import {postOrder} from '../../Services/restaurant.js'
import useProtectedPage from '../../Hooks/useProtectedPage';


const CartPage = () => {
    useProtectedPage()
    const history = useHistory()
    const {cart, setCart} = useContext(MyContext)
    const newCart = JSON.parse(localStorage.getItem("cart"));
    const rest = localStorage.getItem("restaurante")
    const productsCart = newCart && newCart.map((product)=>{
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

    const placeOrder = () => {
        const order = newCart.map((product) => {
            return(
                {id: product.id, 
                quantity: "1"} 
            )
            
        })
        const newOrder = {products: order,paymentMethod:"creditcard"}
        postOrder(newOrder, rest)

    }
    

    return (
        <div>
            <ScreenContainer>
                <h1>Carrinho</h1>
                <button onClick={()=> history.goBack()} >Voltar</button>
            <RestaurantContainer>
            
            {productsCart}
            </RestaurantContainer>
            <button onClick={()=>placeOrder()}>Fazer Pedido</button>
        </ScreenContainer>
        </div>
    )
}

export default CartPage;