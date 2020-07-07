import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const TeamQuery = () => (
    <Query query = {gql`
        {              
            teams{
                image{
                  alternativeText
                  url
                }
            }
        }
    `
    }
    >
        {({loading, error, data}) => {
            if (loading) return <p>Loading ... </p>;
            if (error) return <p>Error :(</p>;
            return (data.teams.map(({index, image}) => (
                <div><img key = {index} src = {`http://84.201.139.254:1337${image.url}`} alt = {image.alternativeText}/></div>
            )))
        }

    }</Query>
);

export default TeamQuery