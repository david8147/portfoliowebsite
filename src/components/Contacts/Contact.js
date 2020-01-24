import React, {Component} from 'react';
import githubImage from '../../images/github.png'
import './Contact.css'
class Contact extends Component{
    render(){
        return(
            <div className='Main'>
                <div className='Wrapper'>
                    <a  className='Link' href={"https://github.com/david8147"}  target="_blank">
                        <img alt="" src={githubImage} rel="noopener noreferrer"/>
                    </a>
                    <a  className='ContactsText'
                        href={"https://docs.google.com/document/d/1ZAldDQejehmZ9KgPlc3DmpAhL6iX4H7Kc9O6YGz6Uas/edit?usp=sharing"}  target="_blank">
                        <div className='ResumeText'>
                            [Resume]
                        </div>
                    </a>
                    <p className='EmailText'> david8147@berkeley.edu </p>
                </div>
            </div>
        )
    }
}

export default Contact;
