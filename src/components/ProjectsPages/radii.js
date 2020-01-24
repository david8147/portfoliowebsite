import React, {Component} from 'react';
import Projects from '../Projects/Projects'
import ProjectPagesHeader from "./ProjectPagesHeader";
import Fade from "react-reveal/Fade";
import github from "../../images/largegithub.png";
class radii extends Component{
    render(){
        return(
            <div>
                <div style={{background:'linear-gradient(to bottom right, red, violet)'}}>
                    <ProjectPagesHeader/>
                    <div style={{display:'flex',height:'400px', justifyContent:'center', alignItems:'center', }}>
                        <Fade up>
                            <p style={{fontSize:50, color:'white', fontWeight:'bold'}}>Radii: React-Native</p>
                        </Fade>
                    </div>
                </div>
                <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center',backgroundColor:'#00001c'}}>
                    <div style={{width:'80%', marginBottom:50}}>
                        <p style={{color:'yellow'}}>An app to connect people to their neighborhood in real-time. Every message sends a pulse notification to those within the circle unless they have turned off those specific types of notifications.
                        </p>
                    </div>

                    <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around', alignItems:'center', width:'50%', marginBottom:30}}>
                        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', textAlign:'center'}}>
                            <img style={style.projImages} alt="" src={require('../../images/ProjectImages/radii/radii1-1.png')}/>
                            <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                                <p style={{color:'yellow'}}>Main page of the app. Use slider on the bottom to change radius of the pulse</p>
                            </div>
                        </div>
                        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center',textAlign:'center'}}>
                            <img style={style.projImages} alt="" src={require('../../images/ProjectImages/radii/radii8-1.png')}/>
                            <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                                <p style={{color:'yellow'}}>When you send a pulse you can preview it and choose the pulse categories</p>
                            </div>
                        </div>

                    </div>

                    <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around', alignItems:'center', width:'80%', marginBottom:30}}>
                        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', textAlign:'center', width:'30%'}}>
                            <img style={style.projImages} alt="" src={require('../../images/ProjectImages/radii/radii3-1.png')}/>
                            <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                                <p style={{color:'yellow'}}>All the pulses received; vertical infinite scrolling</p>
                            </div>
                        </div>

                        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center',textAlign:'center', width:'30%'}}>
                            <img style={style.projImages} alt="" src={require('../../images/ProjectImages/radii/radii4-1.png')}/>
                            <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                                <p style={{color:'yellow'}}>Pulse Posts can be commented on. Sorted by time</p>
                            </div>
                        </div>
                        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center',textAlign:'center', width:'30%'}}>
                            <img style={style.projImages} alt="" src={require('../../images/ProjectImages/radii/radii9-1.png')}/>
                            <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                                <p style={{color:'yellow'}}>Can report pulse. Multiple Reports result in ban.</p>
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
                           href={"https://github.com/david8147"} className="Link" target="_blank" rel="noopener noreferrer">
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
