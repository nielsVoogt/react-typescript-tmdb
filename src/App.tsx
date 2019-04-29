import React from 'react';

import { Router } from "@reach/router"
import Home from './routes/Home'
import Dash from './routes/Dash'

import Navigation from './components/Navigation'

function App() {
  return (
    <div className="App">
      <Navigation />
      <Router>
        <Home path="/" />
        <Dash path="dashboard" />
      </Router>
    </div>
  );
}

export default App;
