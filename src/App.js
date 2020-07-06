import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';

import './App.css';
import Homepage from './pages/Homepage/index';
import About from './pages/About/index';
import Contact from './pages/Contact/index';
import Portfolio from './pages/Portfolio/index';

const client = new ApolloClient({
  uri: "http://84.201.139.254:1337/graphql"
});



function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Route path="/" exact component={Homepage}/>
        <Route path="/about" exact component={About}/>
        <Route path="/contact" exact component={Contact}/>
        <Route path="/portfolio" exact component={Portfolio}/>
      </Router>
    </ApolloProvider>
  );
}

export default App;