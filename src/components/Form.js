import React from 'react';
import { useForm, useActions } from '../customHooks';

const Form = ({ ...props }) => {
    // <address>{event.location}</address>
    // <time datetime={event.date}></time>

    const { handleSubmit, handleInput, inputs } = useForm(passEvent);
    const { addEvent } = useActions();

    function passEvent() {
        const newEvent = {...inputs};
        addEvent(newEvent);
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <label>What is Event title</label>
            <input type="text" name="title"
            placeholder="Add event title" 
            onChange={handleInput}
            required
            />

            <label>When will it take place?</label>
            <input type="date"  onChange={handleInput} name="date"/>
            <input type="time" onChange={handleInput} name="time" />

            <label>Add Event description</label>
            <textarea onChange={handleInput} name="description" type="text" rows="5" cols="10" maxlength="360" />

            <label>Event Organizer</label>
            <input type="text" name="organizer"
            placeholder="Add events organizer" 
            onChange={handleInput}
            required
            />

            <label>Choose Event category</label>
            <select onChange={handleInput} name="category" required>
                <option value="" disabled selected>Please select category</option>
                <option value="music">Music</option>
                <option value="theatre">Theatre</option>
                <option value="meeting">Meeting</option>
                <option value="exhibition">Exhibition</option>
            </select>

            <button type="submit"> Add Event </button>
        </form>
    )
}

export default Form;