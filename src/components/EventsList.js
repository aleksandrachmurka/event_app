import React, { useContext } from 'react';
import { StoreContext } from '../StoreContext.js';
import Event from './Event';

const EventsList = () => {
    // const [filteredEvents, setFilteredEvents] = useState(events);

    // const filterEvents = e => {
    //     const query = e.currentTarget.value;
    //     const filteredEvents = events.filter(event => event.title.includes(query) || event.description.includes(query));
    //     setFilteredEvents(filteredEvents);
    // }

    const { state } = useContext(StoreContext);


    return (
        <div>
            {state.events.map( event => ( 
                <Event event={event} />
            ))}
        </div>
    )
}

export default EventsList;