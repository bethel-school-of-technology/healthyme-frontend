

import React, { Component } from 'react';
import axios from 'axios';

import teamPhotoJGP from '../images/teamPhotoJGP.jpg';
import teamPhotoJWalker from '../images/teamPhotoJWalker.jpg';
import teamPhotoCJ from '../images/teamPhotoCJ.jpg';
import teamPhotoIan from '../images/teamPhotoIan.jpg';

export default class AboutPage extends Component {

    render() {
        return (
            <div className="statements">
                <h3>Our Story</h3>
                <p>
                    HealthyMeWe was created by Jordan Page, Jason Walker, Chris Jeffers, and Ian Ditsch, otherwise known as the Fantastic4Developers. It was created in October 2019 and continues to be built out to increase it’s features and presentation. HealthyMeWe is just that, the individual and the group, working together to create health. The fundamental principle it runs on is that your own personal health is inseparably connected to community health.
                <br></br>
                    <br></br>

                    Here the Fantastic4Developers invent and innovate to advance society in ways that make a rippling effect and impact that lasts and continues to grow. It takes all of you to make all of us, the many from the one, synergized and collectively walking out life and health as one unit.
                </p>
                <br></br>

                <h3>Vision</h3>
                <p>
                    To bring people together in community to optimize personal health according to God’s design.
                </p>
                <br></br>

                <h3>Mission</h3>
                <p>
                    To create mobile application tools that enable and empower individuals to better their whole health: spirit, soul, and body, in a group setting.
                </p>
                <br></br>

                <h3>Values</h3>
                <p>
                    We believe in mutual respect and honor of all people at all times, having an atmosphere of positivity and encouragement recognizing the power of words, and raising the bar over time by increasing, growing, and moving forward.
                <br></br>
                    <br></br>

                    These three tenets are the foundation of HealthyMeWe: Respect, Positivity, and Growth.
                </p>
                <br></br>

                <div id='teamPhotos'>
                    <img src={teamPhotoJGP} width='300' height='300' />
                    <h3>Jordan Page</h3>
                    <br></br>

                    <img src={teamPhotoJWalker} width='300' height='300' />
                    <h3>Jason Walker</h3>
                    <br></br>

                    <img src={teamPhotoCJ} width='300' height='300' />
                    <h3>Chris Jeffers</h3>
                    <br></br>

                    <img src={teamPhotoIan} width='300' height='300' />
                    <h3>Ian Ditsch</h3>
                </div>
                <br></br>
                <br></br>

            </div>
        )
    }
}

