import React from 'react';

import './Tabs.css';

class Tabs extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            active1: true,
            active2: false
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle(){
        this.setState({
            active1: !this.state.active1,
            active2: !this.state.active2
        });
    }

    render() {
        return(
            <div className="row-for-tabs">
                <div className="tabs">
                    <div className={`tab ${this.state.active1 ? "active" : ""}`}
                         id="left-tab" value="ОМС" onClick={this.toggle}>ОМС</div>
                    <div className={`tab ${this.state.active2 ? "active" : ""}`} id="right-tab"
                         value="ДМС" onClick={this.toggle}>ДМС</div>
                </div>
            </div>

        )
    }
}

export default Tabs;
