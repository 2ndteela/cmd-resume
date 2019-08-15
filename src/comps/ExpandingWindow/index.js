import React, { Component } from 'react';
import './style.css'

class ExpandingWindow extends Component {
    constructor(props) {
        super(props);
        this.state = { 
        
            start:'',
            projects: '',
            experience: '',
            skills: '',
            hobbies: '',
            contact: '',
            topHash: '##################################################',
            bottomHash: '##################################################'
        }
    }

    componentDidMount() {
    }

    render() { 
        return ( 
            <div className={this.props.page !== null ? 'dialog-container expanded-window' : 'dialog-container'}>
                <div className="dialog-content">
                    <div id="top-hash" >{this.state.topHash}</div>
                    <h1>Projects</h1>
                    <div id="bottom-hash" >{this.state.bottomHash}</div>
                    <div className="project-card">
                        <h2>Life Science Faculty Schedules</h2>
                        <div>
                            The purpose of this website was to help the Life Science department visual their schedules and print out a conviniet card to display it. 
                            The challenge with this site was creating a custom calendar element that would adapt to various different start and end times for the different employees.
                        </div>
                        <div>Technology used: Vue, Entity Framework Core, MySQL</div>
                        <div className="row-flex">url: <a target="_blank" rel="noopener noreferrer" href="http://lsfacultyschedules.byu.edu" >http://lsfacultyschedules.byu.edu</a> </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default ExpandingWindow;