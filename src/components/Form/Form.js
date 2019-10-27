import React from 'react';

import './Form.css';
import InsuranceNumber from "../InsuranceNumber/InsuranceNumber";
import InsuranceCompanySelector from "../InsuranceCompanySelector/InsuranceCompanySelector";
import TabsContainer from "../TabsContainer/TabsContainer";
import ServicesContainer from "../ServicesContainer/ServicesContainer";
import CheckButton from "../CheckButton/CheckButton";
import data from '../../services.json';
import NewInquiryButton from "../NewInquiryButton/NewInquiryButton";

class Form extends React.Component{
    constructor(props){
        super(props);
        this.state={
            insuranceNumber: '',
            companyName: '',
            insuranceType: '',
            tagList: [],
            checkedTagList: []
        };
        this.changeInsState = this.changeInsState.bind(this);
        this.getTagList = this.getTagList.bind(this);
        this.makeCheckedList=this.makeCheckedList.bind(this);
    }

    changeInsState(newNumber, newName, newType) {
        this.setState({
            insuranceNumber: newNumber,
            companyName: newName,
            insuranceType: newType
        });
    }

    getTagList(newList) {
        this.setState({
            tagList: newList
        });
    }

    makeCheckedList(newCheckedList) {
        this.setState({
            checkedTagList: newCheckedList
        });
    }

    render() {
        const checkButton = (<CheckButton tagList={this.state.tagList} services={data} companyName={this.state.companyName}
                                          insuranceNumber={this.state.insuranceNumber}
                                          checkedTagList={this.state.checkedTagList} onClick={this.makeCheckedList}/>);
        const newInquiryButton = (<NewInquiryButton checkedTagList={this.state.checkedTagList}
                                                    clearTagsList={this.getTagList} clearCheckedList={this.makeCheckedList}
                                                    clearInsurances={this.changeInsState}/>)
        return(
            <div className='card-content'>
                <div>
                    <TabsContainer insuranceType={this.state.insuranceType}/>
                    <div className="row-for-selectors">
                        <InsuranceNumber onChange={this.changeInsState} />
                        <InsuranceCompanySelector companyName={this.state.companyName}/>
                    </div>
                    <ServicesContainer tagList={this.state.tagList} checkedTagList={this.state.checkedTagList} services={data}
                                       onChange={this.getTagList}/>
                </div>
                {(this.state.checkedTagList.length===0) ? checkButton : newInquiryButton}
            </div>
        )
    }
}

export default Form;
