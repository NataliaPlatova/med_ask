import React from 'react';

import './Form.css';
import InsuranceNumber from "../InsuranceNumber/InsuranceNumber";
import InsuranceCompanySelector from "../InsuranceCompanySelector/InsuranceCompanySelector";
import TabsContainer from "../TabsContainer/TabsContainer";
import ServicesContainer from "../ServicesContainer/ServicesContainer";
import CheckButton from "../CheckButton/CheckButton";
import data from '../../services.json';

class Form extends React.Component{
    constructor(props){
        super(props);
        this.state={
            companyName: '',
            insuranceType: '',
            tagList: [],
            checkedTagList: []
        };
        this.changeInsState = this.changeInsState.bind(this);
        this.getTagList = this.getTagList.bind(this);
        this.makeCheckedList=this.makeCheckedList.bind(this);
    }

    changeInsState(newName, newType) {
        this.setState({
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
        return(
            <div>
                <TabsContainer insuranceType={this.state.insuranceType}/>
                <div className="row-for-selectors">
                    <InsuranceNumber onChange={this.changeInsState} />
                    <InsuranceCompanySelector companyName={this.state.companyName}/>
                </div>
                <ServicesContainer tagList={this.state.tagList} checkedTagList={this.state.checkedTagList} services={data}
                                   onChange={this.getTagList}/>
                <CheckButton tagList={this.state.tagList} services={data} checkedTagList={this.state.checkedTagList}
                             onClick={this.makeCheckedList}/>
            </div>
        )
    }
}

export default Form;
