import React, {Component} from 'react';
import githubImage from '../images/github.png'

class Contact extends Component{
    render(){
        return(
            <div style={{display: 'flex', flexDirection:'column', alignItems:'center', justifyContents:'center', paddingBottom:30, marginTop:80}}>
                <div style={{display: 'flex', flexDirection:'row',alignItems:'center', justifyContents:'center',}}>
                    <a  style={{margin: 5}} href={"https://github.com/david8147"}  target="_blank">
                        <img alt="" src={githubImage}
                             rel="noopener noreferrer"/>
                    </a>

                    <a
                        style={{textDecoration: 'none', margin:5}}
                        href={"https://docs.google.com/document/d/1ZAldDQejehmZ9KgPlc3DmpAhL6iX4H7Kc9O6YGz6Uas/edit?usp=sharing"}  target="_blank">
                        <div style={{color: 'white',cursor:'pointer', marginLeft:10}}>
                            [Resume]
                        </div>
                    </a>
                    <p style={{color:'white', margin:5}}> david8147@berkeley.edu </p>
                </div>
            </div>
        )
    }
}
export default Contact;
