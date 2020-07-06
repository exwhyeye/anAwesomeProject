import React from 'react';

import './styles.scss';
import '../container.scss';

import LoveWins from '../Lotties/LoveWins';
import Rainbow from '../Lotties/Rainbow';
import Coronavirus from '../Lotties/Coronavirus';
import PrideLove from '../Lotties/PrideLove';
import CoronaDoctor from '../Lotties/CronaDoctor';
import GirlLooking from '../Lotties/GirlLooking';
import ShoppingWoman from '../Lotties/ShoppingWoman';
import Student from '../Lotties/Student';
import IStayHome from '../Lotties/IStayHome';
//import Content from '../../Test/Content';

/*import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';*/

class Portfolio extends React.Component {
    render() {
        return (
            <div className = "content_box_2"> 
                <div className = "container"> 
                    <div className = "title">
                        <h1>OUR PORTFOLIO</h1>
                        {/*<Content/>*/}
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
        )
    }
}

export default Portfolio;