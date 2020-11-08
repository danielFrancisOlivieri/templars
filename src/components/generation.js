import React from "react"
import 'semantic-ui-css/semantic.min.css'
import "tooltip-sequence/dist/index.css";
import { Segment } from 'semantic-ui-react'
import * as d3 from "d3";

export default class Generation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 1 };
  }

  componentDidMount() {
    var svg = d3.select('.generationArea')
      .append('svg')
      .attr("width", '100%')
      .attr("height", 500);

    function generationAnimation() {
      var oneGenerationCometh = svg.append('text')
        .text('One generation cometh')
        .style('font-family', 'Times')
        .style('font-size', '3em')

      oneGenerationCometh.attr('x', '5%').attr('y', '15%')

      var anotherFadethAway = svg.append('text')
        .text('And another generation fadeth away')
        .style('font-family', 'Times')
        .style('font-size', '3em')

        anotherFadethAway.attr('x', '5%').attr('y', '45%')

        var butTheEarthAbides = svg.append('text')
        .text('But the Earth abides forever')
        .style('font-family', 'Times')
        .style('font-size', '3em')

        butTheEarthAbides.attr('x', '5%').attr('y', '75%')

        repeat();

    function repeat() {

      oneGenerationCometh
      .attr('x', '5%')
      .attr('y', '-15%')
      .transition()
      .duration(2000)
      .attr('x', '5%')
      .attr('y', '15%')
      .transition()
      .duration(2000)
      .on('end', repeat)

      anotherFadethAway
      .attr('x', '5%')
      .attr('y', '45%')
      .style("opacity", 1)
      .transition()
      .delay(2000)
      .duration(2000)
      .style("opacity", 0)
      .transition()
      .on('end', repeat)

    }

    }

    generationAnimation();

  }

  render() {
    return (
      <div>

<Segment
raised
className="generationArea"
width="700px"
height="500px"
>
</Segment>

      </div>
    );
  }
}
