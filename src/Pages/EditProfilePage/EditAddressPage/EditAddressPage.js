import React from "react"
import EditAddressForm from "./EditAddressForm";
import { CadastroDeEndereco, Title, Text, Header, BackButton} from "./styled";
import { useHistory } from 'react-router-dom';
import useProtectedPage from '../../../Hooks/useProtectedPage.js';
import back from "../../../Assets/assets_Sign Up/back.png";
import { goToProfile } from "../../../Routes/coordinator";


const EditAddressPage = () => {
    useProtectedPage();
    const history = useHistory();
    

    return (
        <CadastroDeEndereco >
            <Header>
                <BackButton src={back} onClick={() => goToProfile(history)} />
                <Title>
                <Text>Endereço</Text>
                </Title>
            </Header>
                
            <EditAddressForm/>
        </CadastroDeEndereco>
    );
}
export default EditAddressPage;