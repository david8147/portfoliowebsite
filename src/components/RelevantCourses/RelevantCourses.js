import React, {Component} from 'react';
import Fade from 'react-reveal/Fade';
import './RelevantCourses.css'
class RelevantCourses extends Component{
    render(){
        return(
            <div className='RelevantCoursesMain'>
                <div>
                    <h1 className='RelevantCoursesText'>RELEVANT COURSES</h1>
                </div>
                <Fade left>
                    <div className="LinkText">
                        <a href="https://cs61a.org/" target="_blank" rel="noopener noreferrer" className='RelevantCoursesLink'>
                            <Fade left>
                                <div className="Courses"><p className='RelevantCoursesP'>CS61A - Structure and Interpretation of Computer Programs</p></div>
                            </Fade>
                        </a>
                    </div>
                </Fade>
                <Fade right>
                    <div className="LinkText">
                        <a href="https://inst.eecs.berkeley.edu/~cs61b/" target="_blank" rel="noopener noreferrer" className='RelevantCoursesLink'>
                            <Fade right>
                                <div className="Courses"><p className='RelevantCoursesP'>CS61B - Java and Data Structures</p></div>
                            </Fade>
                        </a>
                    </div>
                </Fade>
                <Fade left>
                    <div className="LinkText">
                        <a href="https://inst.eecs.berkeley.edu/~cs61c/" target="_blank" rel="noopener noreferrer" className='RelevantCoursesLink'>
                            <Fade left>
                                <div className="Courses"><p className='RelevantCoursesP'>CS61C - C, Mips, Computer Architecture</p></div>
                            </Fade>
                        </a>
                    </div>
                </Fade>
                <Fade right>
                    <div className="LinkText">
                        <a href="https://inst.eecs.berkeley.edu/~cs70/" target="_blank" rel="noopener noreferrer" className='RelevantCoursesLink'>
                            <Fade right>
                                <div className="Courses"><p className='RelevantCoursesP'>CS70 - Discrete Math</p></div>
                            </Fade>
                        </a>
                    </div>
                </Fade>
                <Fade left>
                    <div className="LinkText">
                        <a href="https://cs170.org/" target="_blank" rel="noopener noreferrer" className='RelevantCoursesLink'>
                            <Fade left>
                                <div className="Courses"><p className='RelevantCoursesP'>CS170 -Algorithms</p></div>
                            </Fade>
                        </a>
                    </div>
                </Fade>
                <Fade right>
                    <div className="LinkText">
                        <a href="http://inst.eecs.berkeley.edu/~cs188/" target="_blank" rel="noopener noreferrer" className='RelevantCoursesLink'>
                            <Fade right>
                                <div className="Courses"><p className='RelevantCoursesP'>CS188 - AI & ML Artificial Intelligence</p></div>
                            </Fade>
                        </a>
                    </div>
                </Fade>
                <Fade left>
                    <div className="LinkText">
                        <a href="https://www.eecs189.org/" target="_blank" rel="noopener noreferrer" className='RelevantCoursesLink'>
                            <Fade left>
                                <div className="Courses"><p className='RelevantCoursesP'>CS189 - Machine Learning</p></div>
                            </Fade>
                        </a>
                    </div>
                </Fade>
                <Fade right>
                    <div className="LinkText">
                        <a href="http://cs160.ninja/" target="_blank" rel="noopener noreferrer" className='RelevantCoursesLink'>
                            <Fade right>
                                <div className="Courses"><p className='RelevantCoursesP'>CS160 - User Interfaces</p></div>
                            </Fade>
                        </a>
                    </div>
                </Fade>
                <Fade left>
                    <div className="LinkText">
                        <a href="https://cs162.eecs.berkeley.edu/" target="_blank" rel="noopener noreferrer" className='RelevantCoursesLink'>
                            <Fade left>
                                <div className="Courses"><p className='RelevantCoursesP'>CS162 - Operating Systems</p></div>
                            </Fade>
                        </a>
                    </div>
                </Fade>
                <Fade right>
                    <div className="LinkText">
                        <a href="https://cs184.eecs.berkeley.edu/" target="_blank" rel="noopener noreferrer" className='RelevantCoursesLink'>
                            <Fade right>
                                <div className="Courses"><p className='RelevantCoursesP'>CS184 - Graphics</p></div>
                            </Fade>
                        </a>
                    </div>
                </Fade>
                <Fade left>
                    <div className="LinkText">
                        <a href="https://math.berkeley.edu/courses/choosing/course-descriptions" target="_blank" rel="noopener noreferrer" className='RelevantCoursesLink'>
                            <Fade left>
                                <div className="Courses"><p className='RelevantCoursesP'>MATH104 - Real Analysis</p></div>
                            </Fade>
                        </a>
                    </div>
                </Fade>
                <Fade right>
                    <div className="LinkText">
                        <a href="https://math.berkeley.edu/courses/choosing/course-descriptions" target="_blank" rel="noopener noreferrer" className='RelevantCoursesLink'>
                            <Fade right>
                                <div className="Courses"><p className='RelevantCoursesP'>MATH185 - Complex Analysis</p></div>
                            </Fade>
                        </a>
                    </div>
                </Fade>
                <Fade left>
                    <div className="LinkText">
                        <a href="https://math.berkeley.edu/courses/choosing/course-descriptions" target="_blank" rel="noopener noreferrer" className='RelevantCoursesLink'>
                            <Fade left>
                                <div className="Courses"><p className='RelevantCoursesP'>MATH113 - Abstract Algebra</p></div>
                            </Fade>
                        </a>
                    </div>
                </Fade>
                <Fade right>
                    <div className="LinkText">
                        <a  href="https://math.berkeley.edu/courses/choosing/course-descriptions" target="_blank" rel="noopener noreferrer" className='RelevantCoursesLink'>
                            <Fade right>
                                <div className="Courses"><p className='RelevantCoursesP'>MATH110 - Linear Algebra</p></div>
                            </Fade>
                        </a>
                    </div>
                </Fade>
                <Fade left>
                    <div className="LinkText">
                        <a href="https://math.berkeley.edu/courses/choosing/course-descriptions" target="_blank" rel="noopener noreferrer" className='RelevantCoursesLink'>
                            <Fade left>
                                <div className="Courses"><p className='RelevantCoursesP'>MATH128A - Numerical Analysis</p></div>
                            </Fade>
                        </a>
                    </div>
                </Fade>
            </div>
        )
    }
}

export default RelevantCourses;
