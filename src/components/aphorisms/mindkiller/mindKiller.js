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
        var dune = d3.select(".mindKillerArea")
        .append("svg")
       .attr("width", '100%')
       .attr("height", 500)
       .style('font-family', 'Times')
       

       function animation() {

        // creating elements
        let mindkiller = dune.append('text')
       .text('I must not fear. Fear is the mind-killer.')
       .attr('x', 150)
       .attr('y', 100);

       let fear = dune.append('text')
       .text('Fear is the little-death that brings total obliteration.')
       .attr('x', 150)
       .attr('y', 150)

       let face = dune.append('text')
       .text('I will face my fear.')
       .attr('x', 150)
       .attr('y', 200)

       let permit = dune.append('text')
       .text('I will permit it to pass over me and through me.')
       .attr('x', 150)
       .attr('y', 250)

       let past = dune.append('text')
       .text('And when it has gone past I will turn the inner eye to see its path.')
       .attr('x', 150)
       .attr('y', 300)

       let prayer = dune.append('text')
       .text('Where the fear has gone there will be nothing. Only I will remain.')
       .attr('x', 150)
       .attr('y', 350)

       let remain = dune.append('text')
       .text('Only I will remain.')
       .attr('x', 150)
       .attr('y', 400)

       // transitions

        mindkiller
        .style("opacity", 1)
       .transition()
       .delay(2000)
       .duration(2000)
       .style("opacity", 0);

       fear
        .style("opacity", 1)
       .transition()
       .delay(4000)
       .duration(2000)
       .style("opacity", 0);

       face
        .style("opacity", 1)
       .transition()
       .delay(6000)
       .duration(2000)
       .style("opacity", 0);

       permit
       .style("opacity", 1)
      .transition()
      .delay(8000)
      .duration(2000)
      .style("opacity", 0);

      past
       .style("opacity", 1)
      .transition()
      .delay(10000)
      .duration(2000)
      .style("opacity", 0);

      prayer
       .style("opacity", 1)
      .transition()
      .delay(12000)
      .duration(2000)
      .style("opacity", 0)
      .transition()
      .delay(3000)
      .on('end', animation);


       }
       
       animation();
    }


    render() {
        return (
          <div>
    <Segment
    className="mindKillerArea"
    style={{ minHeight: 500 }}
    >
    </Segment>
    
          </div>
        );
      }
    }
