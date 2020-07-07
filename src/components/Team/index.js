import React from 'react';

import './styles.scss';
import '../container.scss';

class Team extends React.Component {
    render() {
        return (
            <div className = "content_box_team"> 
                <div className = "container"> 
                    <h1>{this.props.data.getPage.sections[1].header}</h1>
                    <p>{this.props.data.getPage.sections[1].subheader}</p>
                    <div className = "photos_container">
                        {(this.props.data.teams.map(({index, image}) => (
                            <div><img key = {index} src = {`http://84.201.139.254:1337${image.url}`} alt = {image.alternativeText}/></div>
                        )))}
                    </div>
                </div>
            </div>
        )
    }
}

export default Team;