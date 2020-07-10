import React from 'react';

import './styles.scss';
import '../container.scss';

class WhyChoose extends React.Component {
    render() {
        return (
            <div className = "content-box-1" data-aos = 'fade-up' data-aos-once="true"> 
                <div className = "container">
                    <div className = "title">
                        <h1 style = {{textTransform: 'uppercase'}}>{this.props.data.getPage.sections[2].header}</h1>
                        <p>{this.props.data.getPage.sections[2].subheader}</p>
                    </div>
                    <div className = "content-1-items" data-aos = 'fade-right' data-aos-once="true"> 
                        {(this.props.data.getPage.sections[2].benefits.map(({index, header, description, icon}) => (
                            <div key = {index} className = "item-1-4">                              
                                <div className = 'img-div'><img src = {`http://84.201.139.254:1337${icon.url}`} alt = {icon.alternativeText}/></div>     
                                <h4>{header}</h4>                                    
                                <p style = {{textTransform: 'uppercase', lineHeight: '25px', color: '#8f8f8f', fontSize: "medium"}}>{description}</p>
                            </div>
                        )))}
                        <div className = "item-5" data-aos = 'fade-right' data-aos-once="true">
                            <img src = {`http://84.201.139.254:1337${this.props.data.getPage.sections[2].image_for_section.image.url}`} alt = {this.props.data.getPage.sections[2].image_for_section.image.alternativeText}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default WhyChoose