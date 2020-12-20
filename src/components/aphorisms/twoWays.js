import React from "react"
import 'semantic-ui-css/semantic.min.css'
import "tooltip-sequence/dist/index.css";
import { Segment } from 'semantic-ui-react'
import * as d3 from "d3";

export default class Animation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {counter: 1};
  }

  componentDidMount() {

   var svg = d3.select(".twoWaysArea")
.append("svg")
.attr("width", '100%')
.attr("height", 500);


function circleTransition() { 

    var horizontal = svg.append("text")
    .text('He went one way')
    .attr('y', '15%')
    .attr('x', '15%')
    .style('font-family', 'Times')
    
    horizontal.attr('x', 440).attr('y', 250)

    var vertical = svg.append("text")
    .text('... and I went another')
    .attr('y', '15%')
    .attr('x', '15%')
    .style('font-family', 'Times')
    
    vertical.attr('x', 440).attr('y', 250)
repeat();

function repeat() {
  horizontal
.attr('x', '5%')      // position the circle at 40 on the x axis
.attr('y', 250)     // position the circle at 250 on the y axis
.transition()        // apply a transition
.duration(2000)      // apply it over 2000 milliseconds
.attr('x', '80%')     // move the circle to 920 on the x axis
.transition()        // apply a transition
.duration(2000)      // apply it over 2000 milliseconds
.attr('x', '5%')      // return the circle to 40 on the x axis
.on("end", repeat);  // when the transition finishes start again

vertical
.attr('x', '30%')      // position the circle at 40 on the x axis
.attr('y', 10)     // position the circle at 250 on the y axis
.transition()        // apply a transition
.duration(2000)      // apply it over 2000 milliseconds
.attr('y', 450)     // move the circle to 920 on the x axis
.transition()        // apply a transition
.duration(2000)      // apply it over 2000 milliseconds
.attr('y', 10)     // return the circle to 40 on the x axis
.on("end", repeat);  // when the transition finishes start again
};

};

circleTransition();

  }

  render() {
    return (
      <div>
   
<test
id='animationBox'
width="400px"
height="500px"
style={{'backgroundColor': "#DAD7CD",
"outlineColor": 'black', 
"outlineStyle": 'solid'
}}
></test>


<Segment
className="twoWaysArea"
width="700px"
height="500px"
>
</Segment>

      </div>
    );
  }
}
