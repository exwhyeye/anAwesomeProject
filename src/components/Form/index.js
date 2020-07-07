import React from 'react';

import './styles.scss';
import '../container.scss';
import SocialNetworks from '../SocialNetworks/index'

const link = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'

class Form extends React.Component {
    render() {
        return(
            <div className = 'container'>
                <div className = "form_box">
                    <div className = "form_left">
                        <div className = "input_area">
                            <div style = {{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
                                <input style = {{height: '50px', width: '262.5px'}} placeholder = "ИМЯ"></input>
                                <input style = {{height: '50px', width: '262.5px'}} placeholder = "ЭЛ. ПОЧТА"></input>
                            </div>
                            <input style = {{height: '50px', width: '100%'}} placeholder = "ТЕМА"></input>
                            <textarea placeholder = "СООБЩЕНИЕ"></textarea>                       
                            <a href = {link} className = "buttonSend">ОТПРАВИТЬ</a>
                        </div>
                        <div className = 'contact'>
                            <h3 style = {{textTransform: 'uppercase'}}>{this.props.data.getPage.title}</h3>
                            <p>{this.props.data.getPage.sections[1].subheader}</p>
                            <p>{this.props.data.contacts[0].contact}<br></br>{this.props.data.contacts[1].contact}<br></br>{this.props.data.contacts[2].contact}</p>
                            <a style = {{color: '#cdcdcd'}} href = {`mailto:${this.props.data.contacts[3].contact}`}>{this.props.data.contacts[3].contact}</a>
                        </div>
                        <div className = "icons"><SocialNetworks/></div>
                    </div>
                    <div className = "form_right">
                        <div>
                            <iframe title="eatHere" src = {this.props.data.map.interactive_map} width="100%" height="840" frameborder="0"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Form