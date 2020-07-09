import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import './styles.scss';
import '../container.scss';

class Test extends React.Component {
    
    render() {
        return (
                <Query
                    query={gql`
                        {              
                            projects (limit: 9, where: {category_portfolios: ${this.props.sortCategory}}){
                                header
                                subheader
                                description
                                category_portfolios{
                                  name
                                }
                                image{
                                  url
                                  alternativeText
                                }
                            }
                        }`
                    }>
                   
                {({loading, error, data}) => {
                if (loading) return <p></p>;
                if (error) return <p></p>;
                return (
                    <div className = "content_grid">  
                        {                           
                            (data.projects.map(({index, image}) => (                         
                                <div key = {index} className = "item_2_10">
                                    <img src = {`http://84.201.139.254:1337${image.url}`} alt = {image.alternativeText}/>
                                </div>
                            )))                           
                        } 
                    </div>                 
                );
            }}

            </Query>
        )
    }
}

export default Test;