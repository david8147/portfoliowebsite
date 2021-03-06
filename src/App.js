import React,{Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './components/Home/Home.js'
import cryptocurrencyDataScraper from './components/ProjectsPages/cryptocurrencyDataScraper'
import cryptocurrencyWallet from './components/ProjectsPages/cryptocurrencyWallet'
import cryptoMLtrader from './components/ProjectsPages/cryptoMLtrader'
import radii from './components/ProjectsPages/radii'
import wheelthere from './components/ProjectsPages/wheelthere'

class App extends Component{
    render(){
        return(
            <BrowserRouter>
                <div>
                    <Route exact={true} path='/' component={Home}/>
                    <Route path='/cryptoMLtrader' component={cryptoMLtrader}/>
                    <Route path='/cryptocurrencyWallet' component={cryptocurrencyWallet}/>
                    <Route path='/radii' component={radii}/>
                    <Route path='/wheelthere' component={wheelthere}/>
                    <Route path='/DataScraper' component={cryptocurrencyDataScraper}/>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;
