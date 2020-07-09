import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import './styles.scss';
import '../container.scss';
import SocialNetworks from '../SocialNetworks/index';
import MenuLinks from '../../queries/MenuLinks';

class Footer extends React.Component {         
    render() {
        return (
            <Query
                query = {gql`
                    {               
                        offer(id:1){
                            offer
                            text_button
                            link
                        }
                    }`
                }
            >
            {({loading, error, data}) => {
                if (loading) return <p>Loading...</p>;
                if (error) return <p>Error :(</p>;   
                return (     
                    <div className = "footer">
                        <div className = "subfooter_1">
                            <div className = "container">
                                <div className = "sbf_all_content">                                                                                   
                                    <h1 key = {data.index}>{data.offer.offer}</h1>
                                    <a href = {`${data.offer.link}`} className = "button">{data.offer.text_button}</a>
                                </div>
                            </div>                  
                        </div>
                        <div className = "subfooter_2">
                            <div className = "container">
                                <div className = "sbf_all_content">
                                    <div className = "sbf_content_left">                      
                                        <MenuLinks onChange = {window.scrollTo(0,0)}/>
                                    </div>
                                    <div className = "sbf_content_right">
                                        <p>CREATED BY JESUS 2016. ALL RIGHTS RESERVED</p>
                                        <div className = "icons"><SocialNetworks/></div>
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

export default Footer;