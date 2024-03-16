import React from 'react';
import './App.css';
import Header from './Header';
import BowlerList from './Bowler/BowlerList';

function App() {
  return (
    <div className="App">
      <Header
        title="Bowler's League Information about Bowlers"
        subtitle="Brought to you by Bowlers Barbara and David and the rest of the Bowling League Bowling crew"
        hiddenmessage="From Bowlers. For Bowlers. By Bowlers."
      />
      <BowlerList />
    </div>
  );
}

export default App;
