import Home from './Home.js'
import React,{Component} from 'react';
import Component1 from './Component1'
import Component2 from './Component2'

class Main extends Component{
    render(){
        return(
            <div>
                {/*<Component2/>*/}
                <Component1/>
                <Home/>
            </div>

        )
    }
}

export default Main
