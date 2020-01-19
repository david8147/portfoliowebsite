import React, {Component} from 'react';

class radii extends Component{
    render(){
        return(
            <div style={{ height:600, display:'flex', flexDirection:'column', justifyContents:'center', alignItems:'center'}}>
                radii
                <img style={style.projImages} alt="" src={require('../../images/ProjectImages/radii/radii1-1.png')}/>
                <img style={style.projImages} alt="" src={require('../../images/ProjectImages/radii/radii2-1.png')}/>
                <img style={style.projImages} alt="" src={require('../../images/ProjectImages/radii/radii3-1.png')}/>
                <img style={style.projImages} alt="" src={require('../../images/ProjectImages/radii/radii4-1.png')}/>
                <img style={style.projImages} alt="" src={require('../../images/ProjectImages/radii/radii5-1.png')}/>
                <img style={style.projImages} alt="" src={require('../../images/ProjectImages/radii/radii6-1.png')}/>
                <img style={style.projImages} alt="" src={require('../../images/ProjectImages/radii/radii7-1.png')}/>
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
export default radii;
