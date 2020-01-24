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
                    <Link  style={{textDecoration: 'inherit'}} to={"/"} className="Link">
                        <div className="Name Pad"><p style={{marginLeft:30}}>David Woo</p></div>
                    </Link>

                    <a href={"https://github.com/cedricholz"} target="_blank" rel="noopener noreferrer">
                        <img alt="" src={githubImage} className="NavigationButtons Pad"/>
                    </a>
                    <a
                        style={{textDecoration: 'inherit'}}
                        href={"https://docs.google.com/document/d/1ZAldDQejehmZ9KgPlc3DmpAhL6iX4H7Kc9O6YGz6Uas/edit?usp=sharing"}
                       target="_blank" rel="noopener noreferrer">
                        <div className="Resume Pad">[Resume]</div>
                    </a>
                    <p  style={{color: 'white'}}> david8147@berkeley.edu </p>
                </Fade>
            </div>


        )
    }
}
export default ProjectPagesHeader
