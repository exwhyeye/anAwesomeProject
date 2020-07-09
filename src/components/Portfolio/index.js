import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import './styles.scss';
import '../container.scss';
import Test from '../Test/Test';

class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sortCategory: 'ALL'
        };
      }

    handleClick(item) {
        this.setState({ sortCategory: item });
    }

    render() {     
        return (
            <div className = "content_box_2"> 
                <div className = "container"> 
                    {typeof this.props.data.getPage.sections[4] != 'undefined' ? 
                        <div className = "title">
                            <h1 style = {{textTransform: 'uppercase'}}>{this.props.data.getPage.sections[4].header}</h1>
                            <p>{this.props.data.getPage.sections[4].subheader}</p>
                        </div> 
                        :
                        <div style = {{marginTop: "100px"}}></div>}
                    <div className = "content_2_items">
                        <div className = "item_1">
                            <h1>ВЫБРАТЬ КАТЕГОРИЮ</h1>
                            <p><a style = {{cursor: 'pointer'}} onClick = {() => this.handleClick('ALL')}>ВСЕ</a></p>
                            {(this.props.data.categoryPortfolios.map(({index, name, id}) => (                         
                                <p style = {{textTransform: 'uppercase'}} key = {index}><a style = {{cursor: 'pointer'}} onClick = {() => this.handleClick(id)}>{name}</a></p>
                            )))}    
                        </div>                                      
                        <Test {...this.state}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Portfolio;