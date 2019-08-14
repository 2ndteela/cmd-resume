import React, { Component } from 'react';
import './style.css'

class ExpandingWindow extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="dialog-conatiner">
                <div className="dialog-content">
                    <div className="dialog-tag">{this.props.title}</div>
                    {this.props.children}
                </div>
            </div>
         );
    }
}
 
export default ExpandingWindow;