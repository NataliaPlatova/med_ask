import React from 'react';
import Tabs from "../Tabs/Tabs";
import DisabledTabs from "../DisabledTabs/DisabledTabs";

class TabsContainer extends React.Component{
    render() {
        const tabs =(
            <Tabs />
        );

        const disabledTabs =(
            <DisabledTabs insuranceType={this.props.insuranceType}/>
        );

        return(
            <div>
                {this.props.insuranceType ? disabledTabs : tabs}
            </div>
        )
    };
}

export default TabsContainer;
