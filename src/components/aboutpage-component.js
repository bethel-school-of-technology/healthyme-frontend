

import React, { Component } from 'react';
import axios from 'axios';

export default class AboutPage extends Component {

    render() {
        return (
            <div className="statements">
                <h3>Our Story</h3>
                <p>
                HealthyMeWe was created by Jordan Page, Jason Walker, Chris Jeffers, and Ian Ditsch, otherwise known as the Fantastic4Developers. It was created in October 2019 and continues to be built out to increase it’s features and presentation. HealthyMeWe is just that, the individual and the group, working together to create health. The fundamental principle it runs on is that your own personal health is inseparably connected to community health. 
                <br></br>
                 Here the Fantastic4Developers invent and innovate to advance society in ways that make a rippling effect and impact that lasts and continues to grow. It takes all of you to make all of us, the many from the one, synergized and collectively walking out life and health as one unit. 
                </p>
                <br></br>
                <h3>Vision</h3>
                <p>
                To bring people together in community to optimize personal health according to God’s design 
                </p>
                <br></br>
                <h3>Mission</h3>
                <p>
                To create mobile application tools that enable and empower individuals to better their whole health: spirit, soul, and body, in a group setting 
                </p>
                <h3>Values</h3>
                <p>
                We believe in mutual respect and honor of all people at all times, having an atmosphere of positivity and encouragement recognizing the power of words, and raising the bar over time by increasing, growing, and moving forward. 
                <br></br>
                These three tenets are the foundation of HealthyMeWe: Respect, Positivity, and Growth
                </p>

                {/* Do I need to make these images uploaded to a website or web App to make them a URL link? */}
                <div id='teamPhotos'>
                    <img src='C:\Users\IanDi\Pictures\Image_Profile-JGP'/>
                    <img src='C:\Users\IanDi\Pictures\Image_Profile-Jason Walker'/>
                    <img src='C:\Users\IanDi\Pictures\Image_Profile-Chris Jeffers'/>
                    <img src='C:\Users\IanDi\Pictures\Profile Photo Headshot Blk Wht-Ian.jpg'/>
                </div>

            </div>
        )
    }
}

