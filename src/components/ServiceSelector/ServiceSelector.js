import React from 'react';

import './ServiceSelector.css';


class ServiceSelector extends React.Component{
    constructor(props){
        super(props);
        this.state={
            suggestions: [],
            text: ''
        };
        this.addTag = this.addTag.bind(this);
    }

    onTextChanged = (e) => {
        const serviceList = Object.keys(this.props.services[0]);
        const inputValue = e.target.value;
        let suggestions=[];
        if (inputValue.length>0) {
            const serviceRegex = new RegExp(`^${inputValue}`,`i`);
            suggestions = serviceList.sort().filter(v => serviceRegex.test(v));
        }
        this.setState(() => ({suggestions, text: inputValue }));
    }

    showSuggestions() {
        const { suggestions } = this.state;
        if(suggestions.length===0) {
            return null;
        } else {
            return(
                <ul>
                    {suggestions.map((item)=><li onClick={() => this.suggestionSelect(item)}>{item}</li>)}
                </ul>
            );
        }
    }

    suggestionSelect(service) {
        this.setState(() => ({
            suggestions: [],
            text: service
        }));
        this.addTag(service);
    }

    onEnter = (e) => {
        let inputValue = e.target.value;
        if(e.keyCode===13) {
            this.setState(() => ({
                suggestions: [],
                text: inputValue
            }));
            this.addTag(inputValue);
        }
    }

    addTag(service) {
        let newList = this.props.tagList;
            newList.push(service);
            this.props.onChange(newList);
        this.setState(() => ({
            suggestions: [],
            text: []
        }));
    }

    render() {
        const text = this.state.text;
        return(
            <div className="service-selector">
                <label id="med_services">Выберите медицинские услуги</label>
                <div className='AutoCompleteText'>
                    <input className="big-round" id="services"  value={ text } type='text' onChange={this.onTextChanged}
                           onKeyDown={this.onEnter}/>
                    {this.showSuggestions()}
                </div>
            </div>
        );
    }
}

export default ServiceSelector;
