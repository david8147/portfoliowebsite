import React, {Component} from 'react';
import Projects from '../Projects/Projects'
import ProjectPagesHeader from "./ProjectPagesHeader";
import Fade from "react-reveal/Fade";
import github from "../../images/largegithub.png";
class wheelthere extends Component{
    render(){
        return(
            <div>
                <div style={{background:'linear-gradient(to bottom right, purple,orange)'}}>
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
                            This React app is designed to be a travel app for people with physical disabilities. The motivation behind this app is that
                            the way one views and judges certain aspects of life may differ if one has physical disabilities. I believe that traveling
                             falls into such aspects. How one views a certain travel location would be different in many ways if one is disabled.
                            Thus, the name of the app is 'wheelthere' as in: 'Can I wheel there?'.
                        </p>
                        <p style={{color:'yellow'}}>
                            Because this app was designed for people with disabilities, I added the functionality that provides a way to navigate
                            through the website with voice commands such as: 'Search Hashtag Sunny', 'Add Map', 'My Account', 'Go Back', and more.

                        </p>
                    </div>
                    <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around', alignItems:'center', width:'80%', marginBottom:30}}>
                        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', textAlign:'center'}}>
                            <img style={style.projImages} alt="" src={require('../../images/ProjectImages/wheelthere/wheelthere1.png')}/>
                            <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                                <p style={{color:'yellow', marginTop:-60}}>This is the Main Page of the website.</p>
                            </div>
                        </div>
                    </div>
                    <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around', alignItems:'center', width:'80%', marginBottom:30}}>
                        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', textAlign:'center'}}>
                            <img style={style.projImages} alt="" src={require('../../images/ProjectImages/wheelthere/wheelthere2.png')}/>
                            <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                                <p style={{color:'yellow', marginTop:-60}}>The Main Page is divided into different sections: Most Popular, Near You, Recommended, $, $$$</p>
                            </div>
                        </div>
                    </div>
                    <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around', alignItems:'center', width:'80%', marginBottom:30}}>
                        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', textAlign:'center'}}>
                            <img style={style.projImages} alt="" src={require('../../images/ProjectImages/wheelthere/wheelthere5.png')}/>
                            <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                                <p style={{color:'yellow', marginTop:-60}}>Trip Page - Page shown when the user clicks into one of the listed trips</p>
                            </div>
                        </div>
                    </div>
                    <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around', alignItems:'center', width:'80%', marginBottom:30}}>
                        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', textAlign:'center'}}>
                            <img style={style.projImages} alt="" src={require('../../images/ProjectImages/wheelthere/wheelthere6.png')}/>
                            <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                                <p style={{color:'yellow', marginTop:-60}}>When creating a Trip, the user clicks and drags over the Pin to the desired location on the Map</p>
                            </div>
                        </div>
                    </div>
                    <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around', alignItems:'center', width:'80%', marginBottom:30}}>
                        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', textAlign:'center'}}>
                            <img style={style.projImages} alt="" src={require('../../images/ProjectImages/wheelthere/wheelthere7.png')}/>
                            <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', marginTop:-60}}>
                                <p style={{color:'yellow', margin:0}}>Modal that appears when user clicks one of the pins on the map</p>
                                <p style={{color:'yellow', marginTop:0}}>Each Pin on the map is associated a Location Info which includse pictures as well as ratings: Rollability, Transport, and more </p>
                            </div>
                        </div>
                    </div>
                    <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around', alignItems:'center', width:'80%', marginBottom:30}}>
                        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', textAlign:'center'}}>
                            <img style={style.projImages} alt="" src={require('../../images/ProjectImages/wheelthere/wheelthere3.png')}/>
                            <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', marginTop:-60}}>
                                <p style={{color:'yellow', margin:0}}>User can search Hashtags in the search bar</p>
                                <p style={{color:'yellow', marginTop:0}}>#beach page shows all trips where the trip creator included the hashtag #beach</p>
                            </div>
                        </div>
                    </div>
                    <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around', alignItems:'center', width:'80%', marginBottom:30}}>
                        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', textAlign:'center'}}>
                            <img style={style.projImages} alt="" src={require('../../images/ProjectImages/wheelthere/wheelthere4.png')}/>
                            <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', marginTop:-60}}>
                                <p style={{color:'yellow'}}>Account page which shows all user's past trips and a way to edit profile</p>
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
