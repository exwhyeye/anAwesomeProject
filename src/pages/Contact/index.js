import React from "react";

import '../styles.scss';
import Footer from "../../components/Footer";
import SecondHeader from "../../components/SecondHeader";
import Contacts from "../../components/Contacts";
import Error from "../../components/Lotties/error";
import Loading from "../../components/Lotties/loading";
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

class Contact extends React.Component {
    render() {
        return (
            <Query
                query = {gql`
                    {               
                        getPage(name:"contact_page"){
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

                        contacts {
                            contact
                        }

                        map(id:1){
                          interactive_map
                        }
                    }`
                }
            >
            {({loading, error, data}) => {
                if (loading) return <div className = "message"><Loading/></div>;
                if (error) return <div className = "message"><Error/><p>AN ERROR OCCURED :(</p></div>;

                return (
                    <div className = "wrapper">
                        <SecondHeader data = {data.getPage.sections[0].header}/>
                        <Contacts data = {data}/>
                        <Footer/>
                    </div>
                );
            }}
            </Query>        
        )
    }
}

export default Contact