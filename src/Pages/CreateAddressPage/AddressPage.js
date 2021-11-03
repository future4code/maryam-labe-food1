import React from "react"
import AddressForm from "./AddressForm";
import { CadastroDeEndereco, Title, Text, Header, BackButton} from "./styled";
import { useHistory } from 'react-router-dom';
import useUnprotectedPage from '../../Hooks/useUnprotectedPage.js';
import { goToLogin} from '../../Routes/coordinator.js';
import back from "../../Assets/assets_Sign Up/back.png";


const AddressPage = () => {
    // useUnprotectedPage();
    const history = useHistory();
    

    return (
        <CadastroDeEndereco >
            <Header>
                <BackButton src={back} onClick={() => goToLogin(history)} />
            </Header>
            <Title>
                <Text>Meu endereço</Text>
            </Title>    
            <AddressForm/>
        </CadastroDeEndereco>
    );
}

export default AddressPage;
