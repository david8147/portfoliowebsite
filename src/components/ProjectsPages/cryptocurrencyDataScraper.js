import React, {Component} from 'react';
import Projects from '../Projects'
import ProjectPagesHeader from "./ProjectPagesHeader";
import Fade from "react-reveal/Fade";
class cryptocurrencyDataScraper extends Component{
    render(){
        return(
            <div>
                <div style={{background:'linear-gradient(70deg, #FF512F, #F09819)'}}>
                    <ProjectPagesHeader/>
                    <div style={{display:'flex',height:'400px', justifyContent:'center', alignItems:'center', }}>
                        <Fade up>
                            <p >cryptocurrencyDataScraper</p>
                        </Fade>
                    </div>
                </div>
                <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center',backgroundColor:'grey'}}>
                    <p> Python program that gathers data from Cryptocompare of the coins predetermined</p>
                    <p> Gathers data every 90 seconds of the coin's price, 24hr volume, 1hr volume, median, change/1hrs, change/24hrs</p>
                    <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                        <img style={style.projImages} alt="" src={require('../../images/ProjectImages/dataScraper/datascraper3.png')}/>
                        <p>Data collected</p>
                    </div>
                    <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                        <img style={style.projImages} alt="" src={require('../../images/ProjectImages/dataScraper/datascraper4.png')}/>
                        <p>Cryptocompare</p>
                    </div>

                    <Projects/>
                </div>

            </div>

        )
    }
}
const style = {
    projImages:{
        height:'600px',
        width:'300px',

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


