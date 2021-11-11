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
    const restaurant = JSON.parse(localStorage.getItem("Restaurant"))
    const productsCart = newCart && newCart.map((product)=>{
        return(
            <ProductContainer key={product.id}>
                <Logo src={product.photoUrl}/>
                <DetailsContainer>
                    {product.name}<hr></hr>
                    
                    {product.description}<hr></hr>
                    R$ {product.price.toFixed(2)}
                    Quantidade {product.quantity}
                </DetailsContainer>
                
            </ProductContainer>
        )
    })

    const placeOrder = () => {
        const order = newCart.map((product) => {
            return(
                {id: product.id, 
                quantity: product.quantity} 
            )
            
        })
        const newOrder = {products: order,paymentMethod:"creditcard"}
        postOrder(newOrder, restaurant.id)

    }

    let total = 0
    for (let product of cart){
        total = Number(total + (product.price * product.quantity))
    }
    total += restaurant.shipping
    

    return (
        <div>
            <ScreenContainer>
                <h1>Carrinho</h1>
                <button onClick={()=> history.goBack()} >Voltar</button>
            <RestaurantContainer>
            
            {productsCart}
            Total = R${total.toFixed(2)}
            </RestaurantContainer>
            <button onClick={()=>placeOrder()}>Fazer Pedido</button>
        </ScreenContainer>
        </div>
    )
}

export default CartPage;