import React from "react";

import '../styles.scss';
import Footer from "../../components/Footer";
import AboutHeader from "../../components/AboutHeader";
import ContentAbout from "../../components/ContentAbout";
import Team from "../../components/Team";

class About extends React.Component {
    render() {
        return (
            <div className = "wrapper">
                <AboutHeader/>
                <ContentAbout/>
                <Team/>
                <Footer/>
            </div>
        )
    }
}

export default About