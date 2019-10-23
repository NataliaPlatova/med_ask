import React from 'react';

import './ChosenServices.css';
import ServiceTag from "../ServiceTag/ServiceTag";

class ChosenServices extends React.Component{
    render() {
        return(
            <div className="chosen">
                {this.props.tagList.map(tag=>{
                    return(
                        <ServiceTag tag={tag} key={tag}/>
                    )
                })}
            </div>
        )
    }
}

export default ChosenServices;
