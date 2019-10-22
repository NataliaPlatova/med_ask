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

    toggle(e){
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
            /*--<form>
                <div>
                    <input type="radio" id="contactChoice1"
                           name="contact" value="ОМС" defaultChecked/>
                        <label htmlFor="contactChoice1">ОМС</label>
                        <input type="radio" id="contactChoice2"
                               name="contact" value="ДМС" />
                            <label htmlFor="contactChoice2">ДМС</label>
                </div>
            </form>--*/

        )
    }
}

export default Tabs;
