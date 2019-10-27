import React from 'react';

import './NewInquiryButton.css';

class NewInquiryButton extends React.Component {
    constructor(props){
        super(props);
        this.makeNewInquiry=this.makeNewInquiry.bind(this);
    }

    makeNewInquiry() {
        this.clearTagsList();
        this.clearCheckedTagsList();
        this.clearInsuranсes();
    }

    clearTagsList() {
        const newList = [];
        this.props.clearTagsList(newList);
    }

    clearCheckedTagsList() {
        const newCheckedList = [];
        this.props.clearCheckedList(newCheckedList);
    }

    clearInsuranсes() {
        const newCompanyName = '';
        const newInsuranceType = '';
        this.props.clearInsurances(newCompanyName, newInsuranceType);
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
