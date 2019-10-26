import React from 'react';

import './CheckedServiceTag.css';

class CheckedServiceTag extends React.Component {
    render() {
        return(
            <div className="chosen-service">
                <img src={require("../../images/cancel.png")} className="cancel" onClick={this.deleteTag}/>
                <p className="chosen-service-text">{this.props.checkedService}</p>
            </div>
        );
    }
}

export default CheckedServiceTag;
