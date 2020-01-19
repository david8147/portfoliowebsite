import React, {Component} from 'react';
import Projects from '../Projects'
import ProjectPagesHeader from "./ProjectPagesHeader";
import Fade from "react-reveal/Fade";
class cryptocurrencyWallet extends Component{
    render(){
        return(
            <div>
                <div style={{background:'linear-gradient(70deg, #FF512F, #F09819)'}}>
                    <ProjectPagesHeader/>
                    <div style={{display:'flex',height:'400px', justifyContent:'center', alignItems:'center', }}>
                        <Fade up>
                            <p >cryptocurrencyWallet</p>
                        </Fade>
                    </div>
                </div>
                <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center',backgroundColor:'grey'}}>
                    <p>This React-Native app lets the user keep track of the total portfolio from the three major cryptocurrency exchanges:
                        Binance, Bittrex, Kucoin.
                        The app presents all the cryptocurrency coins in total. The app also allows the user to add and remove coins manually.

                        The motivation behind this app is that the only way to examine one's portfolio is to either log in to each exchange
                        (which involves email-redirects and inputting two-factor authentication every time) or use an app that only allowed for
                        manually adding coins(which requires one to manually change the portfolio after every trade).

                        This app allows for automatic updates to the portfolio whenever trade is made with the additional ability to manually add coins.

                        When the app is launched or refreshed, the app uses the entered API keys of all three exchanges to gather all the coin balances
                        and the manually entered coins to give the aggregated data. This lets the app present the 1h, 24h, 7d changes in percentages for
                        each held coins and for the total portfolio value, overall percentage gains and losses.</p>

                    <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around', alignItems:'center', width:'80%'}}>
                        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                            <img style={style.projImages} alt="" src={require('../../images/ProjectImages/cryptocurrencywallet/cryptocurrencywallet8-1.png')}/>
                            <p>Main Screen when first launched</p>
                        </div>
                        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                            <img style={style.projImages} alt="" src={require('../../images/ProjectImages/cryptocurrencywallet/cryptocurrencywallet6-1.png')}/>
                            <p>Can remove all the coins initially set</p>
                        </div>
                        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                            <img style={style.projImages} alt="" src={require('../../images/ProjectImages/cryptocurrencywallet/cryptocurrencywallet1-1.png')}/>
                            <p>Main Screen with API keys entered</p>
                        </div>
                    </div>

                    <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around', alignItems:'center', width:'50%'}}>
                        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                            <img style={style.projImages} alt="" src={require('../../images/ProjectImages/cryptocurrencywallet/cryptocurrencywallet2-1.png')}/>
                            <p>Manually adding coins already bought through exchange</p>
                        </div>
                        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                            <img style={style.projImages} alt="" src={require('../../images/ProjectImages/cryptocurrencywallet/cryptocurrencywallet3-1.png')}/>
                            <p>Menu to add coins manually or enter API keys for the exchanges</p>
                        </div>
                    </div>
                    <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around', alignItems:'center', width:'80%'}}>
                        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                            <img style={style.projImages} alt="" src={require('../../images/ProjectImages/cryptocurrencywallet/cryptocurrencywallet4-1.png')}/>
                            <p>Searching and Adding Coins</p>
                        </div>
                        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                            <img style={style.projImages} alt="" src={require('../../images/ProjectImages/cryptocurrencywallet/cryptocurrencywallet7-1.png')}/>
                            <p>Searching and Adding Coins</p>
                        </div>
                        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                            <img style={style.projImages} alt="" src={require('../../images/ProjectImages/cryptocurrencywallet/cryptocurrencywallet5-1.png')}/>
                            <p>Entering API key</p>
                        </div>
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
