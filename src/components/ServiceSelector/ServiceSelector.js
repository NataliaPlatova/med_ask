import React from 'react';

import './ServiceSelector.css';

let newList=[];

class ServiceSelector extends React.Component{
    constructor(props){
        super(props);
        this.addTag = this.addTag.bind(this);
    }

    addTag(e) {
        if(e.keyCode===13){
            let newTag = e.target.value;
            newList.push(newTag);
            this.props.onChange(newList);
        }
    }

    render() {
        return(
            <div className="service-selector">
                <label id="med_services">Выберите медицинские услуги</label>
                <input className="big-round" id="services" placeholder="Выберите запрашиваемую услугу для пациента"
                       onKeyDown={this.addTag}/>
            </div>
        );
    }
}

export default ServiceSelector;
