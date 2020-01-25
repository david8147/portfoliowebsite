import React, {Component} from 'react';
import Typist from 'react-typist';
import './Front.css'

class Front extends Component{
    render(){
        return(
            <div style={{ display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'flex-start',
                marginLeft:100, marginTop:-100,height:window.innerHeight*1,marginBottom:50 }}>
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
                        <span style={{color:'yellow'}}>Front-End</span>
                        <Typist.Backspace count={9} delay={1000}/>
                        <span style={{color:'yellow'}}>Back-End</span>
                        <Typist.Backspace count={8} delay={1000}/>
                        <span style={{color:'yellow'}}>Full-Stack</span>
                    </Typist>
                </div>
                <p className='FrontText'>University of California, Berkeley</p>
                <p className='FrontText'>Applied Mathematics & Computer Science</p>
            </div>
        )
    }
}

export default Front;
