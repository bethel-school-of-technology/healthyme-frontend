

import React, { Component } from "react";
import { Link } from "react-router-dom";

import Stopwatch from "../components/stopwatch-component";
import Countdown from "../components/countdown-component";

export default class Tools extends Component {
  render() {
    return (
      <div className="Tools">
        <div className="">Exercise Tools</div>
        <div className="Timers">
          <Stopwatch />
          <Countdown />
        </div>
      </div>
    );
  }
}

