import React, {Component} from 'react';
import Typist from 'react-typist';
import './Front.css'

class Front extends Component{
    render(){
        return(
            <div style={{ display:'flex', flexDirection:'column', justifyContents:'center', alignItems:'flex-start',
                marginLeft:100, marginTop:80, height:window.innerHeight}}>
                <p className='FrontNameText'>David Woo</p>
                <div className='FrontMovingText'>
                    Software Engineer: &nbsp;
                    <Typist cursor={{
                        show: true,
                        blink: true,
                        element: '|',
                        hideWhenDone: true,
                        hideWhenDoneDelay: 0,
                    }}>
                        <span>Front-End</span>
                        <Typist.Backspace count={9} delay={1000}/>
                        <span>Back-End</span>
                        <Typist.Backspace count={8} delay={1000}/>
                        <span>Full-Stack</span>
                    </Typist>

                </div>
                <p className='FrontText'>University of California, Berkeley</p>
                <p className='FrontText'>Applied Mathematics & Computer Science</p>
            </div>
        )
    }
}

export default Front;
