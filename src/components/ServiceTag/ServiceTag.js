import React from "react";

class ServiceTag extends React.Component {
    render() {
        return (
            <div className="chosen-service">
                <p className="chosen-service-text">{this.props.tag}</p>
            </div>
        )
    }
}

export default ServiceTag;
