import React from "react";

import '../styles.scss';
import Footer from "../../components/Footer";
import AboutHeader from "../../components/AboutHeader";
import Portfolio from "../../components/Portfolio";

class About extends React.Component {
    render() {
        return (
            <div className = "wrapper">
                <AboutHeader/>
                <Portfolio/>
                <Footer/>
            </div>
        )
    }
}

export default About