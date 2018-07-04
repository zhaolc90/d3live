import React        from 'react';
import * as d3           from 'd3';
const xMax   = (data)  => d3.max(data, (d) => d[0]);
const yMax   = (data)  => d3.max(data, (d) => d[1]);

// Returns a function that "scales" X coordinates from the data to fit the chart
const xScale = (props) => {
  return d3.scale.linear()
    .domain([0, xMax(props.data)])
    .range([props.padding, props.width - props.padding * 2]);
};

// Returns a function that "scales" Y coordinates from the data to fit the chart
const yScale = (props) => {
  return d3.scale.linear()
    .domain([0, yMax(props.data)])
    .range([props.height - props.padding, props.padding]);
};

export default (props) => {
  const scales = { xScale: xScale(props), yScale: yScale(props) };
  return <svg width={props.width} height={props.height}>
    <DataCircles {...props} {...scales} />
  </svg>
}

const renderCircles = (props) => {
    return (coords, index) => {
      const circleProps = {
        cx: props.xScale(coords[0]),
        cy: props.yScale(coords[1]),
        r: 2,
        key: index
      };
      return <circle {...circleProps} />;
    };
  };
  
  const DataCircles = (props) => {
    return <g>{ props.data.map(renderCircles(props)) }</g>
  }
