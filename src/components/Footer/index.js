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
                    <div className = "footer" data-aos = 'fade-up' data-aos-once="true">
                        <div className = "subfooter-1">
                            <div className = "container">
                                <div className = "sbf-all-content">                                                                                   
                                    <h1 key = {data.index}>{data.offer.offer}</h1>
                                    <a href = {`${data.offer.link}`} className = "button">{data.offer.text_button}</a>
                                </div>
                            </div>                  
                        </div>
                        <div className = "subfooter-2">
                            <div className = "container">
                                <div className = "sbf-all-content">
                                    <div className = "sbf-content-left">                      
                                        <MenuLinks onChange = {window.scrollTo(0,0)}/>
                                    </div>
                                    <div className = "sbf-content-right">
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