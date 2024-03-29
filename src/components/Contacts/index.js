import React from 'react';

import './styles.scss';
import '../container.scss';
import SocialNetworks from '../SocialNetworks/index'
import ContactForm from '../ContactForm/index'

class Contacts extends React.Component {
    
    render() {
        return(
            <div className = 'container'>
                <div className = "form-box" data-aos = 'fade-up' data-aos-once="true">
                    <div className = "form-left">      
                        <ContactForm/>                      
                        <div className = 'contact'>
                            <h3 style = {{textTransform: 'uppercase'}}>{this.props.data.getPage.title}</h3>
                            <p>{this.props.data.getPage.sections[1].subheader}</p>
                            <p>{this.props.data.contacts[0].contact}<br></br>{this.props.data.contacts[1].contact}<br></br>{this.props.data.contacts[2].contact}</p>
                            <a style = {{color: '#8f8f8f'}} href = {`mailto:${this.props.data.contacts[3].contact}`}>{this.props.data.contacts[3].contact}</a>
                            
                        </div>
                        <div className = "icons"><SocialNetworks/></div>
                    </div>
                    <div className = "form-right" data-aos = 'fade-up' data-aos-once="true">
                        <div style = {{backgroundColor: '#f5f5f5'}}>
                            <iframe 
                                title="yandexMap"                            
                                width="100%" 
                                height="840" 
                                frameborder="0"
                                src = {this.props.data.map.interactive_map}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contacts