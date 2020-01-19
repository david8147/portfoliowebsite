import React, {Component} from 'react';

class cryptoMLtrader extends Component{
    render(){
        return(
            <div style={{ height:600, display:'flex', flexDirection:'column', justifyContents:'center', alignItems:'center'}}>
                cryptoMLtrader
                <img style={style.projImages} alt="" src={require('../../images/ProjectImages/cryptoMLPredictionTrader/cryptoMLPredictionTrader1.png')}/>
                <img style={style.projImages} alt="" src={require('../../images/ProjectImages/cryptoMLPredictionTrader/cryptoMLPredictionTrader3.png')}/>
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
export default cryptoMLtrader;
