import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';

const Pages = () => (
    <Query query = {gql`
        {              
            pages {
                menu_name
                link
            }
        }
    `
    }
    >
        {({loading, error, data}) => {
            if (loading) return <p>Loading ... </p>;
            if (error) return <p>Error :(</p>;
            return (data.pages.map(({index, menu_link, link}) => (
                <Link key = {index} to={link}><p>{menu_link}</p></Link>
            ))
            )
        }

    }</Query>
);

export default Pages