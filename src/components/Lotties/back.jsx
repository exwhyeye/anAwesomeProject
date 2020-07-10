import React, { Component } from 'react';
import Lottie from 'react-lottie';

import animationData from '../../assets/Lotties/back.json';

class Back extends Component {
    render() {
        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: animationData,
            renderingSettings: {
                preserveAspectRatio: 'xMidYMid slice'
            }
        };

        return (
            <div>
                <Lottie 
                    options = {defaultOptions}
                    height = {100}
                    widht = {100}
                />
            </div>
        )
    }
}

export default Back