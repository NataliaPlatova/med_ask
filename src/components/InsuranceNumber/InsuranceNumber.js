import React from 'react';

import './InsuranceNumber.css';
import data from "../../insurances";

class InsuranceNumber extends React.Component{
    constructor(props) {
        super(props);
        this.checkNewNumber = this.checkNewNumber.bind(this);
    }

    checkNewNumber(e) {
            const newInsNumber = e.target.value;
            let newCompanyName = '';
            let newInsuranceType = '';
            for (let item = 0; item < 6; item++) {
                if (data[item]['sp'] === newInsNumber.toString()) {
                    newCompanyName = data[item]['sk'];
                    newInsuranceType = data[item]['ts'];
                    break;
                }
            };
            this.props.onChange(newCompanyName, newInsuranceType);
    }

    render() {
        return(
            <input className="round" placeholder="Введите номер полиса" onChange={this.checkNewNumber}/>
        )
    }
}

export default InsuranceNumber;
