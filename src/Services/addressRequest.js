import axios  from "axios";



export const createAddress = (body, clearFields, history) => {
    axios
    .put(`https://us-central1-missao-newton.cloudfunctions.net/rappi4A/address`,body,     
        {headers: {auth: window.localStorage.getItem("token"), 'Content-Type': 'application/json'}})

    .then((res) => {
        localStorage.setItem("token", res.data.token);        
        clearFields();
        
        console.log()
    })
    .catch((err) => {
        alert("Erro ao cadastrar endereço, tente novamente!");
        console.log(err.response.data.message);
        console.log(body)
    })
};


