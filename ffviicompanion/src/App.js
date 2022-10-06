import React from 'react';
import Menu from './Components/MainMenu';
import "./App.css";
import Viewer from './Components/Viewer';
import VerticalMenu from './Components/VerticalMenu';

function App() {
  return (
    <div className="app grid-container">
      <Viewer/>
      <VerticalMenu/>
      <Menu/>
    </div>
  );
}

export default App;
