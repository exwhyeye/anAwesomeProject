import React from 'react';

import './styles.scss';
import '../container.scss';

import TeamQuery from './TeamQuery'
import gql from 'graphql-tag';

class Test extends React.Component {

    tmp;

    componentDidMount() {
    
    }

    render() {
        return (
            <div className = "content_box_team"> 
                <div className = "container"> 
                    <h1>THE DREAM TEAM</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <div className = "photos_container">
                        <TeamQuery/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Test;