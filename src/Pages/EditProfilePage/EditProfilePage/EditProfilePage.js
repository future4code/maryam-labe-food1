import React from "react"
import EditProfileForm from "./EditProfileForm";
import { CadastroDeEndereco, Title, Text, Header, BackButton} from "./styled";
import { useHistory } from 'react-router-dom';
import useProtectedPage from '../../../Hooks/useProtectedPage.js';
import back from "../../../Assets/assets_Sign Up/back.png";
import { goToProfile } from "../../../Routes/coordinator";
// import React, { Profiler, useEffect, useState } from "react";
// import { useHistory } from "react-router-dom";
// import axios from "axios";
// import edit from "../../Assets/assets_MyProfilePage/edit.svg";
// import useProtectedPage from "../../Hooks/useProtectedPage";
// import Footer from "../../Components/Footer/Footer";


const EditProfilePage = () => {

//     useProtectedPage();
//     const history = useHistory();
//     const [profile, setProfile] = useState({});
    

//     const getProfile = () => {
//     axios
//         .get(
//         `https://us-central1-missao-newton.cloudfunctions.net/rappi4A/profile`,
//         {
//             headers: {
//                 auth: window.localStorage.getItem("token"),
//             },
//         })
//         .then((res) => {
//         setProfile(res.data.user);
//         })
//         .catch((err) => {
//             console.log(err);
//         });
//     };

//     const getAddress = () => {
//         axios
//             .get(
//             `https://us-central1-missao-newton.cloudfunctions.net/rappi4A/profile/address`,
//             {
//                 headers: {
//                     auth: window.localStorage.getItem("token"),
//                 },
//             })
//             .then((res) => {
//             setProfile(res.data.user);
//             })
//             .catch((err) => {
//                 console.log(err);
//             });
//     };

    

//     useEffect(() => {
//         getProfile();
//         getAddress();
//     }, []);
        
    

    

//     return (
//         <MainContainer>
            
//             <ContainerProfile>
//                 <div>
//                     <TextP>{profile && profile.name}</TextP>
//                     <TextP>{profile && profile.email}</TextP>
//                     <TextP>{profile && profile.cpf}</TextP>
//                 </div>
               
//             </ContainerProfile>
//             <ContainerAdress>
//                 <div>
//             <TextAdressTitle>Endereço cadastrado</TextAdressTitle>
//             <TextP>{profile && profile.address && Profiler.street}</TextP>
//                 </div>
                
//             </ContainerAdress>
//         </MainContainer>

//     );
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