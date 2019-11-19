

import React, { Component } from 'react';
import axios from 'axios';

// Need to add a require/validation and alert that the username must be at least three characters 


export default class CreateUser extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            name: '',
            email: '',
            password: '',
        }
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value,
        });
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value,
        });
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value,
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value,
        });
    }
 
    onSubmit(e) {
        e.preventDefault();

        const user = {
            username: this.state.username,
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
        }

        console.log(user);

        axios.put('http://localhost:5000/users/add', user)
        .then(res => console.log(res.data));

        window.location = '/createUser';

        this.setState({
            username: '',
            name: '',
            email: '',
            password: '',
          })
        }

    render() {
        return (
            <div>

                <h3>Create New User</h3>
                <br></br>

                <form onSubmit={this.onSubmit}>

                    <div className='form-group'>
                        <label>Username: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                            />
                        <br></br>

                        <label>Name: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.name}
                            onChange={this.onChangeName}
                            />
                        <br></br>

                        <label>Email: </label>
                        <input type="email"
                            required
                            className="form-control"
                            value={this.state.email}
                            onChange={this.onChangeEmail}
                            />
                        <br></br>

                        <label>Password: </label>
                        <input type="password"
                            required
                            className="form-control"
                            value={this.state.password}
                            onChange={this.onChangePassword}
                            />
                        <br></br>

                    </div>
                    <div className="form-group">
                        <input type="submit" value="Submit" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}