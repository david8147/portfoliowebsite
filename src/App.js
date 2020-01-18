import React,{Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import One from './components/One.js'
import Two from './components/Two.js'
import Home from './components/Home.js'

class App extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <BrowserRouter>
                <div>
                    <Route exact={true} path="/" component={Home}/>
                    <Route path='/one' component={One}/>
                    <Route path='/two' component={Two}/>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;
