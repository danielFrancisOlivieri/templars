import React from "react"
import Layout from "./layout"
import 'semantic-ui-css/semantic.min.css'
import "tooltip-sequence/dist/index.css";
import { Button } from 'semantic-ui-react'
import * as d3 from "d3";
import { render } from "react-dom";


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
    this.state = {date: new Date()};
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div>
        <h1>Ciao, mondo!</h1>
        <h2>Sono le {this.state.date.toLocaleTimeString()}.</h2>
        <Button className='startButton' onClick={grow} >Click Here</Button>
        <h2>Here's the graph</h2>

        <svg className='myCanvas' height={700} width={700} style={{backgroundColor: '#6C91C2'}} >
<rect
        className="my_rect" x="10" y="200"
        width="200" height="30" stroke="black"
        fill="#69b3a2" strokeWidth="1"/>
</svg> 
      </div>
    );
  }
}
