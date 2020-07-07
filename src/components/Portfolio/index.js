import React from 'react';

import './styles.scss';
import '../container.scss';

class Portfolio extends React.Component {
    render() {
        console.log(this.props.data)
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
                            {(this.props.data.categoryPortfolios.map(({index, name}) => (                         
                                <p style = {{textTransform: 'uppercase'}} key = {index}>{name}</p>
                            )))}    
                        </div>                                            
                            {(this.props.data.projects.map(({index, image}) => (                         
                                <div className = "item_2_10">
                                    <img key = {index} src = {`http://84.201.139.254:1337${image.url}`} alt = {image.alternativeText}/>
                                </div>
                            )))}       
                    </div>
                </div>
            </div>
        )
    }
}

export default Portfolio;