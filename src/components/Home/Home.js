import React,{Component, useState} from 'react';

import Front from '../Front/Front'
import RelevantCourses from '../RelevantCourses/RelevantCourses'
import Skills from '../Skills/Skills'
import Education from '../Education/Education'
import Projects from '../Projects/Projects'
import FrontWelcome from '../FrontWelcome/FrontWelcome'

import Fade from 'react-reveal/Fade';
import  { slide as Menu}  from 'react-burger-menu'
import scrollToComponent from 'react-scroll-to-component';
import { AnimatedBg, Transition } from 'scroll-background';
import Particles from 'react-particles-js';

import './Home.css'

class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            open1: true,
            open2: false,
        }
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({open1:false, open2:true})
        },5500);
    }
    getMenu() {
        const items = [
            <h2 key="0"><i className="fa fa-fw fa-inbox fa-2x"/><span><p style={{color:'yellow'}}>Navigation</p></span></h2>,
            <div key="2" className="MenuContainer" onClick={() => scrollToComponent(this.SECOND, {offset: 0, align: 'top', duration: 1500})}>
                <span className="MenuItem"><p style={styles.menuStyle}>Projects</p></span>
            </div>,
            <div key="3" className="MenuContainer" onClick={() => scrollToComponent(this.THIRD, {offset: 0, align: 'top', duration: 1500})}>
                <span className="MenuItem"><p style={styles.menuStyle}>Education</p></span>
            </div>,
            <div key="4" className="MenuContainer" onClick={() => scrollToComponent(this.FOURTH, {offset: 0, align: 'top', duration: 1500})}>
                <span className="MenuItem"><p style={styles.menuStyle}>Courses</p></span>
            </div>,
            <div key="5" className="MenuContainer" onClick={() => scrollToComponent(this.FIFTH, {offset: 0, align: 'top', duration: 1500})}>
                <span className="MenuItem"><p style={styles.menuStyle}>Skills</p></span>
            </div>,
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
                    <Fade>
                        <FrontWelcome/>
                    </Fade>
                )}

                {this.state.open2 &&
                <Fade >
                    <AnimatedBg >
                        <Particles
                            style={{position:'absolute'}}
                            height={window.innerHeight*7.7}
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

                        <Fade down>
                            <div className='HomeFlexCol'>
                                <div className='HomeFlexColFull'>
                                    <Front />
                                </div>
                            </div>
                        </Fade>

                        <section
                            ref={(section) => {
                                this.SECOND = section;
                            }}>
                        </section>
                            <div className='HomeFlexCol'>
                                <div  className='HomeFlexColFull'>
                                    <Projects />
                                </div>
                            </div>

                        <section ref={(section) => {
                            this.THIRD = section;
                        }}>
                        </section>
                        <Fade>
                            <Education/>
                        </Fade>

                        <section ref={(section) => {
                            this.FOURTH = section;
                        }}>
                        </section>
                        <RelevantCourses/>

                        <section ref={(section) => {
                            this.FIFTH = section;
                        }}>
                        </section>
                        <Fade up>
                            <Skills/>
                        </Fade>

                    </AnimatedBg>
                </Fade>
                }
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
    },
    bmCross: {
        background:'yellow',
    },
    bmMenu: {
        background: '#00001c',
        padding: '2.5em 1.5em 0',
        fontSize: '1.15em'
    },
    bmItemList: {
        color: 'white',
        padding: '0.8em',
        cursor: 'pointer',

    },
    bmOverlay: {
        background: 'rgba(0, 0, 0, 0.5)'
    },
    bmCrossButton: {
        height: '24px',
        width: '24px'
    },
    bmMorphShape: {
        fill:'yellow'
    },
    menuStyle:{
      marginTop:5,
    },
}
export default Home;
