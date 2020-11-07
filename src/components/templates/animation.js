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

var timeCircle = svg.append("circle")
.attr("fill", "steelblue")
.attr("r", 20);
repeat();

function repeat() {
timeCircle
.attr('cx', 40)      // position the circle at 40 on the x axis
.attr('cy', 250)     // position the circle at 250 on the y axis
.transition()        // apply a transition
.duration(2000)      // apply it over 2000 milliseconds
.attr('cx', 920)     // move the circle to 920 on the x axis
.transition()        // apply a transition
.duration(2000)      // apply it over 2000 milliseconds
.attr('cx', 40)      // return the circle to 40 on the x axis
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
