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
                'contact'
            ],
            lines: ['']
            
        }
        this.execute = this.execute.bind(this)
    }

    execute(cmd) {
        let arr = [...this.state.lines]

        console.log(cmd)
        let toPush =''
        try {
            const splitArr = cmd.split(' ')
            const idx = this.state.commands.indexOf( splitArr[0]) 

            if(splitArr.length < 2) {
                if(idx === -1) {
                    toPush = 'command "' + splitArr[0] + '" is not recognized'
                }

                else if(idx === 1) {
                    arr.push('Available pages are:')
                    this.state.pages.forEach((pg, itr) => {
                        const temp = <div style={{paddingLeft: '16px'}} > {pg} </div>
                        arr.push(temp)
                    })
                }

                else if(idx === 3) {
                    arr = ['']
                    toPush = ''
                }
                else if(idx === 0) {
                    this.state.instructions.forEach((inst, i ) => {
                        arr.push(inst)
                    })
                }
            }

            else if (splitArr.length > 2) toPush = 'Too many arguments in input'

            else {
                if (idx === 2 ) {

                }
            }
        }
        catch(err) {

        }

        finally {
            console.log(arr, toPush)
            arr.push(toPush)
            if(toPush !== '') arr.push('')
            this.setState({
                lines: arr
            }, () => console.log(this.state.lines))
        }
    }

    render() { 
        return ( 
            <div id="terminal-container">
                <div id="terminal-header"> 
                    <span>application-terminal.exe</span>
                </div>
                <div id="terminal-reactive-window">
                    <ExpandingWindow expanded={true}>test</ExpandingWindow>
                </div>
                <div id="terminal-window">
                    {
                        this.state.lines.map((line, i) => {
                            return <CodeLine key={i + '-line'} line={line}  callback={this.execute} ></CodeLine>
                        })
                    }
                </div>
            </div>
         );
    }
}
 
export default Terminal;