import React from "react";

import '../styles.scss';
import Footer from "../../components/Footer";
import HomeHeader from "../../components/HomeHeader";
import WhyChoose from "../../components/WhyChoose";
import Portfolio from "../../components/Portfolio";

class Homepage extends React.Component {
    render() {
        return (
            <div className = "wrapper">
                <HomeHeader/>
                <WhyChoose/>
                <Portfolio/>
                <Footer/>
            </div>
        )
    }
}
export default Homepage;