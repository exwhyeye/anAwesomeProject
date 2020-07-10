import React from "react";

import '../styles.scss';
import Footer from "../../components/Footer";
import HomeHeader from "../../components/HomeHeader";
import WhyChoose from "../../components/WhyChoose";
import Portfolio from "../../components/Portfolio";
import Error from "../../components/Lotties/error";
import Loading from "../../components/Lotties/loading";
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

class Homepage extends React.Component {
    render() {
        return (
            <Query
                query={gql`
                    {              
                        getPage(name:"main_page"){
                            title
                            name
                            link
                            sections{
                              name
                              header
                              subheader
                              name
                              image_for_section{
                                image{
                                  url
                                  alternativeText
                                }
                              }
                              benefits{
                                header
                                description
                                icon{
                                  url
                                  alternativeText
                                }
                              }
                            }
                          }
                          history(id:1){
                            header
                            passage
                            text
                            image{
                              url
                              alternativeText
                            }
                          }
                          categoryPortfolios{
                            id
                            name                        
                          }
                          projects{
                            header
                            subheader
                            description
                            category_portfolios{
                              name
                            }
                            image{
                              url
                              alternativeText
                            }
                          }
                    }`
            }>
            
            {({loading, error, data}) => {
                if (loading) return <div className = "message"><Loading/></div>;
                if (error) return <div className = "message"><Error/><p>AN ERROR OCCURED :(</p></div>;

                return (
                    <div className = "wrapper">
                        <HomeHeader data = {data.getPage.sections[0].header}/>
                        <WhyChoose data = {data}/>
                        <Portfolio data = {data}/>
                        <Footer/>
                    </div>
                );
            }}
            </Query>
        )
    }
}

export default Homepage;