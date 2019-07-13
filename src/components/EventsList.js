import React, { useState } from 'react';
import Event from './Event';

const EventsList = ({events}) => {
    // const [filteredEvents, setFilteredEvents] = useState(events);

    // const filterEvents = e => {
    //     const query = e.currentTarget.value;
    //     const filteredEvents = events.filter(event => event.title.includes(query) || event.description.includes(query));
    //     setFilteredEvents(filteredEvents);
    // }


    return (
        <div>
            {events.map( event => ( 
                <Event event={event} />
            ))}
        </div>
    )
}

export default EventsList;