import React from "react";

import '../styles.scss';
import Footer from "../../components/Footer";
import AboutHeader from "../../components/AboutHeader";
import Form from "../../components/Form";

class About extends React.Component {
    render() {
        return (
            <div className = "wrapper">
                <AboutHeader/>
                <Form/>
                <Footer/>
            </div>
        )
    }
}

export default About