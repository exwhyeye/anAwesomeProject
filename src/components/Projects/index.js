import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';

import './styles.scss';
import '../container.scss';

class Projects extends React.Component {  
    render() {
        return (
            <Query
                query={gql`
                    {              
                        projects (limit: ${this.props.projectNumbers}, where: {category_portfolios: ${this.props.sortCategory}}){
                            id
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
                }
            >              
                {({loading, error, data}) => {
                if (loading) return <p></p>;
                if (error) return <p></p>;
                return (
                    <div className = "content-grid">  
                        {                           
                            (data.projects.map(({index, image, header}) => (                    
                                <div key = {index} className = 'picture'>                                                          
                                    <img src = {`http://84.201.139.254:1337${image.url}`} alt = {image.alternativeText}/>
                                    <div className = 'center'>
                                        <Link style = {{textDecoration: 'none'}} to={`/project/${header}`}><div className = 'readmore'>ПОДРОБНЕЕ</div></Link>
                                    </div>    
                                                          
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

export default Projects;