import React from 'react';
import ServiceSelector from "../ServiceSelector/ServiceSelector";
import ChosenServices from "../ChosenServices/ChosenServices";

class ServicesContainer extends React.Component {
    constructor(props){
        super(props);
        this.state={tagList: []};
        this.getTagList = this.getTagList.bind(this);
    }

    getTagList(newList) {
        this.setState({
            tagList: newList
        });
    }

    render() {
        return (
            <div>
                <ServiceSelector onChange={this.getTagList}/>
                <ChosenServices tagList={this.state.tagList}/>
            </div>
        );
    }
}

export default ServicesContainer;
