import React, { useState } from 'react';

const Form = ({ addEvent }) => {
    const [value, setValue] = useState('');

    const handleSubmit = e => {
        if (!value) return;
        addEvent(value);
        setValue('');
        e.preventDefault();
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input type="textarea" 
            placeholder="Add event description" 
            value={value} 
            onChange={e=> setValue(e.target.value)}
            />
            <button type="submit"> Add Event </button>
        </form>
    )
}

export default Form;