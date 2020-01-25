import React, {Component} from 'react';
import githubImage from '../../images/github.png'
import './Contact.css'
class Contact extends Component{
    render(){
        return(
            <div className='ContactMain'>
                <div className='ContactWrapper'>
                    <a  className='ContactLink' href={"https://github.com/david8147"}  target="_blank">
                        <img alt="" src={githubImage} rel="noopener noreferrer"/>
                    </a>
                    <a  className='ContactsText'
                        href={"https://docs.google.com/document/d/1FVcUHJPHl_SDBYhYk1kCUCjaXZSdjYFH1u4QClnZf8U/edit?usp=sharing"}  target="_blank">
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
