import { useEffect, useState } from "react";
import axios from 'axios'

export const useRequestData = (initialData, url) => {
    const [data, setData] = useState(initialData)

    useEffect(() => {
        axios.get (url, {
            headers: {
                auth: localStorage.getItem('token')
            }
        })
            .then((res) => {
                console.log("restaurantes",res.data)
                setData(res.data.restaurant)
                
            })
            .catch((err) => {
                console.log(err.data.message)
                alert('Ocorreu um erro, tente novamente')
            })

    }, [url])

    return (data)
}



export const useRequestDataRestaurant = (initialData, url) => {
    const [data, setData] = useState(initialData)

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

// export useRequestData
