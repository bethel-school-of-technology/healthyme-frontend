

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./pages/navbar";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import CreateUser from "./pages/createUser";
import Login from "./pages/login";
import ExerciseEntry from "./pages/exerciseEntry";
import ExerciseLog from "./pages/exerciseLog";
import EditExercise from "./pages/editExercise";
import ExerciseTools from "./pages/tools"

function App() {
  return (
    <Router>
      <div className="container">
        <NavBar />
        <br />
        <Route path="/home" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/createUser" component={CreateUser} />
        <Route path="/login" component={Login} />
        <Route path="/exerciseEntry" component={ExerciseEntry} />
        <Route path="/exerciseLog" component={ExerciseLog} />
        <Route path="/edit/:id" component={EditExercise} />
        <Route path="/exerciseTools" component={ExerciseTools} />
      </div>
    </Router>
  );
}

export default App;

