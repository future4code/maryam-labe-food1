import React, { useState } from 'react';
import useForm from '../../Hooks/useForm';
import { InputsContainer, SignUpButton } from './styled';
import { FormHelperText, TextField } from '@material-ui/core';
import { signUp } from '../../Services/user';
import { useHistory } from 'react-router-dom';
import { InputAdornment } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import { Visibility } from '@material-ui/icons';
import { VisibilityOff } from '@material-ui/icons';
import { OutlinedInput } from '@material-ui/core';
import { InputLabel } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import {goToCreateAddress} from "../../Routes/coordinator"

const SignUpForm = () => {
    const [form, onChange, clearFields] = useForm({name:"", email: "", cpf:"", password: ""});
    const history = useHistory();

    const [values, setValues] = useState(false);
    const [correctPassword, setCorrectPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [inputError, setInputError] = useState(false);

    const handleClickShowPassword = () => {
        setValues(!values);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
   
    const [helperText, setHelperText] = useState("");

    const onSubmitForm = (event) => {
        event.preventDefault();
        if(correctPassword == confirmPassword) {
            form.password = correctPassword;
            signUp(form, clearFields, history);
        } else {
            setHelperText("Deve ser a mesma que a anterior.");
            setInputError(true);
        };
    };

    const maskedCPF = (cpf) => {
        let maskedValue = cpf.replace(/\D/g, '').replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d{1,2})/, '$1-$2').replace(/(-\d{2})\d+?$/, '$1')
        return maskedValue;
    };

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
                    onChange={(event)=> onChange(event, maskedCPF)}
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
                    variant={"outlined"} 
                    fullWidth
                    margin={"normal"}
                >
                <InputLabel htmlFor="outlined-adornment-password">
                    Senha
                </InputLabel>
                <OutlinedInput
                    name={"password"}
                    value={correctPassword}
                    onChange={(event) => setCorrectPassword(event.target.value)}
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
            <FormControl
                error={inputError}
                required
                variant={"outlined"} 
                fullWidth
                margin={"normal"}
            >
                <InputLabel htmlFor="outlined-adornment-password">
                    Confirmar
                </InputLabel>
                <OutlinedInput
                    name={"confirmPassword"}
                    value={confirmPassword}
                    onChange={(event) => setConfirmPassword(event.target.value)}
                    id="outlined-adornment-password"
                    type={values ? 'text' : 'password'}
                    placeholder={"Confirme a senha anterior"}
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
                label={"Password"}/>
                <FormHelperText>{helperText}</FormHelperText>
            </FormControl>
            <SignUpButton onClick={() => goToCreateAddress(history)}
            type={"submit"}
            fullWidth
            variant={"text"}>
                Criar
            </SignUpButton>
            </form>
        </InputsContainer>
    )
}

export default SignUpForm;