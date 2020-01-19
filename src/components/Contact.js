import React, {Component} from 'react';
import githubImage from '../images/github.png'

class Contact extends Component{
    render(){
        return(
            <div style={{display: 'flex', flexDirection:'column', alignItems:'center', justifyContents:'center', paddingBottom:50}}>
                <h1> Contact </h1>

                <div style={{display: 'flex', flexDirection:'row'}}>
                    <a  href={"https://github.com/david8147"}  target="_blank">
                        <img alt="" src={githubImage}
                             rel="noopener noreferrer"/>
                    </a>

                    <a
                        style={{textDecoration: 'none'}}
                        href={"https://docs.google.com/document/d/1ZAldDQejehmZ9KgPlc3DmpAhL6iX4H7Kc9O6YGz6Uas/edit?usp=sharing"}  target="_blank">
                        <div style={{color: 'white',cursor:'pointer', marginLeft:10}}>
                            [Resume]
                        </div>
                    </a>
                    <p> david8147@berkeley.edu </p>
                </div>
            </div>
        )
    }
}
export default Contact;
