import React, { useEffect, useState } from "react";
import axios from "axios";
import useForm from "../../../Hooks/useForm"
import TextField  from "@material-ui/core/TextField";
import { Input_nolocus, SignUpButton, InputsContainer} from "./styled";
import { useHistory}  from 'react-router-dom';
import {createAddress} from "../../../Services/addressRequest"
import useProtectedPage from "../../../Hooks/useProtectedPage";
import { goToProfile } from "../../../Routes/coordinator";
import { Avatar } from "@material-ui/core";



const EditAddressForm = () => {
    useProtectedPage();
    const [profile, setProfile] = useState({});
    const [address, setAddress] = useState({});
    const[form,onChange,clearFields] = useForm({street: "" , number:[], neighbourhood:"", city:"", state:"", complement:""})
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

    const getAddress = () => {
        axios
            .get(
            `https://us-central1-missao-newton.cloudfunctions.net/rappi4A/profile/address`,
            {
                headers: {
                    auth: window.localStorage.getItem("token"),
                },
            })
            .then((res) => {
            setProfile(res.data.address);
            
            })
            .catch((err) => {
                console.log(err);
            });
    };

    

    useEffect(() => {
        getProfile();
        getAddress();
    }, []);



    const onSubmitForm = (event) => {
        createAddress(form, clearFields, history, profile)
    
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
                        label={profile && profile.street}
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
                        label={profile && profile.number}
                        variant={"outlined"}
                        placeholder={"Número"}
                        fullWidth   
                        required  
                    /> 
                </Input_nolocus>
                <Input_nolocus>
                    <TextField
                        name={"complement"}
                        value={form.complement}
                        onChange={onChange}
                        label={profile && profile.complement}
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
                        label={profile && profile.neighbourhood}
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
                        label={profile && profile.city}
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
                        label={profile && profile.state}
                        variant={"outlined"}
                        placeholder={"Estado"}
                        fullWidth
                        required
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



export default EditAddressForm;