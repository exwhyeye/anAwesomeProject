import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const SocialNetworks = () => (
    <Query query = {gql`
        {              
            socialNetworks{
                link
                icon {
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
            return (data.socialNetworks.map(({link, index, icon}) => (
                <div key = {index}><a href = {`http://${link}`}><img src = {`http://84.201.139.254:1337${icon.url}`} alt = {icon.alternativeText}/></a></div>
            )))
        }

    }</Query>
);

export default SocialNetworks