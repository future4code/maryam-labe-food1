import { useState } from "react";

const useForm = (initialState) => {
    const [form, setForm] = useState(initialState);

    const onChangeInput = (event, mask) => {
        const {name, value} = event.target;
        if (mask) {
            const maskedValue = mask(value)
            setForm({...form, [name]: maskedValue});
        } else {
            setForm({...form, [name]: value});
        }
    };

    const cleanFields = () => {
        setForm(initialState);
    };

    return [form, onChangeInput, cleanFields]
};

export default useForm;