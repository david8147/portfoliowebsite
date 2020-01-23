import React, {Component} from 'react';
import sublime from "../images/sublime.png"
import androidstudio from "../images/androidstudio.png"
import jira from "../images/jira.png"
import largeblackgithub from "../images/largegithub.png"
import ijsmall from "../images/ijsmall.png"
import pycharm from "../images/pycharm.png"
import webstorm from "../images/webstorm.png"
import clion from "../images/clion.png"
import bitbucket from "../images/bitbucket.png"
import gimp from "../images/gimp.png"
import gitbash from "../images/gitbash.png"
import postman from "../images/postman.png"
import raspberry from "../images/raspberry.png"
import aws from "../images/aws.png"
import express from "../images/express.png"
import firebase from "../images/firebase.png"
import gcp from "../images/gcp.png"
import nodejs from "../images/nodejs.png"
import rest from "../images/rest.png"

import Fade from 'react-reveal/Fade';

import './skillsStyles.css'
class Skills extends Component{
    render(){
        const skills = [
                {
                    Name: "Python",
                    //BarColor: "#366E9D",
                    BarColor: "linear-gradient(to top right, #005C97, #363795)",
                    percentage: 90,
                    imageName: 'python.png'
                },
                {
                    Name: "React.js",
                    // BarColor: "#00d8ff",
                    BarColor: "linear-gradient(to top right, #06beb6, #48b1bf)",
                    percentage: 86,
                    imageName: 'react.png'
                },
                {
                    Name: "Java",
                    //BarColor: "#F8981D",
                    BarColor: "linear-gradient(to top right, #fc4a1a, #f7b733)",
                    percentage: 86,
                    imageName: 'java.png'
                },

                {
                    Name: "Android",
                    //BarColor: "#A4C639",
                    BarColor: "linear-gradient(to top right, #00b09b, #96c93d)",
                    percentage: 84,
                    imageName: 'android.png'
                },

                {
                    Name: "Javascript",
                    BarColor: "#F0DB4F",
                    percentage: 70,
                    imageName: 'javascript.png'
                },
                {
                    Name: "HTML",
                    //BarColor: "#E34C25",
                    BarColor: "linear-gradient(to top right, #E44D26, #F16529)",
                    percentage: 70,
                    imageName: 'html.png'
                },
                {
                    Name: "CSS",
                    //BarColor: "#33A9DC",
                    BarColor: "linear-gradient(to top right, #2193b0, #6dd5ed)",
                    percentage: 70,
                    imageName: 'css.png'
                },
                {
                    Name: "C",
                    //BarColor: "#65D0B6",
                    BarColor: "linear-gradient(to top right, #11998e, #38ef7d)",
                    percentage: 65,
                    imageName: 'cprog.png'
                },
                {
                    Name: "C++",
                    //BarColor: "#004283",
                    BarColor: "linear-gradient(to top right, #1e3c72, #2a5298)",
                    percentage: 62,
                    imageName: 'c.png'
                },
                {
                    Name: "Linux",
                    //BarColor: "#FCB713",
                    BarColor: "linear-gradient(to top right, #FDC830, #F37335)",
                    percentage: 75,
                    imageName: 'linux.png'
                },

                {
                    Name: "SQL",
                    //BarColor: "#0072C6",
                    BarColor: "linear-gradient(to top right, #396afc, #2948ff)",
                    percentage: 65,
                    imageName: 'sql.png'
                },
            ]
        ;

        const graphHeightPixels = 300;
        return(
            <div style={{display:'flex', flexDirection:'column', alignItems:'center', height:600}}>
                <h1 style={{color:'yellow', textDecoration: 'underline'}}>SKILLS</h1>
                <div className="FullGraph">

                    <div className="BarsGraph">
                        <div className="Bars">
                            <Fade>
                                <div className="YAxis">
                                    <h3 className="YValue">Wizard</h3>
                                    <h3 className="YValue">85 Decibel keyboard clacks</h3>
                                    <h3 className="YValue">Comfortable</h3>
                                    <h3 className="YValue">Competent</h3>
                                    <h3 className="YValue">Dog inherits from Animal</h3>
                                    <h3 className="YValue">Saw it once in a dream</h3>
                                </div>
                            </Fade>

                            {skills.map((skill) =>
                                <div key={skill.Name} className="Bar">
                                    <img alt="" src={require('../images/' + skill.imageName)} className='BarImage' />
                                    <div style={{
                                        background: skill.BarColor,
                                        height: `${skill.percentage / 900 * graphHeightPixels}vh`, marginBottom: '2vh'
                                    }}/>
                                    <div className={"SkillText"}>
                                        <span className="text-overflow-center">{skill.Name}</span>

                                    </div>
                                </div>
                                )
                            }
                        </div>

                    </div>
                </div>

                <div style={{display:'flex', flexDirection:'row', justifyContents:"center", alignItems:'center'}}>
                    <a href="https://cloud.google.com/" target="_blank" rel="noopener noreferrer"><img alt="" src={gcp} className="Longer"/></a>
                    <a href="https://firebase.google.com/" target="_blank" rel="noopener noreferrer"><img alt="" src={firebase}
                                                                                                          className="Technology"/></a>
                    <a href="https://aws.amazon.com/" target="_blank" rel="noopener noreferrer"><img alt="" src={aws} className="Longer"/></a>
                    <a href="https://www.sublimetext.com/" target="_blank" rel="noopener noreferrer"><img alt="" src={sublime}
                                                                                                          className="Technology"/></a>
                    <a href="https://git-for-windows.github.io/" target="_blank" rel="noopener noreferrer"><img alt="" src={gitbash}
                                                                                                                className="Technology"/></a>
                    <a href="https://www.getpostman.com/" target="_blank" rel="noopener noreferrer"><img alt="" src={postman}
                                                                                                         className="Technology"/></a>
                    <a href="https://www.raspberrypi.org/" target="_blank" rel="noopener noreferrer"><img alt="" src={raspberry}
                                                                                                          className="Technology"/></a>

                    <a href="https://developer.android.com/studio/index.html" target="_blank" rel="noopener noreferrer"><img alt=""
                                                                                                                             src={androidstudio}
                                                                                                                             className="Technology"/></a>

                    <a href="https://www.atlassian.com/software/jira" target="_blank" rel="noopener noreferrer"><img alt="" src={jira}
                                                                                                                     className="Technology"/></a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer"><img alt="" src={largeblackgithub}
                                                                                                className="Technology"/></a>

                    <a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer"><img alt="" src={nodejs} className="Longer"/></a>
                    <a href="https://expressjs.com/" target="_blank" rel="noopener noreferrer"><img alt="" src={express} className="Longer"/></a>


                    <a href="https://en.wikipedia.org/wiki/Representational_state_transfer" target="_blank" rel="noopener noreferrer"><img alt="" src={rest} className="Longer"/></a>
                    <a href="https://www.gimp.org/" target="_blank" rel="noopener noreferrer"><img alt="" src={gimp} className="Technology"/></a>

                    <a href="https://bitbucket.org/product" target="_blank" rel="noopener noreferrer"><img alt="" src={bitbucket}
                                                                                                           className="Technology"/></a>
                    <a href="https://www.jetbrains.com/idea/" target="_blank" rel="noopener noreferrer"><img alt="" src={ijsmall}
                                                                                                             className="Technology"/></a>
                    <a href="https://www.jetbrains.com/pycharm/" target="_blank" rel="noopener noreferrer"><img alt="" src={pycharm}
                                                                                                                className="Technology"/></a>

                    <a href="https://www.jetbrains.com/clion/" target="_blank" rel="noopener noreferrer"><img alt="" src={clion}
                                                                                                              className="Technology"/></a>


                    <a href="https://www.jetbrains.com/webstorm/" target="_blank" rel="noopener noreferrer"><img alt="" src={webstorm}
                                                                                                                 className="Technology"/></a>


                </div>
            </div>
        )
    }
}
export default Skills;
