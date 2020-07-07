import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const AboutUsQuery = () => (
    <Query query = {gql`
        {              
            aboutuses{
                header
                subheader
                description
            }
        }
    `
    }
    >
        {({loading, error, data}) => {
            if (loading) return <p>Loading ... </p>;
            if (error) return <p>Error :(</p>;
            return (data.aboutuses.map(({index, header, subheader, description}) => (
                <div key = {index}>
                    <h1>{header}</h1>
                    <h5>{subheader}</h5>
                    <p>{description}</p>
                </div>
            )))      
        }

    }</Query>
);

export default AboutUsQuery