import React, { Component } from 'react';
import Lottie from 'react-lottie';

import animationData from '../assets/student.json';

class Student extends Component {
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
                    height={190}
                    width={250}
              />
            </div>
          )
    }
}
export default Student;