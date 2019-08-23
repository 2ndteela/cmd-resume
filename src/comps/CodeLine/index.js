import React, { Component } from 'react';
import './style.css'
import {projectsDir, skillsDir, expDir, hobbiesDir} from '../../services'

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
        else if (e.key === 'Tab') {
            e.preventDefault()

            let arr
            if(this.state.dir === '/') arr = [...this.props.list]
            else if(this.state.dir ==='/projects/') arr = projectsDir()
            else if(this.state.dir === '/skills/') arr = skillsDir()
            else if(this.state.dir ==='/experience/') arr = expDir()
            else if (this.state.dir === '/hobbies/') arr = hobbiesDir()
            else arr = []
            
            const split = this.state.command.split(' ')
            if(split.length === 2) {
                for(let i = 0; i < arr.length; i++) {
                    if(arr[i].includes(split[1])) {

                        this.setState({
                            command: split[0] + ' ' + arr[i]
                        })

                        i = arr.length
                    }
                }
            } 
        }
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