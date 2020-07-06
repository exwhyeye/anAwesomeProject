import React from 'react';

import './styles.scss';
import '../container.scss';

import Menu from "../Menu";

class AboutHeader extends React.Component {
    render() {
        return (
            <div style={{width: '100%'}}>
                <div className = "aback"> 
                    <div className = "container">
                        <div className = 'amenu_container'><Menu/></div> 
                    </div>                       
                    <div className = "aheader">                                                                       
                        <div className = "about">
                            <p>ABOUT US</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutHeader;