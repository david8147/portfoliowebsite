import React, {Component} from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

class RelevantCourses extends Component{
    render(){
        return(
            <div style={{ display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', padding:10}}>
                <div>
                    <h1 style={{color:'yellow', marginBottom:5, textDecoration: 'underline'}}>RELEVANT COURSES</h1>
                </div>
                <Fade left>
                    <div className="LinkText">
                        <a href="https://cs61a.org/" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                            <Fade left>
                                <div className="Courses"><p style={styles.p}>CS61A - Structure and Interpretation of Computer Programs</p></div>
                            </Fade>
                        </a>
                    </div>
                </Fade>
                <Fade right>
                    <div className="LinkText">
                        <a href="https://inst.eecs.berkeley.edu/~cs61b/" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                            <Fade right>
                                <div className="Courses"><p style={styles.p}>CS61B - Java and Data Structures</p></div>
                            </Fade>
                        </a>
                    </div>
                </Fade>
                <Fade left>
                    <div className="LinkText">
                        <a href="https://inst.eecs.berkeley.edu/~cs61c/" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                            <Fade left>
                                <div className="Courses"><p style={styles.p}>CS61C - C, Mips, Computer Architecture</p></div>
                            </Fade>
                        </a>
                    </div>
                </Fade>
                <Fade right>
                    <div className="LinkText">
                        <a href="https://inst.eecs.berkeley.edu/~cs70/" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                            <Fade right>
                                <div className="Courses"><p style={styles.p}>CS70 - Discrete Math</p></div>
                            </Fade>
                        </a>
                    </div>
                </Fade>
                <Fade left>
                    <div className="LinkText">
                        <a href="https://cs170.org/" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                            <Fade left>
                                <div className="Courses"><p style={styles.p}>CS170 -Algorithms</p></div>
                            </Fade>
                        </a>
                    </div>
                </Fade>
                <Fade right>
                    <div className="LinkText">
                        <a href="http://inst.eecs.berkeley.edu/~cs188/" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                            <Fade right>
                                <div className="Courses"><p style={styles.p}>CS188 - AI & ML Artificial Intelligence</p></div>
                            </Fade>
                        </a>
                    </div>
                </Fade>
                <Fade left>
                    <div className="LinkText">
                        <a href="https://www.eecs189.org/" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                            <Fade left>
                                <div className="Courses"><p style={styles.p}>CS189 - Machine Learning</p></div>
                            </Fade>
                        </a>
                    </div>
                </Fade>
                <Fade right>
                    <div className="LinkText">
                        <a href="http://cs160.ninja/" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                            <Fade right>
                                <div className="Courses"><p style={styles.p}>CS160 - User Interfaces</p></div>
                            </Fade>
                        </a>
                    </div>
                </Fade>
                <Fade left>
                    <div className="LinkText">
                        <a href="https://cs162.eecs.berkeley.edu/" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                            <Fade left>
                                <div className="Courses"><p style={styles.p}>CS162 - Operating Systems</p></div>
                            </Fade>
                        </a>
                    </div>
                </Fade>
                <Fade right>
                    <div className="LinkText">
                        <a href="https://cs184.eecs.berkeley.edu/" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                            <Fade right>
                                <div className="Courses"><p style={styles.p}>CS184 - Graphics</p></div>
                            </Fade>
                        </a>
                    </div>
                </Fade>
                <Fade left>
                    <div className="LinkText">
                        <a href="https://math.berkeley.edu/courses/choosing/course-descriptions" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                            <Fade left>
                                <div className="Courses"><p style={styles.p}>MATH104 - Real Analysis</p></div>
                            </Fade>
                        </a>
                    </div>
                </Fade>
                <Fade right>
                    <div className="LinkText">
                        <a href="https://math.berkeley.edu/courses/choosing/course-descriptions" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                            <Fade right>
                                <div className="Courses"><p style={styles.p}>MATH185 - Complex Analysis</p></div>
                            </Fade>
                        </a>
                    </div>
                </Fade>
                <Fade left>
                    <div className="LinkText">
                        <a href="https://math.berkeley.edu/courses/choosing/course-descriptions" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                            <Fade left>
                                <div className="Courses"><p style={styles.p}>MATH113 - Abstract Algebra</p></div>
                            </Fade>
                        </a>
                    </div>
                </Fade>
                <Fade right>
                    <div className="LinkText">
                        <a  href="https://math.berkeley.edu/courses/choosing/course-descriptions" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                            <Fade right>
                                <div className="Courses"><p style={styles.p}>MATH110 - Linear Algebra</p></div>
                            </Fade>
                        </a>
                    </div>
                </Fade>
                <Fade left>
                    <div className="LinkText">
                        <a href="https://math.berkeley.edu/courses/choosing/course-descriptions" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                            <Fade left>
                                <div className="Courses"><p style={styles.p}>MATH128A - Numerical Analysis</p></div>
                            </Fade>
                        </a>
                    </div>
                </Fade>
            </div>
        )
    }
}
let styles = {
    p:{
        textDecoration: 'inherit',
        color:'white',
        margin:5,
        fontSize:23,
        fontWeight:'bold',

    }
}
export default RelevantCourses;
