import axios  from "axios";



export const profileRequest = (body, clearFields, history) => {
    axios
    .put(`https://us-central1-missao-newton.cloudfunctions.net/rappi4A/profile`,body,     
        {headers: {auth: window.localStorage.getItem("token"), 'Content-Type': 'application/json'}})

    .then((res) => {
                
        clearFields();
       
    })
    .catch((err) => {
        alert(err.response.data.message);
        console.log(err.response.data.message);
        console.log(body)
    })
};