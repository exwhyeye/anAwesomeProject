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
                        <div className = 'menu-container'><Menu/></div> 
                    </div>                       
                    <div className = "header">                                                                       
                        <div className = "naming">
                            <div className = "we-are">
                                {this.props.data.split('\\n')[0]}
                            </div>
                            <div className = "creative-agency">
                                {this.props.data.split('\\n')[1]}
                            </div>
                        </div>
                    </div>
                </div>
                

                <div className = "subheader" >
                    <div className = "container"> 
                        <a href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ" className = "button">ПОДРОБНЕЕ</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeHeader;