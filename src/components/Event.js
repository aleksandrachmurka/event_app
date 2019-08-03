import React from 'react';
import { useActions } from '../customHooks';

const Event = ({ ...props }) => {
    const event = props.event;
    const { removeEvent } = useActions();
    return (
        <div>
            <h3>{event.title}</h3>
            <p>{event.category}</p>
            <address>{`Will be held in ${event.location}`}</address>
            <time>{`Will be held at ${event.date} ${event.time} `}</time>
            <p>{`Organizer: ${event.organizer}`}</p>
            <p>{event.description}</p>
            <button onClick={()=> removeEvent(event.key)}>Remove event</button>
        </div>
    )
}

export default Event;