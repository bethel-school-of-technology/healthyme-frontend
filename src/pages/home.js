

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class HomePage extends Component {

    render() {
        return (
            <div>
                <h1>Welcome to HealthyMeWe!</h1>
                <h2>Follow the steps below to get started</h2>
                <h3>Step 1: Create your user profile here <Link to="/user" className="nav-link">Create User</Link> </h3>
                <br></br>
                <h3>Step 2: Log into your account </h3>
            </div>
        )
    }    
}   

