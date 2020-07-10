import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import AOS from 'aos';
import 'aos/dist/aos.css'

import './App.css';
import Homepage from './pages/Homepage/index';
import About from './pages/About/index';
import Contact from './pages/Contact/index';
import Portfolio from './pages/Portfolio/index';
import Project from './pages/Project/index';

const client = new ApolloClient({
  uri: "http://84.201.139.254:1337/graphql"
});

function App() {
 
  AOS.init({duration: 1000})
  
  return (
    <ApolloProvider client={client}>
      <Router>
        <Route path="/" exact component={Homepage}/>
        <Route path="/about" exact component={About}/>
        <Route path="/contact" exact component={Contact}/>
        <Route path="/portfolio" exact component={Portfolio}/>
        <Route path="/project/:name" exact component={Project}/>
      </Router>
    </ApolloProvider>
  );
}

export default App;