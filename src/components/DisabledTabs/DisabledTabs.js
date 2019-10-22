import React from 'react';

import './DisabledTabs.css';

class DisabledTabs extends React.Component {
    render() {
        return (
            <div className="row-for-tabs">
                <div className="tabs">
                    <div className={`disabledTab ${(this.props.insuranceType==='ОМС') ? 'active' : ''}`}
                         id="left-tab" value="ОМС">ОМС</div>
                    <div className={`disabledTab ${(this.props.insuranceType==='ДМС') ? 'active' : ''}`}
                         id="right-tab" value="ДМС">ДМС</div>
                </div>
            </div>
        );
    }
}

export default DisabledTabs;
