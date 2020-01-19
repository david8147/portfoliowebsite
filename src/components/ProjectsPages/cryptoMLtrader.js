import React, {Component} from 'react';
import Projects from '../Projects'
import ProjectPagesHeader from './ProjectPagesHeader'
class cryptoMLtrader extends Component{
    render(){
        return(
            <div>
                <div style={{ display:'flex', flexDirection:'row', justifyContents:'start'}}>
                    <ProjectPagesHeader/>
                </div>
                cryptoMLtrader
                <img style={style.projImages} alt="" src={require('../../images/ProjectImages/cryptoMLPredictionTrader/cryptoMLPredictionTrader1.png')}/>
                <img style={style.projImages} alt="" src={require('../../images/ProjectImages/cryptoMLPredictionTrader/cryptoMLPredictionTrader3.png')}/>
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
export default cryptoMLtrader;
