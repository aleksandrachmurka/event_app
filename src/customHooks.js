import { useState, useContext } from 'react';
import { StoreContext } from './StoreContext.js';

export const useForm = (callback) => {
    const [inputs, setInputs] = useState([]);

    const handleSubmit = e => {
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


export const useActions = () => {
    const { dispatch } = useContext(StoreContext);
    
    function addEvent(newEvent) {
        dispatch({ type: 'ADD_EVENT', value: newEvent });
    }

    function removeEvent(eventKey) {
        dispatch({ type: 'REMOVE_EVENT', value: eventKey})
    }
    
    return {
      addEvent,
      removeEvent
    };
};