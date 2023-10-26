import logo from './logo.svg';
import './App.css';
import React from "react";
import ReactDOM from 'react-dom';

import Header from './Components/Header/Header'
import CentralBlock from './Components/CentralBlock/CentralBlock'
import LeftNavigation from './Components/LeftNavigation/LeftNavigation'

function App() {
  return (
      <div>
        <Header />
        <div className="App">
            <LeftNavigation />
          <CentralBlock />
        </div>
      </div>
  );
}

export default App;
