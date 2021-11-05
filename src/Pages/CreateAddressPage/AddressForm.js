import React from "react"
import useForm from "../../Hooks/useForm"
import TextField  from "@material-ui/core/TextField";
import { Input_nolocus, SignUpButton, InputsContainer} from "./styled";
import { useHistory}  from 'react-router-dom';
import {createAddress} from "../../Services/addressRequest"
import useProtectedPage from "../../Hooks/useProtectedPage";
import { goToHome } from "../../Routes/coordinator";



const AddressForm = () => {
    useProtectedPage();
    const[form,onChange,clearFields] = useForm({street:"", number:"",
     neighbourhood:"", city:"", state:"", complement:""})
    const history = useHistory();




    const onSubmitForm = (event) => {
        event.preventDefault();
        createAddress(form, clearFields, history)
        goToHome(history);
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
                        label={"Logradouro"}
                        variant={"outlined"}
                        placeholder={"Rua/Av."}
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
                        placeholder={"Numero"}                 
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
                        placeholder={"Apto./Bloco"}
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
                        placeholder={"Bairro"}
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
                        placeholder={"Cidade"}
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
                        placeholder={"Estado"}
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