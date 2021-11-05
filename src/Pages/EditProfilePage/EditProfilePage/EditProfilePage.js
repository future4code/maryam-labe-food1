import React from "react"
import EditProfileForm from "./EditProfileForm";
import { CadastroDeEndereco, Title, Text, Header, BackButton} from "./styled";
import { useHistory } from 'react-router-dom';
import useProtectedPage from '../../../Hooks/useProtectedPage.js';
import back from "../../../Assets/assets_Sign Up/back.png";
import { goToProfile } from "../../../Routes/coordinator";



const EditProfilePage = () => {

    useProtectedPage();
    const history = useHistory();
    

    return (
        <CadastroDeEndereco >
            <Header>
                <BackButton src={back} onClick={() => goToProfile(history)} />
                <Title>
                <Text>Editar</Text>
                </Title>
            </Header>
                
            <EditProfileForm/>
        </CadastroDeEndereco>
    );
}

export default EditProfilePage;