import React from 'react';
import './App.css';
import Form from './components/Form.js';
import EventsList from './components/EventsList.js';

const App = () => {

  return (
    <div className="app">
      <header className="app__header">
        <h1>Events</h1>
      </header>
      <main className="app__main">
        <Form />
        <EventsList/>
      </main>
    </div>
  );
}

export default App;
