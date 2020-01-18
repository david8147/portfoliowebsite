import React,{Component} from 'react';

import FirstComponent from './FirstComponent'
import SecondComponent from './RelevantCourses'
import ThirdComponent from './Skills'
import Contact from './Contact'

import Fade from 'react-reveal/Fade';
import  { slide as Menu}  from 'react-burger-menu'
import Typist from 'react-typist';
import ReactRevealText from "react-reveal-text";
import scrollToComponent from 'react-scroll-to-component';

class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            open:false,
        }
    }
    getMenu() {
        // const Menu = BurgerMenu['pushRotate'];
        const items = [
            <h2 key="0"><i className="fa fa-fw fa-inbox fa-2x"/><span>Navigation</span></h2>,

            <div key="1" className="MenuContainer" onClick={() => scrollToComponent(this.FIRST, {offset: 0, align: 'top', duration: 1500})}>
                <span className="MenuItem">First</span>
            </div>,
            <div key="2" className="MenuContainer" onClick={() => scrollToComponent(this.SECOND, {offset: 0, align: 'top', duration: 1500})}>
                <span className="MenuItem">Second</span>
            </div>,
            <div key="3" className="MenuContainer" onClick={() => scrollToComponent(this.THIRD, {offset: 0, align: 'top', duration: 1500})}>
                <span className="MenuItem">Third</span>
            </div>,
            <div key="4" className="MenuContainer" onClick={() => scrollToComponent(this.FOURTH, {offset: 0, align: 'top', duration: 1500})}>
                <span className="MenuItem">Fourth</span>
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
            <div style={{backgroundColor:'#3275a8'}}>
                {this.getMenu()}
                <div style={{ height:80}}/>

                <section ref={(section) => {
                    this.FIRST = section;
                }}>
                </section>
                <FirstComponent/>

                <section ref={(section) => {
                    this.SECOND = section;
                }}>
                </section>
                <SecondComponent/>

                <section ref={(section) => {
                    this.THIRD = section;
                }}>
                </section>
                <ThirdComponent/>

                <section ref={(section) => {
                    this.FOURTH = section;
                }}>
                </section>
                <Contact/>

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
