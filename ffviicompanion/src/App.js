import React from 'react';
import Menu from './Components/MainMenu';
import "./App.css";
import Viewer from './Components/Viewer';

function App() {
  return (
    <div className="app grid-container">
      <Viewer/>
      <Menu/>
    </div>
  );
}

export default App;
