import React, { Component } from 'react';
import Lottie from 'react-lottie';

import animationData from '../../assets/love-wins.json';

class LoveWins extends Component {
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
                    width={250}
              />
            </div>
          )
    }
}
export default LoveWins;