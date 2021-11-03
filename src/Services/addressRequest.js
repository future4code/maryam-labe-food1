import axios  from "axios";
import BASE_URL from "../constants/urls"
import {goToCreateAddress} from "../Routes/coordinator"


export const login = (body, clear, history) => {
    axios
    .post(`${BASE_URL}/profile/address`, body)
    .then((res)=>{
        localStorage.setItem("token", res.data.token)
        clear()
        goToCreateAddress(history)
        
    })
    .catch((err)=>alert(err.response.data.message))
}