import React from "react"
import useForm from "../../../Hooks/useForm"
import TextField  from "@material-ui/core/TextField";
import { Input_nolocus, SignUpButton, InputsContainer} from "./styled";
import { useHistory}  from 'react-router-dom';
import {createAddress} from "../../../Services/addressRequest"
import useProtectedPage from "../../../Hooks/useProtectedPage";
import { goToProfile } from "../../../Routes/coordinator";



const EditProfileForm = () => {
    // useProtectedPage();
    const[form,onChange,clearFields] = useForm({street:"", number:"", neighbourhood:"", city:"", state:"", complement:""})
    const history = useHistory();




    const onSubmitForm = (event) => {
        createAddress(form, clearFields, history)
    
    }

    const maskedCPF = (cpf) => {
        let maskedValue = cpf.replace(/\D/g, '').replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d{1,2})/, '$1-$2').replace(/(-\d{2})\d+?$/, '$1')
        return maskedValue;
    };


    return (
        <InputsContainer>
            <form onSubmit={onSubmitForm}>
                <Input_nolocus>                
                    <TextField
                        name={"name"}
                        value={form.name}
                        onChange={onChange}
                        label={"Nome"} 
                        variant={"outlined"}
                        fullWidth
                        type={"text"}
                        required
                        placeholder={"Nome e sobrenome"}
                    />            
                </Input_nolocus>  
                <Input_nolocus>           
                    <TextField
                        name={"email"}
                        value={form.email}
                        onChange={onChange}
                        label={"E-mail"} 
                        variant={"outlined"}
                        fullWidth
                        type={"email"}
                        required
                        placeholder={"email@email.com"}
                    />
                </Input_nolocus>
                <Input_nolocus>
                <TextField
                    name={"cpf"}
                    value={form.cpf}
                    onChange={(event)=> onChange(event, maskedCPF)}
                    label={"CPF"} 
                    variant={"outlined"}
                    fullWidth
                    type={"text"}
                    required
                    placeholder={"000.000.000-00"}
                />
                </Input_nolocus>
                
                <SignUpButton onClick={() => goToProfile(history)}
            type={"submit"}
            fullWidth
            variant={"text"}>
                    Salvar
                </SignUpButton>
                
            </form>
        </InputsContainer>
    );
}



export default EditProfileForm;