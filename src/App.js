import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import { AnimatePresence } from "framer-motion";

function App() {

  

  return (
    <div className="container">
      <Router>
        <Nav />
        <AnimatePresence exitBeforeEnter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </AnimatePresence>
      </Router>
    </div>
  );
}

export default App;
