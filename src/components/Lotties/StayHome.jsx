import React, { Component } from 'react';
import Lottie from 'react-lottie';

import animationData from '../assets/stay-at-home.json';

class StayHome extends Component {
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
                    height={455}
                    width={455}
              />
            </div>
          )
    }
}
export default StayHome;