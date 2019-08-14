import React, { Component } from 'react';
import './style.css'
import CodeLine from '../../comps/CodeLine';
import ExpandingWindow from '../../comps/ExpandingWindow';

class Terminal extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            instructions: [
                <div>commands</div>,
                <div className="align-start">help - lists out all commands</div>,
                <div className="align-start">pages - lists out all pages</div>,
                <div><span>goto - navigate to a page</span> <span className="one-tab">usage: goto [pageName]</span> </div>,
                <div>contact - display contact information</div>
            ],
            commands: [
                'help',
                'pages',
                'goto',
                'clear'
            ],
            pages: [
                'projects',
                'experience',
                'skills',
                'hobbies',

            ],
            lines: [true]
            
        }
        this.execute = this.execute.bind(this)
    }

    execute() {
        const arr = [...this.state.lines]
        arr.push(true)
        this.setState({
            lines: arr
        })
    }

    render() { 
        return ( 
            <div id="terminal-container">
                <div id="terminal-header"> 
                    <span>application-terminal.exe</span>
                </div>
                <div id="terminal-reactive-window">
                    <ExpandingWindow title='Resume'></ExpandingWindow>
                </div>
                <div id="terminal-window">
                    {this.state.instructions.map((instruction, itr) => {
                        return <div key={itr + '-inst'} className="window-instruction">{instruction}</div>
                    })}
                    {
                        this.state.lines.map((line, i) => {
                            return <CodeLine key={i + '-line'}  callback={this.execute} ></CodeLine>
                        })
                    }
                    
                </div>
            </div>
         );
    }
}
 
export default Terminal;