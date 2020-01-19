import React, {Component} from 'react';

class cryptocurrencyDataScraper extends Component{
    render(){
        return(
            <div style={{ height:600, display:'flex', flexDirection:'column', justifyContents:'center', alignItems:'center'}}>
                cryptocurrencyDataScraper
                <img style={style.projImages} alt="" src={require('../../images/ProjectImages/dataScraper/datascraper1.jpg')}/>
                <img style={style.projImages} alt="" src={require('../../images/ProjectImages/dataScraper/datascraper2.jpeg')}/>
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
export default cryptocurrencyDataScraper;
