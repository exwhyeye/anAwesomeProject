import React from "react";
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import '../styles.scss';
import Footer from "../../components/Footer";
import SecondHeader from "../../components/SecondHeader";
import Portfolio from "../../components/Portfolio";
import Error from "../../components/Lotties/error";
import Loading from "../../components/Lotties/loading";

class PortfolioPage extends React.Component {
    render() {
        return (
            <Query
                query = {gql`
                    {
                        getPage(name:"portfolio_page"){
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
                }
            >
                {({loading, error, data}) => {
                    if (loading) return <div className = "message"><Loading/></div>;
                    if (error) return <div className = "message"><Error/><p>AN ERROR OCCURED :(</p></div>;

                    return (
                        <div className = "wrapper">
                            <SecondHeader data={data.getPage.sections[0].header}/>
                            <Portfolio data = {data}/>
                            <Footer/>
                        </div>
                    );
                }}
            </Query>
        )
    }
}

export default PortfolioPage