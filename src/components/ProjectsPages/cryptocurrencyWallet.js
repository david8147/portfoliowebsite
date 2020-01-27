import React, {Component} from 'react';
import Projects from '../Projects/Projects'
import ProjectPagesHeader from "./ProjectPagesHeader";
import Fade from "react-reveal/Fade";
import github from "../../images/largegithub.png"

class cryptocurrencyWallet extends Component{
    render(){
        return(
            <div>
                <div style={{background:'linear-gradient(to bottom right, #1a03ab, pink)'}}>
                    <ProjectPagesHeader/>
                    <div style={{display:'flex',height:'400px', justifyContent:'center', alignItems:'center', }}>
                        <Fade up>
                            <p style={{fontSize:50, color:'white', fontWeight:'bold'}}>CryptocurrencyWallet: React-Native</p>
                        </Fade>
                    </div>
                </div>
                <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center',backgroundColor:'#00001c'}}>
                    <div style={{width:'80%', marginBottom:50}}>
                        <p style={{color:'yellow'}}>
                            This React-Native app lets the user keep track of all the user's cryptocurrencies from the three major cryptocurrency exchanges
                            (Binance, Bittrex, Kucoin) by combining them into one portfolio. The app presents all the cryptocurrency coins in total and also allows the user to add and remove coins manually.
                        </p>
                        <p style={{color:'yellow'}}>

                        </p>
                        <p style={{color:'yellow'}}>
                            When the app is launched or refreshed, the app uses the entered API keys of all three exchanges to gather all the coin balances.
                            Then it combines the manually entered coins to present the aggregated coin balances.
                            The app also shows the 1h, 24h, 7d changes in percentages for each held coins and also for the total portfolio.
                        </p>

                    </div>

                    <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around', alignItems:'center', width:'80%', marginBottom:30}}>
                        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', textAlign:'center'}}>
                            <img style={style.projImages} alt="" src={require('../../images/ProjectImages/cryptocurrencywallet/cryptocurrencywallet8-1.png')}/>
                            <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                                <p style={{color:'yellow'}}>Main Screen when first launched</p>
                            </div>
                        </div>
                        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', textAlign:'center'}}>
                            <img style={style.projImages} alt="" src={require('../../images/ProjectImages/cryptocurrencywallet/cryptocurrencywallet6-1.png')}/>
                            <p style={{color:'yellow'}}>Can remove all the coins initially set</p>
                        </div>
                        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', textAlign:'center'}}>
                            <img style={style.projImages} alt="" src={require('../../images/ProjectImages/cryptocurrencywallet/cryptocurrencywallet1-1.png')}/>
                            <p style={{color:'yellow'}}>Main Screen with API keys entered</p>
                        </div>
                    </div>

                    <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around', alignItems:'center', width:'50%', marginBottom:30}}>
                        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', textAlign:'center'}}>
                            <img style={style.projImages} alt="" src={require('../../images/ProjectImages/cryptocurrencywallet/cryptocurrencywallet2-1.png')}/>
                            <p style={{color:'yellow'}}>Manually adding coins already bought through exchange</p>
                        </div>
                        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', textAlign:'center'}}>
                            <img style={style.projImages} alt="" src={require('../../images/ProjectImages/cryptocurrencywallet/cryptocurrencywallet3-1.png')}/>
                            <p style={{color:'yellow'}}>Menu to add new coins manually or to enter API keys for the exchanges</p>
                        </div>
                    </div>
                    <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around', alignItems:'center', width:'80%', marginBottom:30}}>
                        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', textAlign:'center'}}>
                            <img style={style.projImages} alt="" src={require('../../images/ProjectImages/cryptocurrencywallet/cryptocurrencywallet4-1.png')}/>
                            <p style={{color:'yellow'}}>Searching and Adding Coins</p>
                        </div>
                        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', textAlign:'center'}}>
                            <img style={style.projImages} alt="" src={require('../../images/ProjectImages/cryptocurrencywallet/cryptocurrencywallet7-1.png')}/>
                            <p style={{color:'yellow'}}>Searching and Adding Coins</p>
                        </div>
                        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', textAlign:'center'}}>
                            <img style={style.projImages} alt="" src={require('../../images/ProjectImages/cryptocurrencywallet/cryptocurrencywallet5-1.png')}/>
                            <p style={{color:'yellow'}}>Entering API key</p>
                        </div>
                    </div>
                    <div style={{width:'80%', marginBottom:5}}>
                        <p style={{color:'yellow'}}>
                            The motivation behind this app is that the only way to examine one's total portfolio in different exchanges is to either
                            log in to each exchange separately (which involves email-redirects and inputting two-factor authentication every time)
                            or use an app that only allows for manually adding coins (which requires the user to manually change the
                            portfolio after every trade).

                            This app allows for automatic updates to the portfolio whenever trade is made with the additional freedom to manually add coins.
                        </p>
                    </div>

                    <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', textAlign:'center', marginBottom:100}}>
                        <a style={{textDecoration:'inherit', color:'white'}}
                            href={"https://github.com/david8147/cryptocurrencywallet"} className="Link" target="_blank" rel="noopener noreferrer">
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
export default cryptocurrencyWallet;
