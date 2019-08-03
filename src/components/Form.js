import React, { useState } from 'react';
import { useForm, useActions } from '../customHooks';

const Form = ({ ...props }) => {
    // <address>{event.location}</address>
    //to do: clear input after submitting

    const { handleSubmit, handleInput, inputs } = useForm(passEvent);
    const { addEvent } = useActions();
    const [key, setKey] = useState(0)

    function passEvent() {
        const newEvent = {...inputs, key: key};
        addEvent(newEvent);
        setKey(key + 1);
    }
    
    return (
        <>
            <h2>Add event</h2>

            <form onSubmit={handleSubmit}>
                
                <label for="name">
                    What is Event title
                    <input type="text" name="title" id="name" placeholder="Add event title" onChange={handleInput}
                    required/>
                </label>
               
                <fieldset>
                    <legend>When will it take place?</legend>
                    <label for="date">
                        Date
                        <input type="date" name="date" id="date" onChange={handleInput}/>
                    </label>
                    <label for="time">
                        Time
                        <input type="time" name="time" id="time" onChange={handleInput}/>
                    </label>
                </fieldset>

                <label for="description">
                    Add Event description
                    <textarea type="text" rows="5" cols="10" maxLength="360" name="description" 
                    id="description" onChange={handleInput} />
                </label>

                <label for="organizer">
                    Event Organizer
                    <input type="text" placeholder="Add events organizer" name="organizer" 
                    id="organizer" onChange={handleInput} required />
                </label>

                <label for="category">
                    Choose Event category
                    <select onChange={handleInput} name="category" id="category" required>
                        <option value="" disabled selected>Please select category</option>
                        <option value="music">Music</option>
                        <option value="theatre">Theatre</option>
                        <option value="meeting">Meeting</option>
                        <option value="exhibition">Exhibition</option>
                    </select>
                </label>

                <button type="submit"> Add Event </button>
            </form>
        </>
    )
}

export default Form;