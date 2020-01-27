import React, {Component} from 'react';
import Projects from '../Projects/Projects'
import ProjectPagesHeader from "./ProjectPagesHeader";
import Fade from "react-reveal/Fade";
import github from "../../images/largegithub.png";
class radii extends Component{
    render(){
        return(
            <div>
                <div style={{background:'linear-gradient(to bottom right, #eb005e, #fdbfff)'}}>
                    <ProjectPagesHeader/>
                    <div style={{display:'flex',height:'400px', justifyContent:'center', alignItems:'center', }}>
                        <Fade up>
                            <p style={{fontSize:50, color:'white', fontWeight:'bold'}}>Radii: React-Native</p>
                        </Fade>
                    </div>
                </div>
                <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center',backgroundColor:'#00001c'}}>
                    <div style={{width:'80%', marginBottom:50}}>
                        <p style={{color:'yellow'}}>
                            This React-Native app is built with the motivation to connect people to their neighborhoods in real-time.
                            The user can send a Pulse - which is essentially a Post that is sent to the users within the radius of the Pulse.
                        </p>

                        <p style={{color:'yellow'}}>
                            User sends Pulses in the Radii Page.
                            All the Pulses received are in the Pulses Page.
                            The user can set various settings including which Pulse categories to receive and the desired Pulse radius in the Settings Page.
                        </p>

                    </div>

                    <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around', alignItems:'center', width:'50%', marginBottom:30}}>
                        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', textAlign:'center'}}>
                            <img style={style.projImages} alt="" src={require('../../images/ProjectImages/radii/radii1-1.png')}/>
                            <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                                <p style={{color:'yellow'}}>Main page of the app. Use the slider on the bottom to change radius of the Pulse to send</p>
                            </div>
                        </div>
                        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center',textAlign:'center'}}>
                            <img style={style.projImages} alt="" src={require('../../images/ProjectImages/radii/radii8-1.png')}/>
                            <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                                <p style={{color:'yellow'}}>Before user sends a Pulse, the user chooses the Pulse categories and the app gives a preview</p>
                            </div>
                        </div>

                    </div>

                    <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around', alignItems:'center', width:'80%', marginBottom:30}}>
                        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', textAlign:'center', width:'30%'}}>
                            <img style={style.projImages} alt="" src={require('../../images/ProjectImages/radii/radii3-1.png')}/>
                            <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                                <p style={{color:'yellow'}}>The Pulse page presents all the Pulses received</p>
                            </div>
                        </div>

                        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center',textAlign:'center', width:'30%'}}>
                            <img style={style.projImages} alt="" src={require('../../images/ProjectImages/radii/radii4-1.png')}/>
                            <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                                <p style={{color:'yellow'}}>Pulses can be commented on. Comments are sorted by time</p>
                            </div>
                        </div>
                        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center',textAlign:'center', width:'30%'}}>
                            <img style={style.projImages} alt="" src={require('../../images/ProjectImages/radii/radii9-1.png')}/>
                            <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                                <p style={{color:'yellow'}}>Can report Pulses. Multiple reports result in a ban.</p>
                            </div>
                        </div>
                    </div>
                    <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around', alignItems:'center', width:'50%', marginBottom:30}}>
                        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', textAlign:'center'}}>
                            <img style={style.projImages} alt="" src={require('../../images/ProjectImages/radii/radii6-1.png')}/>
                            <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                                <p style={{color:'yellow'}}>Settings Page</p>
                            </div>
                        </div>
                        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center',textAlign:'center'}}>
                            <img style={style.projImages} alt="" src={require('../../images/ProjectImages/radii/radii7-1.png')}/>
                            <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                                <p style={{color:'yellow'}}>Drawer Menu</p>
                            </div>
                        </div>

                    </div>

                    <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', textAlign:'center', marginBottom:100}}>
                        <a style={{textDecoration:'inherit', color:'white'}}
                           href={"https://github.com/david8147/RadiiProject"} className="Link" target="_blank" rel="noopener noreferrer">
                            <h2>{'Project Code On Github'}</h2>
                            <img style={{height:60, width:60}} alt="" src={github}/>
                        </a>
                    </div>


                    <Projects/>
                </div>

            </div>

        )
    }
}
const style = {
    projImages:{
        height:'600px',
        width:'300px',

    },
    text:{
        display:'flex',
        flexDirection:'column',
        justifyContents:'center',
        alignItems:'center',
        padding:20,
    }
}
export default radii;
