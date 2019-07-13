import React from 'react';

const Event = ({ ...props }) => {
    const event = props.event;
    return (
        <div>
            <h3>{event.title}</h3>
            <p>{event.category}</p>
            <address>{event.location}</address>
            <time>{`${event.date} ${event.time} `}</time>
            <p>{event.organizer}</p>
            <p>{event.description}</p>
            <button onClick={props.removeEvent}>Remove event</button>
        </div>
    )
}

export default Event;