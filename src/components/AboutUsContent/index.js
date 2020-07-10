import React from 'react';

import './styles.scss';
import '../container.scss';

class AboutUsContent extends React.Component {
    render() {
        return (
            <div className = "content-box-about">
                <div className = "container"> 
                    <div className = "top-content">
                        {(this.props.data.aboutuses.map(({index, header, subheader, description}) => (
                            <div key = {index}>
                                <h1>{header}</h1>
                                <h5>{subheader}</h5>
                                <p>{description}</p>
                            </div>
                        ))) } 
                    </div>
                    <div className = "bottom-content">
                        <h1 style = {{textTransform: 'uppercase'}}>{this.props.data.getPage.sections[2].header}</h1>
                        <p style = {{color: '#60606e'}}>
                            {this.props.data.getPage.sections[2].subheader}
                        </p>
                        <div className  = "container">
                            <div className = "benefits-container">
                                {(this.props.data.getPage.sections[2].benefits.map(({index, header, description, icon}) => (
                                    <div key = {index}>
                                        <div>
                                            <div>
                                                <img src = {`http://84.201.139.254:1337${icon.url}`} alt = {icon.alternativeText}/>
                                            </div>
                                            <h5>{header}</h5>
                                        </div>                                      
                                        <p>{description}</p>
                                    </div>
                                )))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutUsContent;