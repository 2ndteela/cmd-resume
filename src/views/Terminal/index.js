import React, { Component } from 'react';
import './style.css'
import CodeLine from '../../comps/CodeLine';
// import Typist from 'react-typist'
import '../../../node_modules/react-typist/dist/Typist.css'
import {projectsDir, expDir, skillsDir, hobbiesDir, contactDir, facultyCards, allProjects, lsInterns, dndCompanion, familyMap, reactSkill, reactNativeSkill, vueSkill, nodeSkill, efcoreSkill, allSkills, n26Exp, lsitExp, allExp, frisbeeHobby, martialArtHobby, bakingHobby, allHobbies} from '../../services'

class Terminal extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            instructions: [
                <div className="align-start one-tab white-color">ls - lists out directory</div>,
                <div className="white-color one-tab align-start"><div>cd - change directory</div> <span className="two-tab">usage: cd [folderName]</span></div>,
                <div className="one-tab white-color align-start"><div>cat - prints out the contents of a file</div> <span className="two-tab">usage: cat [fileName]</span></div>,
                <div className="one-tab white-color">help - print out this menu</div>,
                <div className="one-tab white-color">tab key - autocomplete</div>
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
            if(splitArr.length > 2) throw new Error('Too many parameters for command "' + splitArr[0] + '"')

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
                    this.cat(splitArr[1])
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
        if(this.state.availableDirectories.indexOf(cmd) === -1 && cmd !== '..') throw new Error('directory "' + cmd + '" does not exist')
        else {
            if(cmd === '../' || cmd === '..') {
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

    cat(cmd) {
        const temp = [...this.state.lines]
        if(this.state.currentDirectory === '/projects/') {
            if(cmd === 'byuls-faculty-cards.txt') temp.push(facultyCards())
            else if(cmd === 'byuls-internships.txt') temp.push(lsInterns())
            else if (cmd === 'dnd-companion.txt') temp.push(dndCompanion())
            else if (cmd === 'family-map-app.txt') temp.push(familyMap())
            else if (cmd === 'all.txt') temp.push(allProjects())
            else temp.push('The directory "' + cmd + '" does not exsist')
        }

        else if (this.state.currentDirectory === '/skills/') {
            if(cmd === 'react.txt') temp.push(reactSkill())
            else if(cmd === 'react-native.txt' ) temp.push(reactNativeSkill())
            else if(cmd === 'vue.txt') temp.push(vueSkill())
            else if(cmd === 'node.txt') temp.push(nodeSkill())
            else if(cmd === 'entity-framework-core.txt') temp.push(efcoreSkill())
            else if(cmd === 'all.txt') temp.push(allSkills())
            else temp.push('The directory "' + cmd + '" does not exsist') 
        }

        else if (this.state.currentDirectory === '/experience/') {
            if(cmd === 'N26.txt') temp.push(n26Exp())
            else if (cmd === 'byu-lsit.txt') temp.push(lsitExp())
            else if (cmd === 'all.txt') temp.push(allExp())
            else temp.push('The directory "' + cmd + '" does not exsist')
        }

        else if (this.state.currentDirectory === '/hobbies/') {
            if(cmd === 'frisbee.txt') temp.push(frisbeeHobby())
            else if (cmd === 'martial-arts.txt') temp.push(martialArtHobby())
            else if (cmd === 'baking.txt') temp.push(bakingHobby())
            else if (cmd === 'all.txt') temp.push(allHobbies())
            else temp.push('The directory "' + cmd + '" does not exsist')
        }

        temp.push('')
        this.setState({ lines: temp })
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
                            return <CodeLine key={i + '-line'} line={line} dir={this.state.currentDirectory} list={this.state.availableDirectories} callback={this.execute} ></CodeLine>
                        })
                    }
                </div>
            </div>
         );
    }
}
 
export default Terminal;