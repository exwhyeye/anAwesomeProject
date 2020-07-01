import React from "react";

import './homepage.scss';
import LoveWins from '../Lotties/LoveWins';
import Rainbow from '../Lotties/Rainbow';
import Coronavirus from '../Lotties/Coronavirus';
import StayHome from '../Lotties/StayHome';
import PrideLove from '../Lotties/PrideLove';
import CoronaDoctor from '../Lotties/CronaDoctor';
import GirlLooking from '../Lotties/GirlLooking';
import ShoppingWoman from '../Lotties/ShoppingWoman';
import Student from '../Lotties/Student';
import IStayHome from '../Lotties/IStayHome';

function Main() {
    return (
        <div className = "wrapper">
            <div className = "header" >
                <div className = "naming">
                    <div className = "we_are">
                        <p>WE'RE</p>
                    </div>
                    <div className = "creative_agency">
                        <p>CREATIVE AGENCY</p>
                    </div>
                </div>
            </div>

            <div className = "subheader" >
                <div className = "container"> 
                    <a href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ" className = "button">READ MORE</a>
                </div>
            </div>

            <div className = "content_box_1"> 
                <div className = "container">
                    <div className = "title">
                        <h1>WHY CHOOSE US</h1>
                    </div>
                    <div className = "content_1_items">
                        <div className = "item_1_4">
                            <h2>SOME TEXT</h2>
                        </div>
                        <div className = "item_1_4">
                            <h2>SOME TEXT</h2>
                        </div>
                        <div className = "item_1_4">
                            <h2>SOME TEXT</h2>
                        </div>
                        <div className = "item_1_4">
                            <h2>SOME TEXT</h2>
                        </div>
                        <div className = "item_5">
                            <StayHome/>
                        </div>
                    </div>
                </div>
            </div>

            <div className = "content_box_2"> 
                <div className = "container"> 
                    <div className = "title">
                        <h1>OUR PORTFOLIO</h1>
                    </div>
                    <div className = "content_2_items">
                        <div className = "item_1">
                            <h1>SOME TEXT</h1>
                        </div>
                        <div className = "item_2_10">
                            <LoveWins/>
                        </div>
                        <div className = "item_2_10">
                            <GirlLooking/>
                        </div>
                        <div className = "item_2_10">
                            <CoronaDoctor/>
                        </div>
                        <div className = "item_2_10">
                            <IStayHome/>
                        </div>
                        <div className = "item_2_10">
                            <PrideLove/>
                        </div>
                        <div className = "item_2_10">
                            <Rainbow/>
                        </div>
                        <div className = "item_2_10">
                            <ShoppingWoman/>
                        </div>
                        <div className = "item_2_10">
                            <Coronavirus/>
                        </div>
                        <div className = "item_2_10">
                            <Student/>
                        </div>     
                    </div>
                </div>
            </div>

            <div className = "footer">
                <div className = "subfooter_1">
                    <div className = "container">
                        <div className = "sbf_all_content">
                            <div className = "sbf_content_left">
                                <h1>YOU THINK WE'RE COOL? LET'S WORK TOGETHER</h1>
                            </div>
                            <div className = "sbf_content_right">
                                <h2>STAY INFORMED WITH OUR NEWSLETTER</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "subfooter_2">
                    <div className = "container">
                        <div className = "sbf_all_content">
                            <div className = "sbf_content_left">                      
                                <p><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">HOME</a></p>
                                <div className = "circle"></div>
                                <p><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">ABOUT US</a></p>
                                <div className = "circle"></div>
                                <p><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">SERVICES</a></p>
                                <div className = "circle"></div>
                                <p><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">PORTFOLIO</a></p>
                                <div className = "circle"></div>
                                <p><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">BLOG</a></p>
                                <div className = "circle"></div>
                                <p><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">CONTACT US</a></p>
                            </div>
                            <div className = "sbf_content_right">
                                <p>CREATED BY AKHOUAD 2016. ALL RIGHTS RESERVED</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Main;