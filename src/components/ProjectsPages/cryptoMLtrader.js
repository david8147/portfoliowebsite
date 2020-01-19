import React, {Component} from 'react';
import Projects from '../Projects'
import ProjectPagesHeader from "./ProjectPagesHeader";
import Fade from "react-reveal/Fade";
class cryptoMLtrader extends Component{
    render(){
        return(
            <div>
                <div style={{background:'linear-gradient(70deg, #FF512F, #F09819)'}}>
                    <ProjectPagesHeader/>
                    <div style={{display:'flex',height:'400px', justifyContent:'center', alignItems:'center', }}>
                        <Fade up>
                            <p >cryptoMLtrader</p>
                        </Fade>
                    </div>
                </div>
                <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center',backgroundColor:'grey'}}>
                    <p>
                        A Python program that automatically buys and sells cryptocurrency from Bittrex exchange
                        Utilized various strategies including: Hold_Until_Strategy, Keltner_Channel_Strategy, ML_Strategy, Percent_Window_Strategy, Top_Reddit_Strategy

                        First thing to do was to make a program that connects to Bittrex and Coinmarketcap and buys and sell coins using a basic strategy to figure out baseline and compare with other strategies.
                        Next thing to do was to figure out the actual strategy. I utilized various strategies that are common in stock trading: Keltner Channel Strategy
                        I utilized various forms of strategies and thus included mentions in Reddit.com/r/CryptoCurrency y would often mention coins days or months before they would shoot up astronomically high, then organize the coins and rank them by the total upvotes associated with them as well as analyze the sentiment of what is being said about each coin using the Python Natural Language Toolkit.

                        The last strategy to be implemented was using Machine Learning:
                        The heaviest work was to gather data of cryptocurrencies in order to create training data and validation data.
                        Because there weren't any API that provided more information regarding historical data of the coins other than price, volume.
                        Because I needed more data to give to the machine to train, this meant I had to gather data myself - This took roughly a month.
                        After gathering data, I used Tensorflow in order to come up with the ideal model which involved fine-tuning variables and trying different layers. A lot of it was testing and waiting for the result.
                        After the model performs above a certain threshold, the actual strategy to buy a certain coin was if the model gives more than a 80% confidence that buying that coin will result in an increase in price.

                    </p>
                    <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                        <img style={style.projImages} alt="" src={require('../../images/ProjectImages/cryptoMLPredictionTrader/cryptoMLPredictionTrader1.png')}/>
                        <p>Tensorboard - Tensorflow Visualization Toolkit</p>
                        <p>Tracking and visualizing metrics such as loss and accuracy per each epoch</p>
                    </div>
                    <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                        <img style={style.projImages} alt="" src={require('../../images/ProjectImages/cryptoMLPredictionTrader/cryptoMLPredictionTrader3.png')}/>
                        <p>Machine Training - Accuracy increases and Loss decreases per each epoch</p>
                    </div>
                    <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                        <img style={style.projImages} alt="" src={require('../../images/ProjectImages/cryptoMLPredictionTrader/cryptoMLPredictionTrader2.png')}/>
                        <p>Uses Bittrex as the exchange to automatically buy and sell coins</p>
                    </div>
                    <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                        <img style={style.projImages} alt="" src={require('../../images/ProjectImages/cryptoMLPredictionTrader/keltner2.jpg')}/>
                        <p>Keltner Channel</p>
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
        // padding:20,
    }
}
export default cryptoMLtrader;
