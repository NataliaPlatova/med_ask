import React from 'react';

import './CheckButton.css';

class CheckButton extends React.Component {
    constructor(props){
        super(props);
        this.checkTags=this.checkTags.bind(this);
    }

    checkTags() {
        let included = [];
        let unIncluded = [];
        let notFound = [];
        const availableServices = this.props.services[0];
        const chosenServices = this.props.tagList;
        console.log(availableServices);
        for (let serviceNumber=0; serviceNumber<chosenServices.length; serviceNumber++) {
            let checkingItem = chosenServices[serviceNumber];
            if(availableServices[checkingItem]===true) {
                included.push(checkingItem);
            } else if (availableServices[checkingItem]===false) {
                unIncluded.push(checkingItem);
            } else {
                notFound.push(checkingItem);
            }
        };
        let newCheckedList = [included, unIncluded, notFound];
        this.props.onClick(newCheckedList);
    }

    render() {
        return(
            <div className="button">
                <button disabled={((this.props.tagList.length!=0)&(this.props.companyName!='')&(this.props.insuranceNumber!='')) ? false : true} className="check"
                        onClick={this.checkTags}>Проверить</button>
            </div>
        );
    }
}

export default CheckButton;
