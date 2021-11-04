import React from 'react';
import useProtectedPage from '../../../Hooks/useProtectedPage';


const EditProfilePage = () => {
    useProtectedPage();

    return (
        <div>
            EditProfilePage
        </div>
    )
}

export default EditProfilePage;