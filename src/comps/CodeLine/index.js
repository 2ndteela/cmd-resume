import React, { Component } from 'react';
import './style.css'

class CodeLine extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            command: '',
            locked: false
        }
    }

    execute() {
        this.setState({ locked: true})
        this.props.callback()
    }

    checkKey(val) {
        if(val.key === 'Enter') this.execute()
        else if(val.key === 'Backspace') 
            this.setState({
                command: this.state.command.substr(0, this.state.command.length - 1)
            })

        else if (val.key === 'Control' || val.key === 'Shift' || val.key === 'Tab' || val.key === 'Alt' || val.key === 'CapsLock') {}

        else
        this.setState({
            command: this.state.command + val.key
        })
    }

    showInput() {
        if(this.state.locked) return <div>{this.state.command}</div>
        else return <input autoCapitalize={'none'} value={this.state.command} autoFocus onKeyDown={(e) => this.checkKey(e)} ></input>
    }

    render() { 
        return ( 
            <div className="code-line-container">
                <span className="code-line-header" >user@job:~$</span>
                {this.showInput()}
            </div>
         );
    }
}
 
export default CodeLine;