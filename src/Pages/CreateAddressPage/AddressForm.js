import React from "react"
import useForm from "../../Hooks/useForm"
import TextField  from "@material-ui/core/TextField";




const AddressForm = () => {
    const[form,onChange,clear] = useForm({street:"", number:"", neighbourhood:"", city:"", state:"", complement:""})
    

    const onSubmitForm = (event) => {
        localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkEwMDVtSEJmeVNrdDdPTjBITGFwIiwibmFtZSI6IkFzdHJvZGV2IiwiZW1haWwiOiJhc3Ryb2RldkBmdXR1cmU0LmNvbSIsImNwZiI6IjMzMy44ODguNjY2LTQ0IiwiaGFzQWRkcmVzcyI6dHJ1ZSwiYWRkcmVzcyI6IlJ1YSBQcmF0ZXMsIDYxMyAtIEJvbSBSZXRpcm8iLCJpYXQiOjE2MzU3ODYwMjJ9.c3DrQNxkx04oHnK17zfWApScHr6uqZayrPIxKN7RXcA')
    }


    return (
    <div>
        <form onSubmit={onSubmitForm}>
            
            <TextField
                name={"street"}
                value={form.street}
                onChange={onChange}
                label={"Rua/Av."}
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