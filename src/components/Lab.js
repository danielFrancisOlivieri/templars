import React from "react"
import { Button } from 'semantic-ui-react'
import * as d3 from "d3";
import 'semantic-ui-css/semantic.min.css'
import "tooltip-sequence/dist/index.css";
import "./style/lab.css";

function grow() {
  
  d3.select('.my_rect')
  .transition()
  .delay(400)
  .duration(2000)
  .attr("width", "400")
  .attr("fill", "#6C91C2")

}

export default class Lab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShown: false,
      date: new Date()};
  }

  componentDidMount() {

    var data = [210, 36, 322, 59, 123, 350, 290];

var width = 400, height = 300;

var svg = d3.select(".graphCanvas")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

var bars = svg.selectAll(".myBars")
    .data(data)
    .enter()
    .append("rect");

bars.attr("x", 10)
.attr("fill", "#faa307")
    .attr("y", function(d,i){ return 10 + i*40})
    .attr("width", function(d){ return d})
    .attr("height", 30);
  }


  render() {

    return (
      <div>


        <h1>Ciao, mondo!</h1>
        <h2>Sono le {this.state.date.toLocaleTimeString()}.</h2>
        <Button className='startButton' onClick={grow} >Click Here</Button>
        <h2>Here's the graph</h2>

        <div className='pixelart-to-css'>

</div>

      </div>
    );
  }
}
