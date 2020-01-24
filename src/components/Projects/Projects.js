import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import Fade from 'react-reveal/Fade';
import './Projects.css'
class Projects extends Component{
    render(){
        return(
            <div className='ProjectsMain'>
                <h1 className='ProjectsMainText'>PROJECTS</h1>
                <div className='ProjectsMainDiv'>
                    <Fade left>
                        <div className='ProjectsText'>
                            <Link className='ProjectsLink' to='./cryptocurrencyWallet'  target="_top">
                                <img className='ProjectsProjImagesReactNative' alt="" src={require('../../images/ProjectImages/cryptocurrencywallet/cryptocurrencywallet1-1.png')}/>
                                <div className='ProjectsInnerDiv'>
                                    <p className='ProjectsProjText'>CryptocurrencyWallet</p>
                                    <p className='ProjectReactNative'>[React-Native]</p>
                                </div>
                            </Link>
                        </div>
                    </Fade>
                    <Fade right>
                        <div className='ProjectsText'>
                            <Link  to='./radii' className="ProjectsLink" target="_top">
                                <img className='ProjectsProjImagesReactNative' alt="" src={require('../../images/ProjectImages/radii/radii1-1.png')}/>
                                <div className='ProjectsInnerDiv'>
                                    <p className='ProjectsProjText'>Radii</p>
                                    <p className='ProjectReactNative'>[React-Native]</p>
                                </div>
                            </Link>
                        </div>
                    </Fade>
                </div>
                <Fade left>
                    <div className='ProjectsMainDiv'>
                        <div className='ProjectsText'>
                            <Link  to='./cryptoMLtrader' className="ProjectsLink" target="_top">
                                <img className='ProjectsprojImages' alt="" src={require('../../images/ProjectImages/cryptoMLPredictionTrader/cryptoMLPredictionTrader1.png')}/>
                                <div className='ProjectsInnerDiv'>
                                    <p className='ProjectsProjText'>CryptoMLTrader</p>
                                    <p className='ProjectPython'>[Python]</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </Fade>
                <Fade right>
                    <div className='ProjectsMainDiv'>
                        <div className='ProjectsText'>
                            <Link to='./wheelthere' className="ProjectsLink" target="_top">
                                <img className='ProjectsprojImages' alt="" src={require('../../images/ProjectImages/wheelthere/wheelthere1.png')}/>
                                <div className='ProjectsInnerDiv'>
                                    <p className='ProjectsProjText'>Wheelthere</p>
                                    <p className='ProjectReact'>[React]</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </Fade>
                <Fade left>
                    <div className='ProjectsMainDiv'>
                        <div className='ProjectsText'>
                            <Link  to='./DataScraper' className="ProjectsLink" target="_top">
                                <img className='ProjectsprojImages' alt="" src={require('../../images/ProjectImages/dataScraper/datascraper3.png')}/>
                                <div className='ProjectsInnerDiv'>
                                    <p className='ProjectsProjTextBottom'>DataScraper</p>
                                    <p className='ProjectPython'>[Python]</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </Fade>
            </div>

        )
    }
}


export default Projects;
