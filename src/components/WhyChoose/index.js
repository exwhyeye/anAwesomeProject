import React from 'react';

import './styles.scss';
import '../container.scss';

import StayHome from '../Lotties/StayHome';

class WhyChoose extends React.Component {
    render() {
        return (
            <div className = "content_box_1"> 
                <div className = "container">
                    <div className = "title">
                        <h1>WHY CHOOSE US</h1>
                    </div>
                    <div className = "content_1_items">
                        <div className = "item_1_4">
                            <h2>SOME TEXT</h2>
                        </div>
                        <div className = "item_1_4">
                            <h2>SOME TEXT</h2>
                        </div>
                        <div className = "item_1_4">
                            <h2>SOME TEXT</h2>
                        </div>
                        <div className = "item_1_4">
                            <h2>SOME TEXT</h2>
                        </div>
                        <div className = "item_5">
                            <StayHome/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default WhyChoose