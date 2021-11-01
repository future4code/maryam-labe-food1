import React from "react"
import { useHistory } from "react-router"






const AddressForm = () => {
    const[form,onChange,clear] = useForm({street:"", number:"", neighbourhood:"", city:"", state:"", complement:""})
    const history = useHistory()

    const onSubmitForm = (event) => {
        event.preventDefault()
        login(form, clear, history)
    }


    return (
    <div>
        <form onSubmit={onSubmitForm}>
            <TextField
                name={"street"}
                value={form.street}
                onChange={onChange}
                label={"Endereço"}
                variant={"outlined"}
                fullWidth
                margin={"normal"}
                required
            />              
            <TextField
                name={"number"}
                value={form.number}
                onChange={onChange}
                label={"Numero"}
                variant={"outlined"}
                fullWidth
                margin={"normal"}
                required  
            /> 
            <TextField
                name={"complement"}
                value={form.complement}
                onChange={onChange}
                label={"Complemento"}
                variant={"outlined"}
                fullWidth
                margin={"normal"}
                required
            />  
            <TextField
                name={"neighbourhood"}
                value={form.neighbourhood}
                onChange={onChange}
                label={"Bairro"}
                variant={"outlined"}
                fullWidth
                margin={"normal"}
                required
                
            /> 
            <TextField
                name={"city"}
                value={form.city}
                onChange={onChange}
                label={"Cidade"}
                variant={"outlined"}
                fullWidth
                margin={"normal"}
                required
            /> 
            <TextField
                name={"state"}
                value={form.state}
                onChange={onChange}
                label={"Estado"}
                variant={"outlined"}
                fullWidth
                margin={"normal"}
                required
            /> 
            
            <button type={"submit"}>Cadastrar endereço</button>  
        </form>
    </div>
    );
}



export default AddressForm;