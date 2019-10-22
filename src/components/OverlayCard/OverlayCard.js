import React from 'react';

import './OverlayCard.css';
import Form from "../Form/Form";

class OverlayCard extends React.Component{
    render() {
        return(
            <div className="overlay">
                <div className="card">
                    <h1>Проверка услуг медицинского страхования</h1>
                    <Form />
                </div>
            </div>
        )
    }
}

export default OverlayCard;
