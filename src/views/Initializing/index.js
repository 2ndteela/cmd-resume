import React, { Component } from 'react';
import './style.css'


class Initializing extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            dots: 3
         }
    }

    componentDidMount() {
        setInterval(() => {
            switch(this.state.dots) {
                case 1: 
                    this.setState({ dots: 2 })
                    break
                case 2: 
                    this.setState({ dots: 3 })
                    break
                default:
                    this.setState({ dots: 1})
            }
        }, 500)

        setTimeout(() => {
            this.props.history.push('/terminal')
        }, 3000)
    }

    dots() {
        const dot = <div className='dot'>.</div>
        const arr = []

        for(let i = 0; i < this.state.dots; i++) arr.push(dot)

        return arr.map( (d, i) => {
            return d
        })
    }

    render() { 
        return ( 
            <div id="initial-page">
                <div className="row-flex align-end">
                    <h1 id="initial-banner">Intializing</h1>
                    <div className="dot-container row-flex align-end">
                        {this.dots()}
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Initializing;