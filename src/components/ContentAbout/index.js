import React from 'react';

import './styles.scss';
import '../container.scss';
import BenefitsQuery from '../../queries/BenefitsQuery';
import AboutUsQuery from '../../queries/AboutUsQuery';

class ContentAbout extends React.Component {
    render() {
        return (
            <div className = "content_box_about">
                <div className = "container"> 
                    <div className = "top_content">
                        <AboutUsQuery/>
                    </div>
                    <div className = "bottom_content">
                        <h1>SOME BENEFITS</h1>
                        <p style = {{color: '#60606e'}}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <div className  = "container">
                            <div className = "benefits_container">
                                <BenefitsQuery/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContentAbout;