import React from 'react'
const code =`
class d3code extends React.Component {
    constructor(props) {
        super(props)
        this.onButton = this.onButton.bind(this)
    }
    onButton() {
        d3.select('#someDiv').style('background','red')
        d3.select("circle").remove()
        d3.select("rect").style("fill", "purple") 
    }
    render() {
        return (
            <React.Fragment>
                <button onClick={this.onButton}>d3 func</button>
            </React.Fragment>
        );
    }
}

`
export default code
class d3code extends React.Component {
    constructor(props) {
        super(props)
        this.onButton = this.onButton.bind(this)
    }
    onButton() {
        d3.select('#someDiv').style('background','red')
        d3.select("circle").remove()
        d3.select("rect").style("fill", "purple") 
    }
    render() {
        return (
            <React.Fragment>
                <button onClick={this.onButton}>d3 func</button>
            </React.Fragment>
        );
    }
}
