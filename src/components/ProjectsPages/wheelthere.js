import React, {Component} from 'react';
import Projects from '../Projects'
import ProjectPagesHeader from "./ProjectPagesHeader";
import Fade from "react-reveal/Fade";
class wheelthere extends Component{
    render(){
        return(
            <div>
                <div style={{background:'linear-gradient(70deg, #FF512F, #F09819)'}}>
                    <ProjectPagesHeader/>
                    <div style={{display:'flex',height:'400px', justifyContent:'center', alignItems:'center', }}>
                        <Fade up>
                            <p >wheelthere</p>
                        </Fade>
                    </div>
                </div>
                <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center',backgroundColor:'grey'}}>
                    <p>This app was designed as a travel app for people with disability. The motivation came from how one looking at
                        traveling and how one rates a certain place would differ greatly if one is disabled.

                        Because this app was designed for people with disability, this app provides a way to navigate through with voice commands
                    </p>

                    <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around', alignItems:'center', width:'80%'}}>
                        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                            <img style={style.projImages} alt="" src={require('../../images/ProjectImages/wheelthere/wheelthere1.png')}/>
                            <p>Main Page </p>
                        </div>
                        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                            <img style={style.projImages} alt="" src={require('../../images/ProjectImages/wheelthere/wheelthere2.png')}/>
                            <p>Main Page has different sections: Recommended, Near You, $, $$$</p>
                        </div>
                    </div>
                    <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around', alignItems:'center', width:'80%'}}>
                        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                            <img style={style.projImages} alt="" src={require('../../images/ProjectImages/wheelthere/wheelthere5.png')}/>
                            <p>Trip Page</p>
                        </div>
                        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                            <img style={style.projImages} alt="" src={require('../../images/ProjectImages/wheelthere/wheelthere6.png')}/>
                            <p>Trip Page</p>
                        </div>
                        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                            <img style={style.projImages} alt="" src={require('../../images/ProjectImages/wheelthere/wheelthere7.png')}/>
                            <p>Pin of the Trip</p>
                        </div>
                    </div>
                    <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around', alignItems:'center', width:'80%'}}>
                        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                            <img style={style.projImages} alt="" src={require('../../images/ProjectImages/wheelthere/wheelthere3.png')}/>
                            <p>Can search Hashtag in search bar. #Beach Page shows all trips with #Beach</p>
                        </div>
                        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                            <img style={style.projImages} alt="" src={require('../../images/ProjectImages/wheelthere/wheelthere4.png')}/>
                            <p>Settings page which shows all user's trips and way to edit profile </p>
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
export default wheelthere;
