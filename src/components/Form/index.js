import React from 'react';

import './styles.scss';
import '../container.scss';
import Icons from '../../queries/Icons'

//const link = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'

class Form extends React.Component {
    render() {
        return(
            <div className = 'container'>
                <div className = "form_box">
                    <div className = "form_left">
                        <div className = "input_area">
                            <div style = {{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
                                <input style = {{height: '50px', width: '262.5px'}} placeholder = "YOUR NAME"></input>
                                <input style = {{height: '50px', width: '262.5px'}} placeholder = "YOUR EMAIL"></input>
                            </div>
                            <input style = {{height: '50px', width: '100%'}} placeholder = "OBJECT"></input>
                            <textarea placeholder = "MESSAGE"></textarea>                       
                            <a href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ" className = "buttonSend">SEND</a>
                        </div>
                        <div className = 'contact'>
                            <h3>CONTACT INFO</h3>
                            <p>Lorem ipsum dolor sit amet, conse adipisicing elit. Libero incidunt quod ab mollitia quia dolorum conse.</p>
                            <p>Krasnoarmeyskaya st. 123A<br></br>+7 (3822) 99-69-61<br></br>+7 (843) 280-06-89</p>
                            <a style = {{color: '#cdcdcd'}} href = "mailto:email@website.com">email@website.com</a>
                        </div>
                        <div className = "icons"><Icons/></div>
                    </div>
                    <div className = "form_right">
                        <div>
                            <iframe title="eatHere" src="https://yandex.ru/map-widget/v1/?um=constructor%3Aba2d1571a705f70dc6195bdbec1daceb2c79828992376234bf32985d7e61f242&amp;source=constructor" width="100%" height="840" frameborder="0"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Form