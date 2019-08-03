import React from 'react';
import { useActions } from '../customHooks';

const Event = ({ ...props }) => {
    const event = props.event;
    const { removeEvent } = useActions();
    return (
        <div>
            <h3>{event.title}</h3>
            <p>{event.category}</p>
            <address>{event.location}</address>
            <time>{`${event.date} ${event.time} `}</time>
            <p>{event.organizer}</p>
            <p>{event.description}</p>
            <button onClick={()=> removeEvent(event.key)}>Remove event</button>
        </div>
    )
}

export default Event;