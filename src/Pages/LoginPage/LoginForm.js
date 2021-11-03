import React, { useState } from 'react';
import useForm from '../../Hooks/useForm';
import {  LoginButton, InputsContainer } from './styled';
import { TextField } from '@material-ui/core';
import { login } from "../../Services/user";
import { useHistory } from 'react-router-dom';
import { InputAdornment } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import { Visibility } from '@material-ui/icons';
import { VisibilityOff } from '@material-ui/icons';
import { OutlinedInput } from '@material-ui/core';
import { InputLabel } from '@material-ui/core';
import { FormControl } from '@material-ui/core';

const LoginForm = () => {
    const [form, onChange, clearFields] = useForm({email: "", password: ""});
    const history = useHistory();

    const [values, setValues] = useState(false);

    const handleClickShowPassword = () => {
        setValues(!values);
    }

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

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
                <FormControl
                required
                name={"password"}
                variant={"outlined"} 
                fullWidth
                margin={"normal"}
                value={form.password}
                onChange={onChange}>
                <InputLabel htmlFor="outlined-adornment-password">
                Senha
                </InputLabel>
                <OutlinedInput
                    id="outlined-adornment-password"
                    type={values ? 'text' : 'password'}
                    placeholder={"Mínimo 6 caracteres"}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                            >
                            {values ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                label={"Password"}
                />
            </FormControl>
                <LoginButton>
                    Entrar
                </LoginButton>
            </form>
        </InputsContainer>
    )
}

export default LoginForm;