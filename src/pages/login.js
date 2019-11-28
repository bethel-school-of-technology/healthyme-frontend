

import React, { Component } from 'react';
import axios from 'axios';
import RenderToLayer from 'material-ui/internal/RenderToLayer';


export default class login extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <h2>Please Login to Continue your Health Process</h2>
                <br></br>

                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Username:</label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state}
                            onChange={this.onChange}
                        />
                    </div>
                    <br></br>

                    <div>
                        <label>Password:</label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state}
                            onChange={this.onChange}
                        />
                    </div>
                    <br></br>

                    <div>
                        <input type="submit" value="Enter" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}

