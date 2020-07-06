import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const Icons = () => (
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
                <div><a href = {`http://${link}`}><img key = {index} src = {`http://84.201.139.254:1337${icon.url}`} alt = {icon.alternativeText}/></a></div>
            )))
        }

    }</Query>
);

export default Icons