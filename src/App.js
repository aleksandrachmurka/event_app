import React, { useState } from 'react';
import './App.css';
import EventsList from './components/EventsList';

const App = () => {
  const [events, setEvents ] = useState([]);

  return (
    <div className="app">
      <header className="app__header">
        <h1>Events</h1>
      </header>
      <main className="app__main">
        <Form />
        <EventsList />
      </main>
    </div>
  );
}

export default App;
