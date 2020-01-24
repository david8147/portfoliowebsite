import React, {Component} from 'react';
import Projects from '../Projects/Projects'
import ProjectPagesHeader from "./ProjectPagesHeader";
import Fade from "react-reveal/Fade";
import github from "../../images/largegithub.png";

class cryptocurrencyDataScraper extends Component{
    render(){
        return(
            <div>
                <div style={{background:'linear-gradient(to bottom right, purple, violet)'}}>
                    <ProjectPagesHeader/>
                    <div style={{display:'flex',height:'400px', justifyContent:'center', alignItems:'center', }}>
                        <Fade up>
                            <p style={{fontSize:50, color:'white', fontWeight:'bold'}}>CryptocurrencyDataScraper: Python</p>
                        </Fade>
                    </div>
                </div>

                <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center',backgroundColor:'#00001c'}}>
                    <div style={{width:'80%', marginBottom:50}}>
                        <p style={{color:'yellow'}}>
                            Python program that gathers data from Cryptocompare of the coins predetermined
                            Gathers data every 90 seconds of the coin's price, 24hr volume, 1hr volume, median, change/1hrs, change/24hrs
                        </p>
                    </div>
                    <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around', alignItems:'center', width:'80%', marginBottom:30}}>
                        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', textAlign:'center'}}>
                            <img style={style.projImages} alt="" src={require('../../images/ProjectImages/dataScraper/datascraper3.png')}/>
                            <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                                <p style={{color:'yellow'}}>Data collected</p>
                            </div>
                        </div>
                    </div>
                    <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around', alignItems:'center', width:'80%', marginBottom:30}}>
                        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', textAlign:'center'}}>
                            <img style={style.projImages} alt="" src={require('../../images/ProjectImages/dataScraper/datascraper4.png')}/>
                            <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                                <p style={{color:'yellow'}}>Cryptocompare</p>
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
export default cryptocurrencyDataScraper;


