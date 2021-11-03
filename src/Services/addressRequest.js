import axios  from "axios";
import { goToHome } from "../Routes/coordinator";


export const createAddress = (body, clearFields, history) => {
    axios
    .post(`https://us-central1-missao-newton.cloudfunctions.net/rappi4A/address`, body)
    .then((response) => {
        localStorage.setItem("token", response.data.token);        
        clearFields();
        console.log(response.data.token)
        goToHome(history);
    })
    .catch((error) => {
        alert("Erro ao cadastrar endereço, tente novamente!");
        console.log(error.response.data.message);
    })
};


