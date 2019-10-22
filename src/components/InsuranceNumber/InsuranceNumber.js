import React from 'react';

import './InsuranceNumber.css';

class InsuranceNumber extends React.Component{
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const newInsNumber = e.target.value;
        this.props.onChange(newInsNumber);
    }
    render() {
        return(
            <input className="round" placeholder="Введите номер полиса" onChange={this.handleChange}/>
        )
    }
}

export default InsuranceNumber;
