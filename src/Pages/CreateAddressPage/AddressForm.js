import React from "react"
import useForm from "../../Hooks/useForm"
import TextField  from "@material-ui/core/TextField";
import { Input_nolocus, SignUpButton, InputsContainer} from "./styled";




const AddressForm = () => {
    const[form,onChange,clear] = useForm({street:"", number:"", neighbourhood:"", city:"", state:"", complement:""})
    

    const onSubmitForm = (event) => {
        localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkEwMDVtSEJmeVNrdDdPTjBITGFwIiwibmFtZSI6IkFzdHJvZGV2IiwiZW1haWwiOiJhc3Ryb2RldkBmdXR1cmU0LmNvbSIsImNwZiI6IjMzMy44ODguNjY2LTQ0IiwiaGFzQWRkcmVzcyI6dHJ1ZSwiYWRkcmVzcyI6IlJ1YSBQcmF0ZXMsIDYxMyAtIEJvbSBSZXRpcm8iLCJpYXQiOjE2MzU3ODYwMjJ9.c3DrQNxkx04oHnK17zfWApScHr6uqZayrPIxKN7RXcA')
    }


    return (
    <InputsContainer>
        <form onSubmit={onSubmitForm}>
            <Input_nolocus>                
                <TextField
                name={"street"}
                fullWidth
                value= {form.street}               
                onChange={onChange}
                label={"Rua/Av."}
                variant={"outlined"}
                required                
                />              
            </Input_nolocus>  
            <Input_nolocus>           
                <TextField
                    name={"number"}
                    value={form.number}
                    onChange={onChange}
                    label={"Numero"}
                    variant={"outlined"}
                    fullWidth                    
                    required  
                /> 
            </Input_nolocus>
            <Input_nolocus>
                <TextField
                    name={"complement"}
                    value={form.complement}
                    onChange={onChange}
                    label={"Complemento"}
                    variant={"outlined"}
                    fullWidth
                /> 
            </Input_nolocus>
            <Input_nolocus> 
                <TextField
                    name={"neighbourhood"}
                    value={form.neighbourhood}
                    onChange={onChange}
                    label={"Bairro"}
                    variant={"outlined"}
                    fullWidth
                    required                    
                /> 
            </Input_nolocus>
            <Input_nolocus>
                <TextField
                    name={"city"}
                    value={form.city}
                    onChange={onChange}
                    label={"Cidade"}
                    variant={"outlined"}
                    fullWidth
                    required
                /> 
            </Input_nolocus>
            <Input_nolocus>
                <TextField
                    name={"state"}
                    value={form.state}
                    onChange={onChange}
                    label={"Estado"}
                    variant={"outlined"}
                    fullWidth
                    required
                /> 
            </Input_nolocus>
            <SignUpButton>
                Salvar
            </SignUpButton>
        </form>
    </InputsContainer>
    );
}



export default AddressForm;