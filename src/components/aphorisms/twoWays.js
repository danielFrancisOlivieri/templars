import React from "react"
import 'semantic-ui-css/semantic.min.css'
import "tooltip-sequence/dist/index.css";
import * as d3 from "d3";

export default class Animation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {counter: 1};
  }

  componentDidMount() {
   var svg = d3.select("test")
.append("svg")
.attr("width", 960)
.attr("height", 500);

function circleTransition() { 

    var willBeText = svg.append("text")
    .text('He went one way')
    .attr('y', 150)
    .attr('x', 150)
    .style('font-family', 'Times')
    
    willBeText.attr('x', 440).attr('y', 250)

    var vertical = svg.append("text")
    .text('And I went another')
    .attr('y', 150)
    .attr('x', 150)
    .style('font-family', 'Times')
    
    vertical.attr('x', 440).attr('y', 250)
repeat();

function repeat() {
    willBeText
.attr('x', 40)      // position the circle at 40 on the x axis
.attr('y', 250)     // position the circle at 250 on the y axis
.transition()        // apply a transition
.duration(2000)      // apply it over 2000 milliseconds
.attr('x', 920)     // move the circle to 920 on the x axis
.transition()        // apply a transition
.duration(2000)      // apply it over 2000 milliseconds
.attr('x', 40)      // return the circle to 40 on the x axis
.on("end", repeat);  // when the transition finishes start again

vertical
.attr('x', 300)      // position the circle at 40 on the x axis
.attr('y', 150)     // position the circle at 250 on the y axis
.transition()        // apply a transition
.duration(2000)      // apply it over 2000 milliseconds
.attr('y', 450)     // move the circle to 920 on the x axis
.transition()        // apply a transition
.duration(2000)      // apply it over 2000 milliseconds
.attr('y', 150)     // return the circle to 40 on the x axis
.on("end", repeat);  // when the transition finishes start again
};

};

circleTransition();

  }

  componentWillUnmount() {
  }  

  render() {
    return (
      <div>
   
<test
width="400px"
height="500px"
style={{'backgroundColor': "#DAD7CD",
"outlineColor": 'black', 
"outlineStyle": 'solid'
}}
></test>


      </div>
    );
  }
}
