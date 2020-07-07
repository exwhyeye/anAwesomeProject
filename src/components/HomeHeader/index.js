import React from 'react';

import './styles.scss';
import '../container.scss';

import Menu from "../Menu";

class HomeHeader extends React.Component {
    render() {
        return (
            <div style={{width: '100%'}}>
                <div className = "back"> 
                    <div className = "container">
                        <div className = 'menu_container'><Menu/></div> 
                    </div>                       
                    <div className = "header">                                                                       
                        <div className = "naming">
                            <div className = "we_are">
                                <p>WE'RE</p>
                            </div>
                            <div className = "creative_agency">
                                {/*<p>CREATIVE AGENCY</p>*/}
                            </div>
                        </div>
                    </div>
                </div>
                

                <div className = "subheader" >
                    <div className = "container"> 
                        <a href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ" className = "button">READ MORE</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeHeader;