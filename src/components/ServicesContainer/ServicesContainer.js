import React from 'react';
import ServiceSelector from "../ServiceSelector/ServiceSelector";
import ChosenServices from "../ChosenServices/ChosenServices";

class ServicesContainer extends React.Component {
    constructor(props){
        super(props);
        this.onChangeList = this.onChangeList.bind(this);
    }

    onChangeList(newList){
        this.props.onChange(newList);
    }

    render() {
        return (
            <div>
                <ServiceSelector services={this.props.services} onChange={this.onChangeList}
                                 tagList={this.props.tagList}/>
                <ChosenServices tagList={this.props.tagList} checkedTagList={this.props.checkedTagList}
                                onChange={this.onChangeList}/>
            </div>
        );
    }
}

export default ServicesContainer;
