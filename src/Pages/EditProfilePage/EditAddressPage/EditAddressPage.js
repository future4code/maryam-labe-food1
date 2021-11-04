import React from 'react';
import useProtectedPage from '../../../Hooks/useProtectedPage';


const EditAddressPage = () => {
    useProtectedPage();

    return (
        <div>
            EditAddressPage
        </div>
    )
}

export default EditAddressPage;