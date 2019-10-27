import React from 'react';

import './CheckedServiceTag.css';

class CheckedServiceTag extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        let includeIcon;
        if (this.props.listNumber===0) {
            includeIcon = (<img src={require("../../images/include.png")}/>);
        } else if (this.props.listNumber===1) {
            includeIcon = (<img src={require("../../images/uninclude.png")}/>);
        } else if (this.props.listNumber===2) {
            includeIcon = (<img src={require("../../images/notFound.png")}/>);
        }

        return(
            <div className="checked-service-tag">
                {this.props.list.map(checkedService =>{
                return (
                    <div className="checked-service">
                        <span className='image'>{includeIcon}</span>
                        <p>{checkedService}</p>
                    </div>
                )
                })}
            </div>
        );
    }
}

export default CheckedServiceTag;
