import React from 'react';

import './ServiceSelector.css';

class ServiceSelector extends React.Component {
    render() {
        return (
            <div className="service-selector">
                <label>Выберите медицинские услуги</label>
                <input className="big-round" id="services" placeholder="Выберите запрашиваемую услугу для пациента" />
            </div>
        )
    }
}

export default ServiceSelector;
