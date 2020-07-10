import React from "react";
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import '../styles.scss';
import Footer from "../../components/Footer";
import SecondHeader from "../../components/SecondHeader";
import ProjectDescription from "../../components/ProjectDescription";
import Error from "../../components/Lotties/error";
import Loading from "../../components/Lotties/loading";

class Project extends React.Component {
    render() {
        return (
            <Query
                query={gql`
            {                          
                teams{
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
                            <SecondHeader data = {this.props.match.params.name}/>
                            <ProjectDescription data = {this.props.match.params.name}/>
                            <Footer/>
                        </div>
                    );
                }}
            </Query>
        )
    }
}

export default Project