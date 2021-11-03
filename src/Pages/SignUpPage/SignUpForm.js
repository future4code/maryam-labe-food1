import React, { useState } from 'react';
import useForm from '../../Hooks/useForm';
import {  LoginButton, InputsContainer, PasswordInputContainer } from './styled';
import { TextField } from '@material-ui/core';
import { signUp } from '../../Services/user';
import { useHistory } from 'react-router-dom';
import passwordIconOpen from '../../Assets/assets_Sign Up/senha-2.png';
import passwordIconClosed from '../../Assets/assets_Sign Up/senha.png';
import { InputAdornment } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import { Visibility } from '@material-ui/icons';
import { VisibilityOff } from '@material-ui/icons';
import { OutlinedInput } from '@material-ui/core';
import { InputLabel } from '@material-ui/core';
import { FormControl } from '@material-ui/core';

const SignUpForm = () => {
    const [form, onChange, clearFields] = useForm({name:"", email: "", cpf:"", password: ""});
    const history = useHistory()

    const [values, setValues] = useState(false);

    const handleClickShowPassword = () => {
        setValues(!values);
    }

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

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
                <FormControl
                required
                name={"password"}
                variant={"outlined"} 
                fullWidth
                margin={"normal"}
                placeholder={"Mínimo 6 caracteres"}
                value={form.password}
                onChange={onChange}>
                <InputLabel htmlFor="outlined-adornment-password">
                Senha
                </InputLabel>
                <OutlinedInput
                    id="outlined-adornment-password"
                    type={values ? 'text' : 'password'}
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
            <button>
                Entrar
            </button>
            </form>
        </InputsContainer>
    )
}

export default SignUpForm;