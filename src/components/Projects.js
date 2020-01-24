import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import Fade from 'react-reveal/Fade';

class Projects extends Component{
    render(){
        return(
            <div style={{display:'flex', flexDirection:'column', justifyContents:'center', alignItems:'center', width:'60%'}}>
                <h1 style={{color:'yellow', marginBottom:50, textDecoration: 'underline'}}>PROJECTS</h1>
                <div style={{display:'flex', flexDirection:'row', justifyContents:'center', alignItems:'center'}}>
                    <Fade left>
                        <div style={style.text}>
                            <Link style={{textDecoration: 'inherit'}} to='./cryptocurrencyWallet' className="Link" target="_top">
                                <img style={style.projImagesReactNative} alt="" src={require('../images/ProjectImages/cryptocurrencywallet/cryptocurrencywallet1-1.png')}/>
                                <div style={{display:'flex', flexDirection:'column', justifyContents:'center', alignItems:'center'}}>
                                    <p style={{textDecoration: 'none', color:'white', margin:0}}>CryptocurrencyWallet</p>
                                    <p style={{textDecoration: 'none', color:'#0ddb17', margin:0}}>[React-Native]</p>
                                </div>
                            </Link>
                        </div>
                    </Fade>
                    <Fade right>
                        <div style={style.text}>
                            <Link style={{textDecoration: 'inherit'}} to='./radii' className="Link" target="_top">
                                <img style={style.projImagesReactNative} alt="" src={require('../images/ProjectImages/radii/radii1-1.png')}/>
                                <div style={{display:'flex', flexDirection:'column', justifyContents:'center', alignItems:'center'}}>
                                    <p style={{textDecoration: 'none', color:'white', margin:0}}>Radii</p>
                                    <p style={{textDecoration: 'none', color:'#0ddb17', margin:0}}>[React-Native]</p>
                                </div>
                            </Link>
                        </div>
                    </Fade>
                </div>
                <Fade left>
                    <div style={{display:'flex', flexDirection:'row', justifyContents:'center', alignItems:'center'}}>
                        <div style={style.text}>
                            <Link style={{textDecoration: 'inherit'}} to='./cryptoMLtrader' className="Link" target="_top">
                                <img style={style.projImages} alt="" src={require('../images/ProjectImages/cryptoMLPredictionTrader/cryptoMLPredictionTrader1.png')}/>
                                <div style={{display:'flex', flexDirection:'column', justifyContents:'center', alignItems:'center'}}>
                                    <p style={{textDecoration: 'none', color:'white', margin:0}}>CryptoMLTrader</p>
                                    <p style={{textDecoration: 'none', color:'#03d3fc', margin:0}}>[Python]</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </Fade>
                <Fade right>
                    <div style={{display:'flex', flexDirection:'row', justifyContents:'center', alignItems:'center'}}>
                        <div style={style.text}>
                            <Link style={{textDecoration: 'inherit'}} to='./wheelthere' className="Link" target="_top">
                                <img style={style.projImages} alt="" src={require('../images/ProjectImages/wheelthere/wheelthere1.png')}/>
                                <div style={{display:'flex', flexDirection:'column', justifyContents:'center', alignItems:'center'}}>
                                    <p style={{textDecoration: 'none', color:'white', margin:0}}>Wheelthere</p>
                                    <p style={{textDecoration: 'none', color:'#fc0328', margin:0}}>[React]</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </Fade>
                <Fade left>
                    <div style={{display:'flex', flexDirection:'row', justifyContents:'center', alignItems:'center'}}>
                        <div style={style.text}>
                            <Link style={{textDecoration: 'inherit'}} to='./DataScraper' className="Link" target="_top">
                                <img style={style.projImages} alt="" src={require('../images/ProjectImages/dataScraper/datascraper3.png')}/>
                                <div style={{display:'flex', flexDirection:'column', justifyContents:'center', alignItems:'center'}}>
                                    <p style={{textDecoration: 'none', color:'white', margin:0, marginTop:20}}>DataScraper</p>
                                    <p style={{textDecoration: 'none', color:'#03d3fc', margin:0}}>[Python]</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </Fade>
            </div>

        )
    }
}


const style = {
   projImages:{
       height:'100%',
       width:'100%',
       marginBottom:-40,
   },
    text:{
        display:'flex',
        flexDirection:'column',
        justifyContents:'center',
        alignItems:'center',
        padding:20,
    },
    projImagesReactNative:{
        height: '80vh',
        width:'20vw',
    }
}
export default Projects;
