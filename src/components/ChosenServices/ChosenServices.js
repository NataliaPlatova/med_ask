import React from 'react';

import './ChosenServices.css';
import ServiceTag from "../ServiceTag/ServiceTag";
import CheckedServiceTag from "../CheckedServiceTag/CheckedServiceTag";

class ChosenServices extends React.Component{
    constructor(props) {
        super(props);
        this.delete=this.delete.bind(this);
    }

    delete(tag) {
        let newList = this.props.tagList;
        let tagIndex = newList.indexOf(tag);
        newList.splice(tagIndex, 1);
        this.props.onChange(newList);
    }

    render() {
        const uncheckedServices =(
            <div className="chosen">
                {this.props.tagList.map(tag=>{
                    return(
                        <ServiceTag tag={tag} key={tag} onDelete={this.delete}/>
                    )
                })}
            </div>
        );

        const checkedServices =(
            <div className="chosen">
                {this.props.checkedTagList.map(list => {
                    list.map(checkedService =>{
                        return(
                            <CheckedServiceTag checkedService={checkedService} image={list} />
                        );
                    })
                })}
            </div>
        );

        return(
            <div>
                {(this.props.checkedTagList.length===0) ? uncheckedServices : checkedServices}
            </div>
        )
    }
}

export default ChosenServices;

// return(
//  <div>
//      {this.props.checkedTagList.map(list =>{
//      list.map(checkedService =>{
//          return(
//              <CheckedServiceTag checkedService={checkedService} image={list} />
//          );
//          })
//      )}
//  </div>
// )

