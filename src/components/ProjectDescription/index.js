import React from "react";
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom'

import './styles.scss';
import '../container.scss';
import Back from '../Lotties/back';

class ProjectDescription extends React.Component {
    render() {
        return(
            <Query
            query={gql`
                {                          
                    projects (where: {header: "${this.props.data}"}){                        
                        header
                        description
                        subheader
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
                    <div className = "container">
                        <div className = 'description-container'>
                            <div className = 'image-box' data-aos = 'fade-up' data-aos-once="true">
                                <img 
                                    src = {`http://84.201.139.254:1337${data.projects[0].image.url}`} 
                                    alt = {data.projects[0].image.alternativeText}
                                />
                            </div>
                            <div className = 'description-box' data-aos = 'fade-up' data-aos-once="true">
                                <div className = 'head'>
                                    <h1 style = {{textTransform: 'uppercase'}}>{data.projects[0].header}</h1>
                                    <p>{data.projects[0].subheader}</p>
                                </div>
                                <div className = 'description-categories'>
                                    <div className = 'description'>
                                        <p>{data.projects[0].description}</p>
                                    </div>
                                    <div className = 'categories'>
                                        <ul>
                                        {(data.projects[0].category_portfolios.map(({index, name}) => (                         
                                            <li key = {index}>{name}</li>
                                        )))}
                                        </ul>
                                        <Link to='/portfolio'><Back/></Link>                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            }}
            </Query>
        )
    }
}

export default ProjectDescription