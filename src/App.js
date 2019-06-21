import React from 'react';
import './App.css';
import EventsList from './components/EventsList'

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <h1>Events</h1>
      </header>
      <main className="app__main">
        <EventsList />
      </main>
    </div>
  );
}

export default App;
