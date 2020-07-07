import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const BenefitsQuery = () => (
    <Query query = {gql`
        {        
            benefits (where:{section:15}) {
                header
                description
                icon{
                    url
                    alternativeText
                }
            }
        }
    `
    }
    >
        {({loading, error, data}) => {
            if (loading) return <p>Loading ... </p>;
            if (error) return <p>Error :(</p>;
            return (data.benefits.map(({index, header, description, icon}) => (
                <div key = {index}>
                    <div><div><img src = {`http://84.201.139.254:1337${icon.url}`} alt = {icon.alternativeText}/></div><h5>{header}</h5></div>
                    
                    <p>{description}</p>
                </div>
            )))
        }
    }</Query>
);

export default BenefitsQuery