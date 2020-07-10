import React from 'react';


import './styles.scss';
import '../container.scss';
import Projects from '../Projects/index';

class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sortCategory: 'ALL',
            projectNumbers: 9
        };
      }
    
    projectNumbers = this.props.data.projects.length;

    componentWillMount() {    
        if (typeof this.props.data.getPage.sections[4] != 'undefined') {
            this.state.projectNumbers = 9  
        }                      
        else {                                        
            this.state.projectNumbers = this.projectNumbers 
        }                      
    }
    
    handleClick(item) {
        this.setState({ sortCategory: item });
    }

    render() {
        return (
            <div className = "content-box-2"> 
                <div className = "container"> 
                    {typeof this.props.data.getPage.sections[4] != 'undefined' ? 
                        <div className = "title">
                            <h1 style = {{textTransform: 'uppercase'}}>{this.props.data.getPage.sections[4].header}</h1>
                            <p>{this.props.data.getPage.sections[4].subheader}</p>
                        </div> 
                        :
                        <div style = {{marginTop: "100px"}}></div>}
                    <div className = "content-2-items">
                        <div className = "item-1">
                            <h1>ВЫБРАТЬ КАТЕГОРИЮ</h1>
                            <a onClick = {() => this.handleClick('ALL')}>все</a>
                            {(this.props.data.categoryPortfolios.map(({index, name, id}) => (                                                                        
                                <a onClick = {() => this.handleClick(id)}>{name}</a>
                            )))}                         
                        </div>                                                                                  
                        <Projects {...this.state}/>                                  
                    </div>
                </div>
            </div>
        )
    }
}

export default Portfolio;