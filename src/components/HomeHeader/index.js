import React from 'react';

import './styles.scss';
import '../container.scss';
import Menu from "../Menu";

class HomeHeader extends React.Component {
    render() {
        return (    
            <div style={{width: '100%'}} className = 'whole-header' data-aos = 'fade-up'>
                <div className = "back">
                    <video 
                        loop="true" 
                        autoplay=""
                        className = "video" 
                        src = {`http://84.201.139.254:1337${this.props.data.getPage.sections[0].image_for_section.image.url}`}
                    />                    
                    <div className = "container">
                        <div className = 'menu-container'><Menu/></div> 
                    </div>                       
                    <div className = "header">                                                    
                        <div className = "naming">
                            <div className = "we-are">
                                {this.props.data.getPage.sections[0].header.split('\\n')[0]}
                            </div>
                            <div className = "creative-agency">
                                {this.props.data.getPage.sections[0].header.split('\\n')[1]}
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