import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';

import './styles.scss';
import '../container.scss';
import MenuLinks from '../../queries/MenuLinks'

class Menu extends React.Component {
    render() {
        return(
            <Query
                query = {gql`
                    {   
                        getPage(name:"main_page"){        
                            sections{
                                image_for_section{
                                    image{
                                        url
                                        alternativeText
                                    }
                                }          
                            }
                        }

                        offer(id:1){
                            offer
                            text_button
                            link
                        }
                    }`
                }
            >
                
            {({loading, error, data}) => {
                if (loading) return <p></p>;
                if (error) return <p></p>;   
                return (  
                <div className = 'container'>
                    <div style = {{display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-between'}}>
                        <div >
                            <Link to="/"><img src = {`http://84.201.139.254:1337${data.getPage.sections[3].image_for_section.image.url}`}/></Link>
                        </div>
                        <div className = "menu">                
                            <MenuLinks/>
                        </div>
                    </div>    
                </div>
            );
        }}
        </Query>
        )
    }
}

export default Menu