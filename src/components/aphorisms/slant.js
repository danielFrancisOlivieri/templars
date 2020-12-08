import React from "react"
import 'semantic-ui-css/semantic.min.css'
import "tooltip-sequence/dist/index.css";
import './example.css';
import './slant.css';
import { Segment } from 'semantic-ui-react'
import * as d3 from "d3";

export default class Animation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {counter: 1};
  }

  componentDidMount() {
   var svg = d3.select(".exampleArea") // grabs where to put it 
.append("svg")
.attr("width", 960)
.attr("height", 500);

// var willBeText = svg.append("text")
// .text('terwillger bunts one')
// .style('font-family', 'Times')

// willBeText.attr('x', 50).attr('y', 450)
// .style("text-anchor", "middle")
// .transition()
// .attr("transform", "rotate(-65)")
// .duration(5000)
// .transition()
// .attr("transform", "rotate(0)")
// .duration(5000)
// .on('end', repeat)

var rotated = svg.append('text')
.text('success in circuit lies')
.style('font-family', 'Times')


rotated.attr('x', '25%').attr('y', '50%')
.style('background-color', '#DAD7CD' )
.transition()
.duration(2500)
.attr('transform', 'matrix(0.866,0.5,-0.5,0.866,0,0)')
.transition()
.duration(2500)
// .attr('transform', 'rotate(0, 60, 140)' )
// .transition()
// .duration(2500)


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

<Segment
className="exampleArea"
width="700px"
height="500px"
>
  <div>Tell all the truth but tell it </div> <span class="rotation" >slant</span>
</Segment>


      </div>
    );
  }
}
