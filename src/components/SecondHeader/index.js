import React from 'react';

import './styles.scss';
import '../container.scss';

import Menu from "../Menu";

class SecondHeader extends React.Component {
    render() {
        return (
            <div style={{width: '100%'}}>
                <div className = "aback"> 
                    <div className = "container">
                        <div className = 'amenu-container'><Menu/></div> 
                    </div>                       
                    <div className = "aheader">                                                                       
                        <div className = "about">
                            <p style = {{textTransform: 'uppercase'}}>{this.props.data}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SecondHeader;