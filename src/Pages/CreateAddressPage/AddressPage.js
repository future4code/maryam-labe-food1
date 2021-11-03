import React from "react"
import AddressForm from "./AddressForm";
import { CadastroDeEndereco, Title, Text } from "./styled";





const AddressPage = () => {
    

    return (
        <CadastroDeEndereco >
            <Title>
                <Text>Meu endereço</Text>
            </Title>    
            <AddressForm/>
        </CadastroDeEndereco>
    );
}

export default AddressPage;
