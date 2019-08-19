import React, { Component } from 'react';
import './style.css'
import CodeLine from '../../comps/CodeLine';
import Typist from 'react-typist'
import '../../../node_modules/react-typist/dist/Typist.css'
import {projectsDir, expDir, skillsDir, hobbiesDir, contactDir} from '../../services'

class Terminal extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            instructions: [
                <div className="align-start one-tab white-color">ls - lists out directory</div>,
                <div className="white-color one-tab"><div className="align-start">cd - change directory</div> <span className="two-tab">usage: cd [folderName]</span></div>,
                <div className="one-tab white-color"><div>cat - prints out the contents of a file</div> <span className="two-tab">usage: cat [fileName]</span></div>,
                <div className="one-tab white-color">help - print out this menu</div>
            ],
            commands: [
                'help',
                'ls',
                'cd',
                'cat',
                'clear'
            ],
            pages: [
                'projects',
                'experience',
                'skills',
                'hobbies',
                'contact',
            ],
            lines: [],
            selectedPage: 'start',
            currentDirectory: '/',
            availableDirectories: ['projects', 'experience', 'skills', 'hobbies', 'contact'],
            
        }
        this.execute = this.execute.bind(this)
    }

    execute(cmd) {
        try {
            const splitArr = cmd.split(' ')
            const idx = this.state.commands.indexOf(splitArr[0]) 

            switch(idx) {
                case 0: 
                    this.help()
                    break

                case 1: 
                    this.ls()
                    break
                
                case 2: 
                    this.cd(splitArr[1])
                    break
                
                case 3:
                    this.cat()
                    break
                
                case 4: 
                    this.clear()
                    break

                default:
                    throw new Error('command "' + splitArr[0] + '" not recognized')
            }

        }
        catch (err) {
            const temp = [...this.state.lines]
            temp.push(err.message)
            temp.push('')

            this.setState({
                lines: temp
            })
        }

    }

    ls() {
        let temp = [...this.state.lines]
        let arr

        if(this.state.currentDirectory === '/') {
            this.state.pages.forEach( page => {
                const toAdd =  <div className="one-tab">{page}/</div>
                temp.push(toAdd)
            })
        }
        else { 

            if(this.state.currentDirectory === '/projects/') arr = projectsDir()
            else if (this.state.currentDirectory === '/experience/') arr = expDir()
            else if (this.state.currentDirectory === '/skills/') arr = skillsDir()
            else if (this.state.currentDirectory === '/hobbies/') arr = hobbiesDir()
            else if (this.state.currentDirectory === '/contact/') arr = contactDir()

            arr.unshift('../')
            arr.forEach(item => temp.push(<div className="one-tab" >{item}</div>))
        }
        temp.push('')
        this.setState({
            lines: temp
        })
    }

    help() {
        let temp = [...this.state.lines]
        this.state.instructions.forEach(i => {
            temp.push(i)
        })
        temp.push('')
        this.setState({
            lines: temp
        })
    }

    cd(cmd) {
        if(this.state.availableDirectories.indexOf(cmd) === -1) throw new Error('directory "' + cmd + '" does not exist')
        else {
            if(cmd === '../') {
                const arr =  [...this.state.lines]
                arr.push('')
                this.setState({
                    currentDirectory: '/',
                    availableDirectories: [...this.state.pages],
                    lines: arr
                })
            }
            else {
                const temp = this.state.currentDirectory + cmd + '/'
                const arr = [...this.state.lines]
                arr.push('')
                this.setState({ 
                    currentDirectory: temp,
                    lines: arr
                })

                if(this.state.pages.indexOf(cmd) !== -1) this.setState({ availableDirectories: ['../']})
            }
        }
    }

    cat() {

    }

    clear() {
        this.setState({ lines: ['']})
    }

    componentDidMount() {
        this.help()

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
                            return <CodeLine key={i + '-line'} line={line} dir={this.state.currentDirectory}  callback={this.execute} ></CodeLine>
                        })
                    }
                </div>
            </div>
         );
    }
}
 
export default Terminal;