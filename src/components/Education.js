import React, {Component} from 'react';
import ucberkeleyseal from '../images/ucberkeleyseal.png'
class Education extends Component{
    render(){
        return(
            <div style={{height:600, display:'flex', flexDirection:'column', justifyContents:'center', alignItems:'center'}}>
                <h1>Education</h1>
                <a href={"https://www.berkeley.edu/"} target="_blank" rel="noopener noreferrer">
                    <img alt="" src={ucberkeleyseal} style={{height:50, width:50}}/>
                </a>
                <h1>University of California, Berkeley</h1>
                <h1>Applied Mathematics & Computer Science</h1>
            </div>
        )
    }
}
export default Education;
