import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css';
import Main from './components/Homepage/index';
import Second from './components/SecondPage/index';

function App() {
  return (
    <Router>
      <Route path="/" exact component={Main}/>
      <Route path="/second" exact component={Second}/>
    </Router>
  );
}

export default App;
