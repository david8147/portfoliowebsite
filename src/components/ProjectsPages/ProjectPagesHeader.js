import React, {Component} from 'react';
import githubImage from "../../images/github.png";
import {Link} from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import "./ProjectPagesHeader.css"

class ProjectPagesHeader extends Component{
    render(){
        return(
            <div className="NavigationBar">

                <Fade left>
                    <Link to={"/"} className="Link">
                        <div className="Name Pad">David Woo</div>
                    </Link>

                    <a href={"https://github.com/cedricholz"} target="_blank" rel="noopener noreferrer">
                        <img alt="" src={githubImage} className="NavigationButtons Pad"/>
                    </a>
                    <a href={"https://docs.google.com/document/d/1ZAldDQejehmZ9KgPlc3DmpAhL6iX4H7Kc9O6YGz6Uas/edit?usp=sharing"}
                       target="_blank" rel="noopener noreferrer">
                        <div className="Resume Pad">[Resume]</div>
                    </a>
                    <p> david8147@berkeley.edu </p>
                </Fade>
            </div>


        )
    }
}
export default ProjectPagesHeader
