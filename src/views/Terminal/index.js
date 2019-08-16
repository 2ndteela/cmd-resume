import React, { Component } from 'react';
import './style.css'
import CodeLine from '../../comps/CodeLine';
import Typist from 'react-typist'
import '../../../node_modules/react-typist/dist/Typist.css'

class Terminal extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            instructions: [
                <div>commands</div>,
                <div className="align-start">help - lists out all commands</div>,
                <div className="align-start">pages - lists out all pages</div>,
                <div><span>print - print a page</span> <span className="one-tab">usage: goto [pageName]</span> </div>,
                <div>contact - display contact information</div>
            ],
            commands: [
                'help',
                'pages',
                'print',
                'clear'
            ],
            pages: [
                'projects',
                'experience',
                'skills',
                'hobbies',
                'contact',
                'start'
            ],
            lines: [''],
            selectedPage: 'start'
            
        }
        this.execute = this.execute.bind(this)
    }

    execute(cmd) {
        let arr = [...this.state.lines]
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
                    toPush = <h3>This is a print command that i have to try out doing a long thing</h3>
                }
                else toPush = 'command "' + splitArr[0] + '" is not recognized'
            }
        }
        catch(err) {
            toPush = 'Invalid input'
        }

        finally {
            arr.push(toPush)
            if(toPush !== '') arr.push('')
            this.setState({
                lines: arr
            })
        }
    }

    render() { 
        return ( 
            <div id="terminal-container">
                <div id="terminal-header"> 
                    <span>application-terminal.exe</span>
                </div>
                <div id="terminal-window">
                    {
                        this.state.lines.map((line, i) => {
                            if(line !== 'typist') return <CodeLine key={i + '-line'} line={line}  callback={this.execute} ></CodeLine>
                            else
                                return(
                                    <Typist avgTypingDelay={30} cursor={{hideWhenDone: true, hideWhenDoneDelay: 0 }} >
                                        <Typist.Delay ms={500} />
                                        {this.props.children}
                                    </Typist>
                                )
                        })
                    }
                </div>
            </div>
         );
    }
}
 
export default Terminal;