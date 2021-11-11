import axios from "axios";

export const postOrder = (body, restaurant) => {
    axios
    .post(`https://us-central1-missao-newton.cloudfunctions.net/rappi4A/restaurants/${restaurant}/order`, body, {
        headers: {
            auth: localStorage.getItem('token')
        }
    })

    .then((res) => {
        alert("Pedido realizado")
        localStorage.removeItem("cart")
        localStorage.removeItem("restaurante")
    })
    .catch((error) => {
        alert("Erro ao realizar o pedido");
        console.log(error.response.data.message);
    })
};