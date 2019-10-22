import React from 'react';

import './InsuranceCompanySelector.css';

class InsuranceCompanySelector extends React.Component{
    render() {
        return(
            <select className="without-js" size="1" name="company" ref='nameSelector'
                    value={this.props.companyName ? this.props.companyName : 'select'} readOnly>
                <option value='select'>Выбрать</option>
                <option value="СК Рандеву">СК Рандеву</option>
                <option value="СК МЕД-АСКЕР">СК МЕД-АСКЕР</option>
                <option value="Страх-Трах">Страх-Трах</option>
            </select>
        )
    }
}

export default InsuranceCompanySelector;
