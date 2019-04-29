import React from 'react';

import { Router } from "@reach/router"
import Movies from './routes/Movies'
import Series from './routes/Series'

import Navigation from './components/Navigation'

function App() {
  return (
    <div className="App">
      <Navigation />
      <Router>
        <Movies path="/" />
        <Series path="dashboard" />
      </Router>
    </div>
  );
}

export default App;
