import { useState } from 'react';

const useForm = (callback) => {
    const [inputs, setInputs] = useState([]);

    const handleSubmit = e => {
        //clear inputs
        if(e) {
            e.preventDefault();
        }
        callback();
        setInputs(inputs => inputs = {})
        console.log(inputs)
    }

    const handleInput = e => {
        e.persist();
        setInputs(inputs => ({...inputs, [e.target.name]: e.target.value}))
    }

    return { 
        handleSubmit,
        handleInput,
        inputs
    }
}

export default useForm;