import React, {Component} from 'react';
import Projects from '../Projects/Projects'
import ProjectPagesHeader from "./ProjectPagesHeader";
import Fade from "react-reveal/Fade";
import github from "../../images/largegithub.png";
class wheelthere extends Component{
    render(){
        return(
            <div>
                <div style={{background:'linear-gradient(to bottom right, green, blue)'}}>
                    <ProjectPagesHeader/>
                    <div style={{display:'flex',height:'400px', justifyContent:'center', alignItems:'center', }}>
                        <Fade up>
                            <p style={{fontSize:50, color:'white', fontWeight:'bold'}}>wheelthere: React</p>
                        </Fade>
                    </div>
                </div>

                <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center',backgroundColor:'#00001c'}}>
                    <div style={{width:'80%', marginBottom:50}}>
                        <p style={{color:'yellow'}}>
                            This app was designed as a travel app for people with disability. The motivation came from how one looking at
                            traveling and how one rates a certain place would differ greatly if one is disabled.

                            Because this app was designed for people with disability, this app provides a way to navigate through with voice commands

                        </p>
                    </div>
                    <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around', alignItems:'center', width:'80%', marginBottom:30}}>
                        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', textAlign:'center'}}>
                            <img style={style.projImages} alt="" src={require('../../images/ProjectImages/wheelthere/wheelthere1.png')}/>
                            <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                                <p style={{color:'yellow'}}>Main Page</p>
                            </div>
                        </div>
                    </div>
                    <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around', alignItems:'center', width:'80%', marginBottom:30}}>
                        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', textAlign:'center'}}>
                            <img style={style.projImages} alt="" src={require('../../images/ProjectImages/wheelthere/wheelthere2.png')}/>
                            <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                                <p style={{color:'yellow'}}>Main Page has different sections: Recommended, Near You, $, $$$</p>
                            </div>
                        </div>
                    </div>
                    <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around', alignItems:'center', width:'80%', marginBottom:30}}>
                        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', textAlign:'center'}}>
                            <img style={style.projImages} alt="" src={require('../../images/ProjectImages/wheelthere/wheelthere5.png')}/>
                            <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                                <p style={{color:'yellow'}}>Trip Page</p>
                            </div>
                        </div>
                    </div>
                    <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around', alignItems:'center', width:'80%', marginBottom:30}}>
                        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', textAlign:'center'}}>
                            <img style={style.projImages} alt="" src={require('../../images/ProjectImages/wheelthere/wheelthere6.png')}/>
                            <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                                <p style={{color:'yellow'}}>Trip Page</p>
                            </div>
                        </div>
                    </div>
                    <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around', alignItems:'center', width:'80%', marginBottom:30}}>
                        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', textAlign:'center'}}>
                            <img style={style.projImages} alt="" src={require('../../images/ProjectImages/wheelthere/wheelthere7.png')}/>
                            <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                                <p style={{color:'yellow'}}>Pin of the Trip</p>
                            </div>
                        </div>
                    </div>
                    <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around', alignItems:'center', width:'80%', marginBottom:30}}>
                        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', textAlign:'center'}}>
                            <img style={style.projImages} alt="" src={require('../../images/ProjectImages/wheelthere/wheelthere3.png')}/>
                            <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                                <p style={{color:'yellow'}}>Can search Hashtag in search bar. #Beach Page shows all trips with #Beach</p>
                            </div>
                        </div>
                    </div>
                    <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around', alignItems:'center', width:'80%', marginBottom:30}}>
                        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', textAlign:'center'}}>
                            <img style={style.projImages} alt="" src={require('../../images/ProjectImages/wheelthere/wheelthere4.png')}/>
                            <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                                <p style={{color:'yellow'}}>Settings page which shows all user's trips and way to edit profile</p>
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
        width:'80%',

    },
    text:{
        display:'flex',
        flexDirection:'column',
        justifyContents:'center',
        alignItems:'center',
        padding:20,
    }
}
export default wheelthere;
