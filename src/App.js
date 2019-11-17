

import React from 'react';
import {BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./pages/navbar";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import CreateUser from "./pages/createUser";
import Login from "./pages/login";
import ExerciseEntry from "./pages/exerciseEntry";
import ExerciseLog from "./pages/exerciseLog";
import EditExercise from "./pages/editExercise";


function App() {
  return (
    <Router>
      <div className="container">
        <NavBar />
        <br/>
        <Route path="/home" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/user" component={CreateUser} />
        <Route path="/login" component={Login} />
        <Route path="/entry" component={ExerciseEntry} />
        <Route path="/log" exact component={ExerciseLog} />
        <Route path="/edit/:id" component={EditExercise} />
      </div> 
    </Router>
  );
}

export default App;

