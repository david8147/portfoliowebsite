import React, {Component} from 'react';
import Projects from '../Projects'
import ProjectPagesHeader from "./ProjectPagesHeader";
import Fade from "react-reveal/Fade";
class radii extends Component{
    render(){
        return(
            <div>
                <div style={{background:'linear-gradient(70deg, #FF512F, #F09819)'}}>
                    <ProjectPagesHeader/>
                    <div style={{display:'flex',height:'400px', justifyContent:'center', alignItems:'center', }}>
                        <Fade up>
                            <p >radii</p>
                        </Fade>
                    </div>
                </div>
                <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center',backgroundColor:'grey'}}>
                    <p>An app to connect people to their neighborhood in real-time. Every message sends a pulse notification to those within the circle unless they have turned off those specific types of notifications.
                    </p>


                    <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around', alignItems:'center', width:'50%'}}>
                        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                            <img style={style.projImages} alt="" src={require('../../images/ProjectImages/radii/radii1-1.png')}/>
                            <p>Main page of the app. Use slider on the bottom to change radius of the pulse</p>
                        </div>
                        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                            <img style={style.projImages} alt="" src={require('../../images/ProjectImages/radii/radii8-1.png')}/>
                            <p>When you send a pulse you can preview it and choose the pulse categories</p>
                        </div>
                    </div>

                    <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around', alignItems:'center', width:'80%'}}>
                        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                            <img style={style.projImages} alt="" src={require('../../images/ProjectImages/radii/radii3-1.png')}/>
                            <p>All the pulses you have received, complete with vertical infinite scrolling</p>
                        </div>
                        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', }}>
                            <img style={style.projImages} alt="" src={require('../../images/ProjectImages/radii/radii4-1.png')}/>
                            <p>Pulse Posts can be commented on</p>
                        </div>
                        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                            <img style={style.projImages} alt="" src={require('../../images/ProjectImages/radii/radii9-1.png')}/>
                            <p>Can report pulse</p>
                        </div>
                    </div>

                    <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around', alignItems:'center', width:'50%'}}>
                        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                            <img style={style.projImages} alt="" src={require('../../images/ProjectImages/radii/radii6-1.png')}/>
                            <p>Settings Page: The robust settings that makes sure the notifications never become too much</p>
                        </div>
                        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                            <img style={style.projImages} alt="" src={require('../../images/ProjectImages/radii/radii7-1.png')}/>
                            <p>Drawer Menu</p>
                        </div>
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
