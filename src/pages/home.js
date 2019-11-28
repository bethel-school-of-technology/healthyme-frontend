

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/Image from iOS.jpg';

export default class HomePage extends Component {

    render() {
        return (
            <div>
                <h1>Welcome to HealthyMeWe!</h1>

                <h1>Where your Health and our Health are One!</h1>
                <br></br>

                <div id='logo'>
                    <img src={logo} />
                </div>

                <h2>Follow the Steps Below to Get Started</h2>
                <br></br>

                <h3>Step 1: Create your user profile here: <Link to="/createUser" className="nav-link">Create User</Link></h3>
                <br></br>

                <h3>Step 2: Login to your account here: <Link to="/login" className="nav-link">Login</Link></h3>
                <br></br>

                <h3>Step 3: Do your exercises and enter them here: <Link to="/exerciseEntry" className="nav-link">Exercise Entry</Link></h3>
            </div>

        )
    }
}

