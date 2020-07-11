import React from 'react';
import AfterImage from "afterimage";

import './styles.scss';
import '../container.scss';

class Team extends React.Component {
    render() {
        return (
            <div className = "content-box-team" data-aos = 'fade-up' data-aos-once="true"> 
                <div className = "container"> 
                    <h1>{this.props.data.getPage.sections[1].header}</h1>
                    <p>{this.props.data.getPage.sections[1].subheader}</p>
                    <div className = "photos-container">
                        {(this.props.data.teams.map(({index, image, Name}) => (                      
                            <div key = {index} className = "photo">                               
                                <AfterImage
                                    src = {`http://84.201.139.254:1337${image.url}`} 
                                    alt = {image.alternativeText}
                                    className = 'stuff'
                                    withPlaceholder = {false}
                                />
                                <div class="middle">
                                    <div className = "name">{Name}</div>   
                                </div>                     
                            </div>
                        )))}
                    </div>
                </div>
            </div>
        )
    }
}

export default Team;