import React from 'react';
import useForm from '../../Hooks/useForm';
import {  LoginButton, InputsContainer } from './styled';
import { TextField } from '@material-ui/core';
import { login } from "../../Services/user";
import { useHistory } from 'react-router-dom';

const LoginForm = () => {
    const [form, onChange, clearFields] = useForm({email: "", password: ""});
    const history = useHistory();

    const onSubmitForm = (event) => {
        event.preventDefault();
        login(form, clearFields, history);
    };

    return (
        <InputsContainer>
            <form onSubmit={onSubmitForm}>
                <TextField
                    required
                    name={"email"}
                    value={form.email}
                    onChange={onChange}
                    label={"E-mail"} 
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
                    type={"email"}
                    placeholder={"email@email.com"}
                />
                <TextField
                    required
                    name={"password"}
                    value={form.password}
                    onChange={onChange}
                    label={"Senha"}
                    variant={"outlined"} 
                    fullWidth
                    margin={"normal"}
                    type={"password"}
                    placeholder={"Mínimo de 6 caracteres"}
                />
                <LoginButton>
                    Entrar
                </LoginButton>
            </form>
        </InputsContainer>
    )
}

export default LoginForm;