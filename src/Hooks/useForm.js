import {useState} from "react"

const useForm = (initialState) => {
    const[form, setForm] = useState(initialState)

    const handleImputChange = (event) => {
        const {value, name} = event.target
        setForm({...form, [name]: value})
    }

    const clear = () => {
        setForm(initialState)
    }

    return [form, handleImputChange, clear]
}

export default useForm