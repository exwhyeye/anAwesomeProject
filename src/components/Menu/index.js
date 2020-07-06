import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';
import '../container.scss';

//const link = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'

class Menu extends React.Component {
    render() {
        return(
            <div className = 'container'>
                <div className = "menu">                      
                        <Link to='/'><p>HOME</p></Link>
                        <Link to='/about'><p>ABOUT US</p></Link>
                        <Link to='/portfolio'><p>PORTFOLIO</p></Link>
                        <Link to='/contact'><p>CONTACT US</p></Link>
                </div>
            </div>
        )
    }
}

export default Menu