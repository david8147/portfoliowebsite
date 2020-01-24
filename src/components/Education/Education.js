import React, {Component} from 'react';
import ucberkeleyseal from '../../images/ucberkeleyseal.png'
import './Education.css'
class Education extends Component{
    render(){
        return(
            <div className='EducationMain'>
                <h1 className='EducationText'>EDUCATION</h1>
                <a href={"https://www.berkeley.edu/"} target="_blank" rel="noopener noreferrer">
                    <img alt="" src={ucberkeleyseal} className='SealImage'/>
                </a>
                <h1 className='Text'>University of California, Berkeley</h1>
                <h1 className='Text'>Applied Mathematics & Computer Science</h1>
            </div>
        )
    }
}
export default Education;
