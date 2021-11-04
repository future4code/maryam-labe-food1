import axios from "axios";
import { goToHome } from "../Routes/coordinator";

export const login = (body, clearFields, history) => {
    axios
    .post(`https://us-central1-missao-newton.cloudfunctions.net/rappi4A/login`, body)
    .then((response) => {
        localStorage.setItem("token", response.data.token);
        clearFields();
        goToHome(history);
    })
    .catch((error) => {
        alert("Erro ao fazer o login, tente novamente!");
        console.log(error.response.data.message);
        console.log(body)
    })
};

export const signUp = (body, clearFields, history) => {
    axios
    .post(`https://us-central1-missao-newton.cloudfunctions.net/rappi4A/signup`, body)
    .then((response) => {
        localStorage.setItem("token", response.data.token);
        clearFields();
        goToHome(history);
    })
    .catch((error) => {
        alert("Erro ao fazer o login, tente novamente!");
        console.log(error.response.data.message);
    })
};
