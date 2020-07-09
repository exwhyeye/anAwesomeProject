import React, { Component } from 'react';
import Lottie from 'react-lottie';

import animationData from '../../assets/Lotties/error-puppie.json';

class Error extends Component {
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
                <Lottie options = {defaultOptions}
                    height = {400}
                    widht = {400}
                    isClickToPauseDisabled={true}
                />
            </div>
        )
    }
}

export default Error