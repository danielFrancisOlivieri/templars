import React, { PureComponent } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, ReferenceLine, Tooltip, Legend } from 'recharts';
import { PragmaToolTip } from '../components/pragma/tooltip/tooltip';
import Layout from "../components/layout"

const strangers = [
    { name: "Dalai Lama and Anyone", x: 85, y: 5 },
    { name: "Utter strangers", x: 50, y: 5 },
    { name: "Dante for Beatrice", x: 80, y: 10 },
    { name: "Romeo and Juliet", x: 95, y: 30 },
   ]
   
   const enemies = [
     {name: 'Marriage story', x: 20, y: 90 },
     {name: 'Batman and Joker', x: 0, y: 50 },
     {name: 'Holmes and Moriarty', x: 10, y: 60 },
   ]

   const lovers = [
     {name: 'Nick and Nora', x: 70, y: 80 },
     {name: 'Janie and Teacake', x: 90, y: 70},
     {name: 'Beatrice and Benedict', x: 75, y: 90},
     {name: 'Gertrude Stein and Alice B. Toklas', x: 90, y: 90 },
     {name: 'Ellen and Portia', x: 70, y: 97 }
   ]

export default class Example extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
          newPoints: [],
          activeDotName: ''
        };
      }

      handleClick = (o) => {
          console.log(o);
          this.setState({ newPoints: [...this.state.newPoints, {name: 'Original', x: o.xValue, y: o.yValue }] })
      }
      handleMouseEnter = (o) => {
        console.log(o);
        this.setState({activeDotName: o.name});
      }

  render() {
    return (
        <Layout title={'Knowledge vs Affection'}>
        <br />
        <br />
        <center>
  <ScatterChart
        width={500}
        height={500}
        margin={{
          top: 5,
          right: 20,
          left: 20,
          bottom: 5
        }}
        onClick={this.handleClick}
      >
        <CartesianGrid />
            <XAxis type="number" dataKey="x" name="affection" />
            <YAxis type="number" dataKey="y" name="knowledge" />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} content={<PragmaToolTip title={this.state.activeDotName} />} />
            <Legend />
            <ReferenceLine y={50} stroke="red" />
            <ReferenceLine x={50} stroke="red" />
        <Scatter name="Strangers" data={strangers} fill="#CCDBDC" onMouseEnter={this.handleMouseEnter} />
        <Scatter name="Enemies" data={enemies} fill="#2191FB" activeDot={{ r: 10 }} onMouseEnter={this.handleMouseEnter} />
        <Scatter name="Lovers" data={lovers} fill="#D33E43" onMouseEnter={this.handleMouseEnter} />
        <Scatter name="New" data={this.state.newPoints} fill="#F26419" onMouseEnter={this.handleMouseEnter} />
      </ScatterChart>
      </center>
      <h2>Does Familiarity Breed contempt?</h2>
      <p>
      I want to bring different ways of understanding into the same fold, to have them work together to in their different ways, with their different strengths to assemble an experience and an understanding that unwraps what had been hidden. II want Montaigne next to a graph next to a statistic next to the findings of a study next to Emerson next to my own opinions next to a bibliography. I want a map too. I want to press the full powers of the website into service of a single idea, or a dozen ideas indexed together by a single concept, to see the unifying principle behind disparate realities. The idea behind the thing in the world. 
      </p>
    
      </Layout>
      
    );
  }
}
