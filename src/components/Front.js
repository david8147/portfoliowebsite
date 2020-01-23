import React, {Component} from 'react';
import Typist from 'react-typist';
import ReactRevealText from "react-reveal-text";

class Front extends Component{
    render(){
        return(
            <div style={{ display:'flex', flexDirection:'column', justifyContents:'center', alignItems:'flex-start',
                marginLeft:100, marginTop:80, marginBottom:200}}>
                <p style={styles.nameText}>David Woo</p>
                <div style={styles.movingText}>
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
                {/*<p style={styles.text}>Software Engineer</p>*/}
                <p style={styles.text}>University of California, Berkeley</p>
                <p style={styles.text}>Applied Mathematics & Computer Science</p>
            </div>
        )
    }
}
let styles = {
    text:{
        fontFamily:'News Gothic',
        fontWeight:'bold',
        fontSize:50,
        color:'white',
        marginTop:15,
        marginBottom:0,

    },
    nameText:{
        fontFamily:'News Gothic',
        fontWeight:'bold',
        fontSize:70,
        color:'white',
        marginTop:15,
        marginBottom:50,
        // background: '#010129',
        // padding:20,
    },
    movingText:{
        fontFamily:'News Gothic',
        fontWeight:'bold',
        fontSize:50,
        color:'white',
        marginTop:15,
        marginBottom:0,
        display: 'flex',
        flexDirection:'row'

    }
}
export default Front;
