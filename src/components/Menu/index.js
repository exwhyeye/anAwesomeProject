import React from 'react';

import './styles.scss';
import '../container.scss';
import MenuLinks from '../../queries/MenuLinks'

class Menu extends React.Component {
    render() {
        return(
            <div className = 'container'>
                <div className = "menu">    
                    <MenuLinks/>
                </div>
            </div>
        )
    }
}

export default Menu