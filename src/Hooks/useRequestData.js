import { useEffect, useState } from "react";
import axios from 'axios'

const useRequestData = (initialData, url) => {
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





export default useRequestData
