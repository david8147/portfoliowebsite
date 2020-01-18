import React, {Component} from 'react';
import Fade from 'react-reveal/Fade';

class RelevantCourses extends Component{
    render(){
        return(
            <div style={{ display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', padding:10}}>
                <div>
                    <h1>Relevant Courses</h1>
                </div>
                <div className="LinkText">
                    <a href="https://cs61a.org/" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                        <Fade right>

                            <div className="Courses">CS61A - Structure and Interpretation of Computer Programs</div>
                        </Fade>
                    </a>
                </div>
                <div className="LinkText">
                    <a href="https://inst.eecs.berkeley.edu/~cs61b/" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                        <Fade right>

                            <div className="Courses">CS61B (Java and Data Structures)</div>
                        </Fade>
                    </a>
                </div>
                <div className="LinkText">
                    <a href="https://inst.eecs.berkeley.edu/~cs61c/" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                        <Fade right>

                            <div className="Courses">CS61C (C, Mips, Computer Architecture)</div>
                        </Fade>
                    </a>
                </div>
                <div className="LinkText">
                    <a href="https://inst.eecs.berkeley.edu/~cs70/" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                        <Fade right>

                            <div className="Courses">CS70 (Discrete Math)</div>
                        </Fade>
                    </a>
                </div>
                <div className="LinkText">
                    <a href="https://cs170.org/" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                        <Fade right>

                            <div className="Courses">CS170 (Algorithms)</div>
                        </Fade>
                    </a>
                </div>
                <div className="LinkText">
                    <a href="http://inst.eecs.berkeley.edu/~cs188/" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                        <Fade right>

                            <div className="Courses">CS188 (AI & ML Artificial Intelligence)</div>
                        </Fade>
                    </a>
                </div>
                <div className="LinkText">
                    <a href="https://www.eecs189.org/" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                        <Fade right>

                            <div className="Courses">CS189 (Machine Learning)</div>
                        </Fade>
                    </a>
                </div>
                <div className="LinkText">
                    <a href="http://cs160.ninja/" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                        <Fade right>

                            <div className="Courses">CS160 (User Interfaces)</div>
                        </Fade>
                    </a>
                </div>
                <div className="LinkText">
                    <a href="https://cs162.eecs.berkeley.edu/" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                        <Fade right>

                            <div className="Courses">CS162 (Operating Systems)</div>
                        </Fade>
                    </a>
                </div>
                <div className="LinkText">
                    <a href="https://cs184.eecs.berkeley.edu/" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                        <Fade right>

                            <div className="Courses">CS184 (Graphics)</div>
                        </Fade>
                    </a>
                </div>
                <div className="LinkText">
                    <a href="https://math.berkeley.edu/courses/choosing/course-descriptions" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                        <Fade right>

                            <div className="Courses">MATH104 (Real Analysis)</div>
                        </Fade>
                    </a>
                </div>
                <div className="LinkText">
                    <a href="https://math.berkeley.edu/courses/choosing/course-descriptions" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                        <Fade right>

                            <div className="Courses">MATH185	Complex Analysis</div>
                        </Fade>
                    </a>
                </div>
                <div className="LinkText">
                    <a href="https://math.berkeley.edu/courses/choosing/course-descriptions" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                        <Fade right>

                            <div className="Courses">MATH113	Abstract Algebra</div>
                        </Fade>
                    </a>
                </div>
                <div className="LinkText">
                    <a href="https://math.berkeley.edu/courses/choosing/course-descriptions" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                        <Fade right>

                            <div className="Courses">MATH110	Linear Algebra</div>
                        </Fade>
                    </a>
                </div>
                <div className="LinkText">
                    <a href="https://math.berkeley.edu/courses/choosing/course-descriptions" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                        <Fade right>

                            <div className="Courses">MATH128A	Numerical Analysis</div>
                        </Fade>
                    </a>
                </div>
            </div>
        )
    }
}
export default RelevantCourses;
