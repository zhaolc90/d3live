import React       from 'react';
import ScatterPlot from './ScatterPlot';

import * as d3           from 'd3';

import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live'
import code from './d3code'

const scope = { d3 };

const styles = {
  width   : 500,
  height  : 300,
  padding : 30,
};

// The number of data points for the chart.
const numDataPoints = 50;

// A function that returns a random number from 0 to 1000
const randomNum     = () => Math.floor(Math.random() * 1000);

// A function that creates an array of 50 elements of (x, y) coordinates.
const randomDataSet = () => {
  return Array.apply(null, {length: numDataPoints}).map(() => [randomNum(), randomNum()]);
}

export default class Chart extends React.Component{
  constructor(props) {
    super(props);
    this.state = { data: randomDataSet() };
    this.onButton = this.onButton.bind(this)
  }

  randomizeData() {
    this.setState({ data: randomDataSet() });
  }

  onButton(){
    d3.select("#someDiv").style("border", "5px darkgray dashed");
    d3.select("#someDiv").attr("id", "newID");
    d3.select("#someCheckbox").property("checked", true);
  }

  render() {
    return <div>
      {/* <div id={'someDiv'}>11111</div>
      <input type='checkbox' id='someCheckbox'/>
      <div className="controls">
        <button className="btn randomize" onClick={this.onButton}>
          run d3
        </button>
      </div> */}
      <LiveProvider scope={scope} code={code}>
        <LivePreview />
        <LiveEditor />
        <LiveError />
      </LiveProvider>
      <h1>Playing With React and D3</h1>
      <ScatterPlot {...this.state} {...styles} />
      <div className="controls">
        <button className="btn randomize" onClick={() => this.randomizeData()}>
          Randomize Data
        </button>
      </div>
      <br/>
    </div>
  }
}
