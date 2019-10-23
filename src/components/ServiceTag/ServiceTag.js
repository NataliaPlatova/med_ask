import React from "react";

import './ServiceTag.css'

class ServiceTag extends React.Component {
    constructor(props){
        super(props);
        this.deleteTag=this.deleteTag.bind(this);
    }

    deleteTag() {
        let toBeDeleted = this.props.tag
        this.props.onDelete(toBeDeleted);
    }

    render() {
        return (
            <div className="chosen-service">
                <p className="chosen-service-text">{this.props.tag}</p>
                <img src={require("../../images/cancel.png")} className="cancel" onClick={this.deleteTag}/>
            </div>
        )
    }
}

export default ServiceTag;
