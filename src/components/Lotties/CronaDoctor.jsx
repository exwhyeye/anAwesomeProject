import React, { Component } from 'react';
import Lottie from 'react-lottie';

import animationData from '../assets/corona-doctor.json';

class CoronaDoctor extends Component {
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
                    height={225}
                    width={250}
              />
            </div>
          )
    }
}
export default CoronaDoctor;