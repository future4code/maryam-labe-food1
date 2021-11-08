import React from "react"
import AddressForm from "./AddressForm";
import { CadastroDeEndereco, Title, Text, Header, BackButton} from "./styled";
import { useHistory } from 'react-router-dom';
import useProtectedPage from '../../Hooks/useProtectedPage.js';
import { goToLogin, goToSignUp} from '../../Routes/coordinator.js';
import back from "../../Assets/assets_Sign Up/back.png";


const AddressPage = () => {
    //useProtectedPage();
    const history = useHistory();
    

    return (
        <CadastroDeEndereco >
            <Header>
                <BackButton src={back} onClick={() => goToSignUp(history)} />
            </Header>
            <Title>
                <Text>Meu endereço</Text>
            </Title>    
            <AddressForm/>
        </CadastroDeEndereco>
    );
}

export default AddressPage;
