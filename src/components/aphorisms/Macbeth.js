import React from "react"
import 'semantic-ui-css/semantic.min.css'
import "tooltip-sequence/dist/index.css";
import { Segment } from 'semantic-ui-react'
import { FaceIcon, ImageIcon, SunIcon } from '@modulz/radix-icons'
import * as d3 from "d3";



export default class Macbeth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {counter: 1};
  }

  componentDidMount() {

    // var svg = d3.select(".macbethArea")
    // .append("svg")
    // .attr("width", '100%')
    // .attr("height", 500);
    // d3.select('.macbethSpeechSegment')
    // .style('opacity', 0)
 
function macbethTransition() { 

    d3.select('.macbethSpeechSegmentFirst')
    .style('opacity', 0)
    .transition()
    .duration(3000)

repeat();

function repeat() {

};

};

macbethTransition();

  }

  render() {
    return (
      <div>
   

<Segment
className="macbethArea"
width="700px"
height="500px"
>
<p>
   <span className='macbethSpeechSegment macbethSpeechSegmentfirst' >Tomorrow</span>  <span>and tomorrow</span> <span>and tomorrow</span>
</p>
<FaceIcon />
<ImageIcon />
</Segment>

      </div>
    );
  }
}
