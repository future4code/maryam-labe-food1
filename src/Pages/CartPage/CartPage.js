import React from 'react';
import useProtectedPage from '../../Hooks/useProtectedPage';


const CartPage = () => {
    useProtectedPage()

    return (
        <div>
            CartPage
        </div>
    )
}

export default CartPage;