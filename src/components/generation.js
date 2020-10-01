import React from "react"
import 'semantic-ui-css/semantic.min.css'
import "tooltip-sequence/dist/index.css";
import { Button } from 'semantic-ui-react'
import * as d3 from "d3";


function play() {
  d3.select(".passeth")
  .transition()
    .attr("y", "500").duration(3000)
    .delay(1000)
    .style("opacity", 0).duration(3000);

    d3.select(".cometh")
    .transition()
      .attr("y", "50").duration(3000);

}

function revert() {
  d3.select(".passeth")
  .transition()
    .attr("y", "50").duration(0)
    .style("opacity", 1).duration(0);

    d3.select(".cometh")
    .transition()
      .attr("y", "-90").duration(0);

}

function run() {
  play();
  setTimeout(function() { revert(); }, 6000);
}

function loop3() {
run();
  for (let i = 1; i < 12; i++) {
    console.log('iteration');
    setTimeout(function() { run(); }, i * 10000 );
  }

}

export default class Generation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {counter: 1};
  }

  componentDidMount() {
 
  }

  componentWillUnmount() {
  }

   

  render() {
    return (
      <div>
        <Button className='startButton' onClick={loop3} >Click Here</Button>

        <br></br>
        <br></br>
        <br></br>
<br></br>
<h1>Ecclesiastes 1:4</h1>
        <svg width='100%' height='700px' className='generationCanvas' >
      <p className='terwilliger' ></p>
            <text x='40' y='50' fontSize='27px' className='passeth' > One generation passeth away</text>, 
            <text x='40' y='-90' fontSize='27px' className='cometh' >and another generation cometh. </text>
            <text x='40' y='130' fontSize='27px' >But the earth abideth for ever.</text>

        </svg>


      </div>
    );
  }
}
