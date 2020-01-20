import React, {Component} from 'react';
import {Link} from 'react-router-dom'
class Projects extends Component{
    render(){
        return(
            <div style={{display:'flex', flexDirection:'column', justifyContents:'center', alignItems:'center'}}>
                <h1>Projects</h1>
                <div style={{display:'flex', flexDirection:'row', justifyContents:'center', alignItems:'center'}}>
                    <Link to='./cryptoMLtrader' className="Link" target="_top">
                        <div style={style.text}>
                            <img style={style.projImages} alt="" src={require('../images/ProjectImages/cryptoMLPredictionTrader/cryptoMLPredictionTrader1.png')}/>
                            <p>cryptoMLtrader</p>
                        </div>
                    </Link>
                    <Link to='./cryptocurrencyWallet' className="Link" target="_top">
                        <div style={style.text}>
                            <img style={style.projImages} alt="" src={require('../images/ProjectImages/cryptocurrencywallet/cryptocurrencywallet1-1.png')}/>
                            <p>cryptocurrencyWallet</p>
                        </div>
                    </Link>
                    <Link to='./radii' className="Link" target="_top">
                        <div style={style.text}>
                            <img style={style.projImages} alt="" src={require('../images/ProjectImages/radii/radii1-1.png')}/>
                            <p>radii</p>
                        </div>
                    </Link>
                </div>
                <div style={{display:'flex', flexDirection:'row', justifyContents:'center', alignItems:'center'}}>
                    <Link to='./wheelthere' className="Link" target="_top">
                        <div style={style.text}>
                            <img style={style.projImages} alt="" src={require('../images/ProjectImages/wheelthere/wheelthere1.png')}/>
                            <p>wheelthere</p>
                        </div>
                    </Link>
                    <Link to='./DataScraper' className="Link" target="_top">
                        <div style={style.text}>
                            <img style={style.projImages} alt="" src={require('../images/ProjectImages/dataScraper/datascraper3.png')}/>
                            <p>DataScraper</p>
                        </div>
                    </Link>
                </div>
            </div>

        )
    }
}
const style = {
   projImages:{
       height:'100%',
       width:'100%',

   },
    text:{
       display:'flex',
        flexDirection:'column',
        justifyContents:'center',
        alignItems:'center',
        padding:20,
    }
}
export default Projects;
