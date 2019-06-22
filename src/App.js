import React, { useState } from 'react';
import './App.css';
import Form from './components/Form.js';
import EventsList from './components/EventsList.js';

const App = () => {
  const [events, setEvents ] = useState([]);

  const addEvent = (event) => {
    const newEvents = [...events, { event}];
    setEvents(newEvents);
  }

  return (
    <div className="app">
      <header className="app__header">
        <h1>Events</h1>
      </header>
      <main className="app__main">
        <Form addEvent={addEvent}/>
        <EventsList events ={events}/>
      </main>
    </div>
  );
}

export default App;
