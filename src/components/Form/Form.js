import React from 'react';

import './Form.css';
import InsuranceNumber from "../InsuranceNumber/InsuranceNumber";
import InsuranceCompanySelector from "../InsuranceCompanySelector/InsuranceCompanySelector";
import ServiceSelector from "../ServiceSelector/ServiceSelector";
import Tabs from "../Tabs/Tabs";

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
                <Tabs />
                <div className="row-for-selectors">
                    <InsuranceNumber onChange={this.changeInsState} />
                    <InsuranceCompanySelector companyName={this.state.companyName}/>
                </div>
                <ServiceSelector />
            </div>
        )
    }
}

export default Form;
