import React, { useEffect, useState } from "react";
import axios from "axios";
import useForm from "../../../Hooks/useForm"
import TextField  from "@material-ui/core/TextField";
import { Input_nolocus, SignUpButton, InputsContainer} from "./styled";
import { useHistory}  from 'react-router-dom';
import {createAddress} from "../../../Services/addressRequest"
import useProtectedPage from "../../../Hooks/useProtectedPage";
import { goToProfile } from "../../../Routes/coordinator";



const EditProfileForm = () => {
    useProtectedPage();
    const [profile, setProfile] = useState({});
    const[form,onChange,clearFields] = useForm({name:"", email:"", cpf:""})
    const history = useHistory();


    const getProfile = () => {
        axios
            .get(
            `https://us-central1-missao-newton.cloudfunctions.net/rappi4A/profile`,
            {
                headers: {
                    auth: window.localStorage.getItem("token"),
                },
            })
            .then((res) => {
            setProfile(res.data.user);
            })
            .catch((err) => {
                console.log(err);
            });
        };


    useEffect(() => {
        getProfile();
    }, []);


    const onSubmitForm = (event) => {
        createAddress(form, clearFields, history, profile)
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
                        label={profile && profile.name} 
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
                        label={profile && profile.email}  
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
                    label={profile && profile.cpf}  
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