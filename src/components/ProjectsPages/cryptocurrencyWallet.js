import React, {Component} from 'react';
import Projects from '../Projects'
class cryptocurrencyWallet extends Component{
    render(){
        return(
            <div style={{ height:600, display:'flex', flexDirection:'column', justifyContents:'center', alignItems:'center'}}>
                cryptocurrencyWallet
                <img style={style.projImages} alt="" src={require('../../images/ProjectImages/cryptocurrencywallet/cryptocurrencywallet1-1.png')}/>
                <img style={style.projImages} alt="" src={require('../../images/ProjectImages/cryptocurrencywallet/cryptocurrencywallet2-1.png')}/>
                <img style={style.projImages} alt="" src={require('../../images/ProjectImages/cryptocurrencywallet/cryptocurrencywallet3-1.png')}/>
                <img style={style.projImages} alt="" src={require('../../images/ProjectImages/cryptocurrencywallet/cryptocurrencywallet4-1.png')}/>
                <img style={style.projImages} alt="" src={require('../../images/ProjectImages/cryptocurrencywallet/cryptocurrencywallet5-1.png')}/>
                <Projects/>
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
export default cryptocurrencyWallet;
