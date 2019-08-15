import React, { Component } from 'react';
import './style.css'

class ExpandingWindow extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className={this.props.expanded ? 'dialog-container expanded-window' : 'dialog-container'}>
                <div className="dialog-content">
                    {this.props.children}
                </div>
            </div>
         );
    }
}
 
export default ExpandingWindow;