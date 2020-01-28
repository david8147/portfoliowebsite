import React, {Component} from 'react';
import Projects from '../Projects/Projects'
import ProjectPagesHeader from "./ProjectPagesHeader";
import Fade from "react-reveal/Fade";
import github from "../../images/largegithub.png";
class cryptoMLtrader extends Component{
    render(){
        return(
            <div>
                <div style={{background:'linear-gradient(to bottom right, green, yellow)'}}>
                    <ProjectPagesHeader/>
                    <div style={{display:'flex',height:'400px', justifyContent:'center', alignItems:'center', }}>
                        <Fade up>
                            <p style={{fontSize:50, color:'white', fontWeight:'bold'}}>CryptoMLTrader: Python</p>
                        </Fade>
                    </div>
                </div>

                <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center',backgroundColor:'#00001c'}}>
                    <div style={{width:'80%', marginBottom:50}}>
                        <p style={{color:'yellow'}}>
                            A Python program that automatically buys and sells cryptocurrency from Bittrex exchange.
                            It utilizes various strategies including: Machine Learning Strategy, Hodl strategy, Keltner Channel Strategy, Percent Window Strategy, Top Reddit Strategy
                        </p>
                        <p style={{color:'yellow'}}>
                            The first thing to do was to make a program that connects to Bittrex and Coinmarketcap and buys and sells coins using a basic strategy to figure out a baseline and to compare with other strategies.
                            Next thing to do was to figure out the actual strategies in order to maximize profit. I initially utilized various strategies that are commonly practiced in stock trading such as utilizing the Keltner Channel.
                        </p>
                        <p style={{color:'yellow'}}>
                            I utilized other forms of strategies such as examining mentions in Reddit.com/r/CryptoCurrency. The thread would often mention coins days or even months before their prices would shoot up astronomically high.
                            I gather data from the Reddit thread and then organize the coins by ranking them by the total upvotes associated with them as well as analyzing the sentiment of what is being said about each coin using the Python Natural Language Toolkit.
                        </p>
                        <p style={{color:'yellow'}}>
                            The last strategy to be implemented was using Machine Learning. The heaviest work was to gather data of cryptocurrencies in order to create training data and validation data.
                            There weren't any APIs that provided more information regarding historical data of the coins other than price and volume.
                            Because I needed more data to give to the machine to train, this meant I had to gather data myself - This took roughly a month.
                            After gathering data, I used Tensorflow in order to come up with the ideal model which involved fine-tuning variables and trying different layers.
                            If the model performs above a certain threshold on the validation data, the actual strategy to buy a certain coin was if the model gives more than a 90% confidence that buying that coin at that moment will result in an increase in price.
                        </p>
                    </div>
                    <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around', alignItems:'center', width:'80%', marginBottom:60}}>
                        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', textAlign:'center'}}>
                            <img style={style.projImages} alt="" src={require('../../images/ProjectImages/cryptoMLPredictionTrader/cryptoMLPredictionTrader1.png')}/>
                            <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                                <p style={{color:'yellow', marginBottom:-10, marginTop:-40}}>Tensorboard - Tensorflow Visualization Toolkit</p>
                                <p style={{color:'yellow',}}>Tracking and visualizing metrics such as loss and accuracy per each epoch through graphs</p>
                            </div>
                        </div>
                    </div>
                    <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around', alignItems:'center', width:'80%', marginBottom:60}}>
                        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', textAlign:'center'}}>
                            <img style={style.projImages} alt="" src={require('../../images/ProjectImages/cryptoMLPredictionTrader/cryptoMLPredictionTrader3.png')}/>
                            <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                                <p style={{color:'yellow', marginBottom:-10, marginTop:0}}>Machine Training - Accuracy increases and Loss decreases per each epoch</p>
                                <p style={{color:'yellow'}}>Tracking metrics such as loss and accuracy per each epoch in numbers</p>
                            </div>
                        </div>
                    </div>
                    <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around', alignItems:'center', width:'80%', marginBottom:60}}>
                        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', textAlign:'center'}}>
                            <img style={style.projImages} alt="" src={require('../../images/ProjectImages/cryptoMLPredictionTrader/cryptoMLPredictionTrader2.png')}/>
                            <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                                <p style={{color:'yellow', marginTop:-60}}>Uses Bittrex as the exchange to automatically buy and sell coins</p>
                            </div>
                        </div>
                    </div>
                    <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around', alignItems:'center', width:'80%', marginBottom:60}}>
                        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', textAlign:'center'}}>
                            <img style={style.projImages} alt="" src={require('../../images/ProjectImages/cryptoMLPredictionTrader/keltner2.jpg')}/>
                            <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                                <p style={{color:'yellow'}}>Keltner Channel</p>
                            </div>
                        </div>
                    </div>
                    <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', textAlign:'center', marginBottom:100}}>
                        <a style={{textDecoration:'inherit', color:'white'}}
                           href={"https://github.com/david8147/CryptoMLPredictionTrader"} className="Link" target="_blank" rel="noopener noreferrer">
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
        // height:'600px',
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
export default cryptoMLtrader;
