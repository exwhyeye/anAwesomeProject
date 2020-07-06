import React, { Component } from 'react';
import Lottie from 'react-lottie';

import animationData from '../../assets/pride-love.json';

class PrideLove extends Component {
    render() {
        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: animationData,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice'
            }
          };
      
          return(
            <div>
              <Lottie options={defaultOptions}
                    height={250}
                    width={300}
              />
            </div>
          )
    }
}
export default PrideLove;