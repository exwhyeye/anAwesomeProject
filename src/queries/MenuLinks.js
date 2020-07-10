import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';

import './styles.scss'

const MenuLinks = () => (
    <Query query = {gql`
        {              
            pages(sort:"id") {
                id
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
            return (data.pages.map(({index, menu_name, link}) => (
                <Link key = {index} to={link}><p className = 'line'>{menu_name}</p></Link>
            )))
            }
        }
    </Query>
);

export default MenuLinks