import React from 'react';

import './InsuranceCompanySelector.css';

class InsuranceCompanySelector extends React.Component{
    render() {
        return(
            <select className="without-js" size="1" name="company" ref='nameSelector'
                    value={this.props.companyName ? 'fuck' : 'select'} readOnly>
                <option value='select'>Выбрать</option>
                <option value="СК-Рандеву">СК-Рандеву</option>
                <option value="СК МедАскер">СК МедАскер</option>
                <option value="fuck">Страх Трах</option>
            </select>
        )
    }
}

export default InsuranceCompanySelector;
