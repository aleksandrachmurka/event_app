import React from 'react';
import Event from './Event';

const EventsList = ({events}) => {

    return (
        <div>
            {events.map( event => ( 
                <Event event = {event} />
            ))}
        </div>
    )
}

export default EventsList;