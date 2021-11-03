import React, { useState } from 'react';
import useForm from '../../Hooks/useForm';
import {  LoginButton, InputsContainer } from './styled';
import { TextField } from '@material-ui/core';
import { signUp } from '../../Services/user';
import { useHistory } from 'react-router-dom';

const SignUpForm = () => {
    const [form, onChange, clearFields] = useForm({name:"", email: "", cpf:"", password: ""});
    const history = useHistory()

    const [confirmedPassword, setConfirmedPassword] = useState("");

    const onSubmitForm = (event) => {
        event.preventDefault();
        signUp(form, clearFields, history);
    }

    return (
        <InputsContainer>
            <form onSubmit={onSubmitForm}>
            <TextField
                name={"name"}
                value={form.name}
                onChange={onChange}
                label={"Nome"} 
                variant={"outlined"}
                fullWidth
                margin={"normal"}
                type={"text"}
                required
                placeholder={"Nome e sobrenome"}
                />
            <TextField
                name={"email"}
                value={form.email}
                onChange={onChange}
                label={"E-mail"} 
                variant={"outlined"}
                fullWidth
                margin={"normal"}
                type={"email"}
                required
                placeholder={"email@email.com"}
            />
            <TextField
                name={"cpf"}
                value={form.cpf}
                onChange={onChange}
                label={"CPF"} 
                variant={"outlined"}
                fullWidth
                margin={"normal"}
                type={"text"}
                required
                placeholder={"000.000.000-00"}
            />
            <TextField
                name={"password"}
                value={form.password}
                onChange={onChange}
                label={"Senha"}
                variant={"outlined"} 
                fullWidth
                margin={"normal"}
                type={"password"}
                required
                placeholder={"Mínimo de 6 caracteres"}
            />
            <TextField
                name={"ConfirmedPassword"}
                // value={confirmedPassword}
                // onChange={setConfirmedPassword}
                label={"Confirmar"}
                variant={"outlined"} 
                fullWidth
                margin={"normal"}
                type={"text"}
                required
                placeholder={"Confirme a senha anterior"}
            />
            <button>
                Entrar
            </button>
            </form>
        </InputsContainer>
    )
}

export default SignUpForm;