import React from "react";
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import '../styles.scss';
import Footer from "../../components/Footer";
import SecondHeader from "../../components/SecondHeader";
import AboutUsContent from "../../components/AboutUsContent";
import Team from "../../components/Team";
import Error from "../../components/Lotties/error";
import Loading from "../../components/Lotties/loading";

class About extends React.Component {
    render() {
        return (
            <Query
                query={gql`
            {              
                getPage(name:"about_page"){
                    sections{
                    name
                    header
                    subheader
                    name
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
                aboutuses {
                        header
                        subheader
                        description
                }
                
                teams(sort:"order"){
                    Name
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
                            <SecondHeader data={data.getPage.sections[0].header}/>
                            <AboutUsContent data={data}/>
                            <Team data={data}/>
                            <Footer data={data}/>
                        </div>
                    );
                }}
            </Query>
        )
    }
}

export default About