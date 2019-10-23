import React from 'react';

import './Form.css';
import InsuranceNumber from "../InsuranceNumber/InsuranceNumber";
import InsuranceCompanySelector from "../InsuranceCompanySelector/InsuranceCompanySelector";
import TabsContainer from "../TabsContainer/TabsContainer";
import ServicesContainer from "../ServicesContainer/ServicesContainer";

class Form extends React.Component{
    constructor(props){
        super(props);
        this.state={
            companyName: '',
            insuranceType: ''
        };
        this.changeInsState = this.changeInsState.bind(this);
    }

    changeInsState(newName, newType) {
        this.setState({
            companyName: newName,
            insuranceType: newType
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
                <ServicesContainer/>
            </div>
        )
    }
}

export default Form;
