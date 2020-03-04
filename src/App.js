import React from 'react';
import './App.css';
import HomePage from './components/HomePage/HomePage';
import Wilders from './components/Wilders/Wilders';
import Ambiance from './components/Ambiance/Ambiance';

function App() {
  return (
    <div className="App">
      <HomePage />
      <Wilders />
      <Ambiance />
    </div>
  );
}

export default App;
