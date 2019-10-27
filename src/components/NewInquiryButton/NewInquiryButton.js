import React from 'react';

import './NewInquiryButton.css';

class NewInquiryButton extends React.Component {
    constructor(props){
        super(props);
        this.makeNewInquiry=this.makeNewInquiry.bind(this);
    }

    makeNewInquiry() {
        const newInsuranceNumber = '';
        const newCompanyName = '';
        const newInsuranceType = '';
        const newTagList = [];
        const newCheckedList = [];
        this.props.clearInsurances(newInsuranceNumber, newCompanyName, newInsuranceType);
        this.props.clearTagList(newTagList);
        this.props.clearCheckedList(newCheckedList);
    }

    render() {
        return(
            <div className="button">
                <button className="new-inquiry" onClick={this.makeNewInquiry}>Новый запрос</button>
            </div>
        );
    }
}

export default NewInquiryButton;
