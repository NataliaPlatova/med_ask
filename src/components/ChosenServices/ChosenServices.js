import React from 'react';

import './ChosenServices.css';
import ServiceTag from "../ServiceTag/ServiceTag";

class ChosenServices extends React.Component{
    constructor(props) {
        super(props);
        this.delete=this.delete.bind(this);
    }

    delete(tag) {
        let newList = this.props.tagList;
        let tagIndex = newList.indexOf(tag);
        newList.splice(tagIndex, 1);
        this.props.onChange(newList);
    }

    render() {
        return(
            <div className="chosen">
                {this.props.tagList.map(tag=>{
                    return(
                        <ServiceTag tag={tag} key={tag} onDelete={this.delete}/>
                    )
                })}
            </div>
        )
    }
}

export default ChosenServices;
