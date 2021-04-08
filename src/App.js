import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

//Routing pages import
import Home from "./components/Home";
import Update from "./components/Update";
import Show from "./components/Show"


//style sheet import
import "./App.css";

function App() {
  return (
    <Router>
      <div className = "App">
        <Route exact path="/" component={Home} />
        <Route exact path="/update" component={Update} />
        <Route exact path="/show" component={Show} /> 
      </div>
    </Router>
  );
}

export default App;


