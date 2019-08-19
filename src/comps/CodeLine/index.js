import React, { Component } from 'react';
import './style.css'

class CodeLine extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            command: '',
            locked: false,
            dir: ''
        }
    }

    execute() {
        this.setState({ locked: true})
        this.props.callback(this.state.command)
    }

    checkValue(e) {
        if(e.key === 'Enter') this.execute()
    }

    updateValue(val) {
        this.setState({
            command: val.target.value
        })
    }

    showInput() {
        if(this.state.locked) return <div>{this.state.command}</div>
        else return <input autoCapitalize={'none'} value={this.state.command} autoFocus onChange={(e) => this.updateValue(e)} onKeyDown={(e) => this.checkValue(e)} ></input>
    }

    componentDidMount() {
        this.setState({
            dir: this.props.dir + ''
        })
    }

    render() { 

        if(this.props.line === '')
            return ( 
                <div className="code-line-container">
                    <span className="code-line-header" >user@job{this.state.dir}:~$</span>
                    {this.showInput()}
                </div>
            );
        else
            return (
                <div className="code-line-container">
                    <span>{this.props.line}</span>
                </div>
            )
    }
}
 
export default CodeLine;