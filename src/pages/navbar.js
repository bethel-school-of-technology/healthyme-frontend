

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">

                <h2 className="navbar-brand">HealthyMeWe</h2>

                <div className="collapse navbar-collapse">

                    <ul className="navbar-nav mr-auto">

                        <li className="navbar-item">
                            <Link to="/home" className="nav-link">Home</Link>
                        </li>

                        <li className="navbar-item">
                            <Link to="/about" className="nav-link">About</Link>
                        </li>

                        <li className="navbar-item">
                            <Link to="/createUser" className="nav-link">Create User</Link>
                        </li>

                        <li className="navbar-item">
                            <Link to="/login" className="nav-link">Login</Link>
                        </li>

                        <li className="navbar-item">
                            <Link to="/exerciseEntry" className="nav-link">Exercise Entry</Link>
                        </li>

                        <li className="navbar-item">
                            <Link to="/exerciseLog" className="nav-link">Exercise Log</Link>
                        </li>

                        <li className="navbar-item">
                            <Link to="/exerciseTools" className="nav-link">Exercise Tools</Link>
                        </li>

                    </ul>
                </div>

            </nav>
        );
    }
}