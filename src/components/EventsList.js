import React, { useContext, useState, useEffect } from 'react';
import { StoreContext } from '../StoreContext.js';
import Event from './Event';

const EventsList = () => {
    const { state } = useContext(StoreContext);
    const events = state.events;

    const [filteredEvents, setFilteredEvents] = useState(events);

    useEffect(() => {
        setFilteredEvents(events)
    }, [events])
 
    const filterEvents = e => {
        const query = e.currentTarget.value;  
        const result = filteredEvents.filter(event => event.title.includes(query) || event.description.includes(query));
        setFilteredEvents(result);
    }

    //to do: reset filter when input is empty
    
    return (
        <>
        <div>
            <input type="text" onChange={filterEvents}/>
        </div> 
        <div>
            {filteredEvents.map( event => ( 
                <Event event={event} key={event.key} />
            ))}
            {/* {state.events.map( event => ( 
                <Event event={event} key={event.key} />
            ))} */}
        </div>
        </>
    )
}

export default EventsList;