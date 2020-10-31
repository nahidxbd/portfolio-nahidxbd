import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/Header/About/About';
import AllProjects from './components/AllProjects/AllProjects';
import Contact from './components/Contact/Contact';
import AllBlogs from './components/AllBlogs/AllBlogs';


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
           
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/projects">
            <AllProjects></AllProjects>
          </Route>
          <Route path="/blogs">
            <AllBlogs></AllBlogs>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
        </Switch>
      </Router>

      
    </div>
  );
}

export default App;
