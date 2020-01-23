import React,{Component, useState} from 'react';
import { useSpring, animated } from 'react-spring'

import Front from './Front'
import RelevantCourses from './RelevantCourses'
import Skills from './Skills'
import Contact from './Contact'
import Education from './Education'
import Projects from './Projects'

// import Component1 from './Component1'
// import Component2 from './Component2'
import Component3 from './Component3'
import Component4 from './Component4'


import Fade from 'react-reveal/Fade';
import  { slide as Menu}  from 'react-burger-menu'
import Typist from 'react-typist';
import ReactRevealText from "react-reveal-text";
import scrollToComponent from 'react-scroll-to-component';
import ScrollingColorBackground from 'react-scrolling-color-background'
import { AnimatedBg, Transition } from 'scroll-background';
import Particles from 'react-particles-js';


class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            open:false,
            open1:true,
            open2: true,
            open3:false,
            mainColor:'#f5d300'
        }
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({open1:false, open3:true, open2:true,}, ()=>{
                this.changeMainColor();
            })
        },1000);
        // setTimeout(() => {
        //     this.setState({open2:true})
        // }, 2000);
        // setTimeout(() => {
        //     this.setState({open3:true, open2:false})
        // }, 7000);

    }
    changeMainColor=()=>{
        // setTimeout(() => {
        //     this.setState({mainColor:'black'})
        // },1000);

    }
    getMenu() {
        // const Menu = BurgerMenu['pushRotate'];
        const items = [
            <h2 key="0"><i className="fa fa-fw fa-inbox fa-2x"/><span>Navigation</span></h2>,

            <div key="1" className="MenuContainer" onClick={() => scrollToComponent(this.FIRST, {offset: 0, align: 'top', duration: 1500})}>
                <span className="MenuItem">Front</span>
            </div>,
            <div key="2" className="MenuContainer" onClick={() => scrollToComponent(this.SECOND, {offset: 0, align: 'top', duration: 1500})}>
                <span className="MenuItem">Projects</span>
            </div>,
            <div key="3" className="MenuContainer" onClick={() => scrollToComponent(this.THIRD, {offset: 0, align: 'top', duration: 1500})}>
                <span className="MenuItem">Education</span>
            </div>,
            <div key="4" className="MenuContainer" onClick={() => scrollToComponent(this.FOURTH, {offset: 0, align: 'top', duration: 1500})}>
                <span className="MenuItem">Relevant Courses</span>
            </div>,
            <div key="5" className="MenuContainer" onClick={() => scrollToComponent(this.FIFTH, {offset: 0, align: 'top', duration: 1500})}>
                <span className="MenuItem">Skills</span>
            </div>,
            <div key="6" className="MenuContainer" onClick={() => scrollToComponent(this.SIXTH, {offset: 0, align: 'top', duration: 1500})}>
                <span className="MenuItem">Contact</span>
            </div>
        ];
        return (
            <Menu right width={'20%'} styles={styles}>
                {items}
            </Menu>

        );

    }
    render(){
        return(
            <div style={{backgroundColor:'#00001c'}}>
                {this.state.open1 && (
                    <Fade when={this.state.open2}>
                        <Component4/>
                    </Fade>
                )}
                {/*{this.state.open2 &&*/}
                    {/*<div style={{height: window.innerHeight, width:window.innerWidth}}>*/}
                        {/*<Component3/>*/}
                    {/*</div>*/}
                {/*}*/}

                {this.state.open3 &&
                <Fade>
                    <AnimatedBg >
                        <Particles
                            style={{position:'absolute'}}
                            height={window.innerHeight*7}
                            params={{
                                particles: {
                                    number: {
                                        value: 70,
                                        density: {
                                            enable: true,
                                            value_area: 800
                                        }
                                    },
                                    color: {
                                        value: "#e3e022"
                                    },
                                    shape: {
                                        type: "circle",
                                        stroke: {
                                            width: 0,
                                            color: "#000000"
                                        },
                                        polygon: {
                                            nb_sides: 10
                                        },
                                        image: {
                                            src: "img/github.svg",
                                            width: 1000,
                                            height: 1000
                                        }
                                    },
                                    size: {
                                        value: 3,
                                        random: true,
                                        anim: {
                                            enable: false,
                                            speed: 2,
                                            size_min: 0.1,
                                            sync: false
                                        }
                                    },
                                    line_linked: {
                                        enable: true,
                                        distance: 20,
                                        color: "#e3e022",
                                        opacity: 0.9,
                                        width: 2
                                    },
                                    move: {
                                        enable: true,
                                        speed: 2,
                                        direction: "none",
                                        random: false,
                                        straight: false,
                                        out_mode: "out",
                                        bounce: false,
                                        attract: {
                                            enable: false,
                                            rotateX: 600,
                                            rotateY: 1200
                                        }
                                    }
                                },

                                interactivity: {
                                    events: {
                                        onhover: {
                                            enable: true,
                                            mode: "repulse"
                                        }
                                    }
                                },

                                "retina_detect": true
                            }}
                        />
                        {this.getMenu()}
                        <div style={{height:80}}/>
                        <section
                            ref={(section) => {
                                this.FIRST = section;
                            }}>
                        </section>
                        {/*<Fade>*/}
                        <div style={{display:'flex', flexDirection:'column', justifyContents:'center', alignItems:'center',}}>
                            <div style={{display:'flex', flexDirection:'column', justifyContents:'center', alignItems:'center',
                                width:'100%'}}>
                                <Front />
                            </div>
                        </div>
                        {/*</Fade>*/}
                        {/*<Transition height='200px' from="#030024" to="#000080" position={0.5}/>*/}
                        <section
                            ref={(section) => {
                                this.SECOND = section;
                            }}>
                        </section>
                        {/*<Fade>*/}
                            <div style={{display:'flex', flexDirection:'column', justifyContents:'center', alignItems:'center',}}>
                                <div style={{display:'flex', flexDirection:'column', justifyContents:'center', alignItems:'center',
                                    width:'100%'}}>
                                    <Projects />
                                </div>
                            </div>
                        {/*</Fade>*/}

                        {/*<Transition height='200px' from="#981703" to="#301732" />*/}
                        <section ref={(section) => {
                            this.THIRD = section;
                        }}>
                        </section>
                        <Fade>
                            <Education/>
                        </Fade>
                        {/*<Transition height='200px' from="#0D47A1" to="#388E3C" />*/}
                        <section ref={(section) => {
                            this.FOURTH = section;
                        }}>
                        </section>
                        <RelevantCourses/>

                        <section ref={(section) => {
                            this.FIFTH = section;
                        }}>
                        </section>
                        <Skills/>

                        <section ref={(section) => {
                            this.SIXTH = section;
                        }}>
                        </section>
                        <Contact/>
                    </AnimatedBg>
                </Fade>}
            </div>
        )
    }
}

let styles = {
    bmBurgerButton: {
        position: 'absolute',
        width: '26px',
        height: '20px',
        right: '36px',
        top: '36px'
    },
    bmBurgerBars: {
        background:'white'
        // background: '#373a47'
    },
    bmCross: {
        // background: '#bdc3c7'
        background:'red',
    },
    bmMenu: {
        background: 'yellow',
        padding: '2.5em 1.5em 0',
        fontSize: '1.15em'
    },
    bmItemList: {
        // color: '#b8b7ad',
        color: 'red',
        padding: '0.8em',
        cursor: 'pointer',
    },
    bmOverlay: {
        background: 'rgba(0, 0, 0, 0.5)'
        // background:'black'
    },
    bmCrossButton: {
        height: '24px',
        width: '24px'
    },
    bmMorphShape: {
        // fill: '#373a47'
        fill:'red'
    },
}
export default Home;
