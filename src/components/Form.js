import React, { useState} from 'react';
import useForm from '../customHooks';

const Form = ({ addEvent }) => {
    // <p>{event.category}</p>
    // <address>{event.location}</address>
    // <time datetime={event.date}></time>
    // <p>{event.description}</p>

    const [events, setEvents] = useState([]);

    const { handleSubmit, handleInput, inputs } = useForm(addEvent);

    function addEvent() {
        const event = {...inputs};
        setEvents([...events, event]);
        console.log(event);

    }
 


    // const handleSubmit = e => {
    //     createEvent()
    //     if (!event) return;
    //     addEvent(event);
    //     setEvent('');
    //     e.preventDefault();
    // }

    
    return (
        <form onSubmit={handleSubmit}>
            <label>Event Title</label>
            <input type="text" name="eventTitle"
            placeholder="Add event title" 
            value={inputs.eventTitle} 
            onChange={handleInput}
            required
            />

            <label>Event Organizer</label>
            <input type="text" name="eventOrganizer"
            placeholder="Add events organizer" 
            value={inputs.eventOrganizer} 
            onChange={handleInput}
            required
            />

            <button type="submit"> Add Event </button>
        </form>
    )
}

export default Form;