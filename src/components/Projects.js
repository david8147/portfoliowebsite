import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class Projects extends Component{
    render(){
        return(
            <div style={{display:'flex', flexDirection:'row', justifyContents:'center', alignItems:'center'}}>
                Projects:
                <Link to='./cryptoMLtrader' className="Link" target="_blank">
                    <div>
                        <img style={{height:300, width: 200}} alt="" src={require('../images/ProjectImages/dataScraper/datascraper1.jpg')}/>
                    </div>
                </Link>
                <Link to='./cryptocurrencyWallet' className="Link" target="_blank">
                    <div>
                        <img style={{height:300, width: 200}} alt="" src={require('../images/ProjectImages/dataScraper/datascraper1.jpg')}/>
                    </div>
                </Link>
                <Link to='./radii' className="Link" target="_blank">
                    <div>
                        <img style={{height:300, width: 200}} alt="" src={require('../images/ProjectImages/dataScraper/datascraper1.jpg')}/>
                    </div>
                </Link>
                <Link to='./wheelthere' className="Link" target="_blank">
                    <div>
                        <img style={{height:300, width: 200}} alt="" src={require('../images/ProjectImages/dataScraper/datascraper1.jpg')}/>
                    </div>
                </Link>
                <Link to='./DataScraper' className="Link" target="_blank">
                    <div>
                        <img style={{height:300, width: 200}} alt="" src={require('../images/ProjectImages/dataScraper/datascraper1.jpg')}/>
                    </div>
                </Link>

            </div>
        )
    }
}
export default Projects;
