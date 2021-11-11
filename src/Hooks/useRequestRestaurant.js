import { useEffect, useState } from "react";
import axios from 'axios'

const useRequestRestaurant = (initialData, url) => {
    const [data, setData] = useState(initialData)
    console.log("request",url)
    useEffect(() => {
        axios.get (url, {
            headers: {
                auth: localStorage.getItem('token')
            }
        })
            .then((res) => {
                console.log("restaurantes",res.data.restaurant)
                setData(res.data.restaurant)
                
            })
            .catch((err) => {
                console.log(err)
                alert('Ocorreu um erro, tente novamente')
            })

    }, [url])

    return (data)
}

export default useRequestRestaurant