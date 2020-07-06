import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';
import '../container.scss';
import Icons from '../../queries/Icons'

class Footer extends React.Component {         
    render() {
        return (
            <div className = "footer">
                <div className = "subfooter_1">
                    <div className = "container">
                        <div className = "sbf_all_content">
                            <h1>YOU THINK WE'RE COOL? LET'S WORK TOGETHER</h1>
                            <a href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ" className = "button">TEXT US</a>
                        </div>
                    </div>                  
                </div>
                <div className = "subfooter_2">
                    <div className = "container">
                        <div className = "sbf_all_content">
                            <div className = "sbf_content_left">                      
                                <Link to='/' onChange = {window.scrollTo(0,0)}><p>HOME</p></Link>
                                <Link to='/about'><p>ABOUT US</p></Link>
                                <Link to='/portfolio'><p>PORTFOLIO</p></Link>
                                <Link to='/contact'><p>CONTACT US</p></Link>
                            </div>
                            <div className = "sbf_content_right">
                                <p>CREATED BY JESUS 2016. ALL RIGHTS RESERVED</p>
                                <div className = "icons"><Icons/></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;