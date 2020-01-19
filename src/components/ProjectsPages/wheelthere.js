import React, {Component} from 'react';

class wheelthere extends Component{
    render(){
        return(
            <div style={{ height:600, display:'flex', flexDirection:'column', justifyContents:'center', alignItems:'center'}}>
                wheelthere
                <img style={style.projImages} alt="" src={require('../../images/ProjectImages/wheelthere/wheelthere1.png')}/>
                <img style={style.projImages} alt="" src={require('../../images/ProjectImages/wheelthere/wheelthere2.png')}/>
                <img style={style.projImages} alt="" src={require('../../images/ProjectImages/wheelthere/wheelthere3.png')}/>
                <img style={style.projImages} alt="" src={require('../../images/ProjectImages/wheelthere/wheelthere4.png')}/>
                <img style={style.projImages} alt="" src={require('../../images/ProjectImages/wheelthere/wheelthere5.png')}/>
                <img style={style.projImages} alt="" src={require('../../images/ProjectImages/wheelthere/wheelthere6.png')}/>
                <img style={style.projImages} alt="" src={require('../../images/ProjectImages/wheelthere/wheelthere7.png')}/>
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
export default wheelthere;
