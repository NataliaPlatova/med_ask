import React from 'react';

import './AutoComplete.css';

class AutoComplete extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            suggestions: [],
            value: ''
        };
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
        }

    render(){
        const { text } = this.state;
        return(
            <div className='AutoCompleteText'>
                <input value={text} type='text' onChange={this.onTextChanged}/>
                {this.showSuggestions()}
            </div>
        );
    }
}

export default AutoComplete;
