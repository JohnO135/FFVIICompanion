import React from 'react';
import Menu from './Components/MainMenu';
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TitlePage from './Components/TitlePage';
import Beastiary from './Components/Beastiary';
import TownGuide from './Components/TownGuide';
import Materia from './Components/Materia';

function App() {
  return (
    <Router>
      <div className="app grid-container">
          <Routes>
            <Route path="/" element={<TitlePage/>}/>
            <Route path="/Beastiary" element={<Beastiary/>}/>
            <Route path="/TownGuide" element={<TownGuide/>}/>
            <Route path="/Materia" element={<Materia/>}/>
          </Routes>
        <Menu/>
      </div>
    </Router>
    
  );
}

export default App;
