import React, { Component } from 'react'
import './Intro.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Intro extends Component {
    render() {
        return (
            <div className="intro__section">
                <div className="name__section">
                <h1 className="name__header">Hi, I'm Jen{'  '}<FontAwesomeIcon icon='ellipsis-h'></FontAwesomeIcon></h1>
                <h4>Full Stack Developer</h4>
                </div>
                
                <div className="aboutme__section">
                <FontAwesomeIcon className="icon_left" transform="" transform="rotate-330 shrink-1 left-20 down-10" icon="less-than" size="6x"></FontAwesomeIcon>
                    <span className="aboutme">
                    I'm a recent graduate out of Atlanta, Georgia. 
                    I have a passion for the user experience and
                    interface. I love to write code that connects
                    the front to the back seamlessly.<br/><br />

                    When I'm not staring at my computer, you can find 
                    me drinking coffee, hanging out with my dogs, or doing the
                    Downward Facing Dog. 
                    </span>
                    
                
                    

                </div>
                <FontAwesomeIcon className="icon_right" icon="slash" size='6x' transform="shrink-3 left-5 up-2 rotate-25"></FontAwesomeIcon>
                <FontAwesomeIcon className="icon_right" icon="greater-than" transform="rotate-330 left-10 up-8 shrink-1" size="8x"></FontAwesomeIcon>
                
            </div>
        )
    }
}
