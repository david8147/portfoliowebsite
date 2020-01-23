import React, {Component} from 'react';
import ucberkeleyseal from '../images/ucberkeleyseal.png'
class Education extends Component{
    render(){
        return(
            <div style={{height:600, display:'flex', flexDirection:'column', justifyContents:'center', alignItems:'center',
                            marginTop:100}}>
                <h1 style={{color:'yellow', textDecoration: 'underline'}}>EDUCATION</h1>
                <a href={"https://www.berkeley.edu/"} target="_blank" rel="noopener noreferrer">
                    <img alt="" src={ucberkeleyseal} style={{height:90, width:90}}/>
                </a>
                <h1 style={{color:'yellow'}}>University of California, Berkeley</h1>
                <h1 style={{color:'yellow'}}>Applied Mathematics & Computer Science</h1>
            </div>
        )
    }
}
export default Education;
