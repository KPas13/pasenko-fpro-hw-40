import logo from './logo.svg';
import './App.css';
import React from "react";
import ReactDOM from 'react-dom';

import SmileElection from "./Components/SmilesElection/SmileElection";
import SmileList from "./Components/SmilesList/SmileList";

function App() {
  return (
      <div>
        <SmileList />
      </div>
  );
}

export default App;
