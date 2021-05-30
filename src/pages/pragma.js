import React, { PureComponent } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import Layout from "../components/layout"

const strangers = [
    { name: "Dalai Lama and Anyone", x: 9, y: 1 },
    { name: "Utter strangers", x: 1, y: 1 },
    { name: "Dante for Beatrice", x: 10, y: 2 },
    { name: "Romeo and Juliet", x: 10, y: 4 },
   ]
   
   const enemies = [
     {name: 'Marriage story', x: 1, y: 8 }
   ]

   const lovers = [
     {name: 'Nick and Nora', x: 7, y: 8 },
     {name: 'Janie and Teacake', x: 11, y: 7},
     {name: 'Beatrice and Benedict', x: 8, y: 7},
     {name: 'Gertrude Stein and Alice B. Toklas', x: 9, y: 9 },
     {name: 'Ellen and Portia', x: 7, y: 12 }
   ]

export default class Example extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
          newPoints: []
        };
      }

      handleClick = (o) => {
          console.log(o);
          this.setState({ newPoints: [...this.state.newPoints, { x: o.xValue, y: o.yValue, z: 250 }] })
      }
      handleMouseEnter(o) {
        console.log(o);
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
        {/* <CartesianGrid /> */}
            <XAxis type="number" dataKey="x" name="affection" />
            <YAxis type="number" dataKey="y" name="knowledge" />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <Legend />
        
        <Scatter name="Strangers" data={strangers} fill="#CCDBDC" />
        <Scatter name="Enemies" data={enemies} fill="#2191FB" />
        <Scatter name="Lovers" data={lovers} fill="#D33E43" onMouseEnter={this.handleMouseEnter} />
        <Scatter name="New" data={this.state.newPoints} fill="#F26419" />
      </ScatterChart>
      </center>
      <h2>Does Familiarity Breed contempt?</h2>
      <p>
      I want to bring different ways of understanding into the same fold, to have them work together to in their different ways, with their different strengths to assemble an experience and an understanding that unwraps what had been hidden. II want Montaigne next to a graph next to a statistic next to the findings of a study next to Emerson next to my own opinions next to a bibliography. I want a map too. I want to press the full powers of the website into service of a single idea, or a dozen ideas indexed together by a single concept, to see the unifying principle behind disparate realities. The idea behind the thing in the world. 
      </p>
      <h1>Does Familiarity Breed contempt?</h1>
      <p>
      I want to bring different ways of understanding into the same fold, to have them work together to in their different ways, with their different strengths to assemble an experience and an understanding that unwraps what had been hidden. II want Montaigne next to a graph next to a statistic next to the findings of a study next to Emerson next to my own opinions next to a bibliography. I want a map too. I want to press the full powers of the website into service of a single idea, or a dozen ideas indexed together by a single concept, to see the unifying principle behind disparate realities. The idea behind the thing in the world. 
      </p>
      <h1>Does Familiarity Breed contempt?</h1>
      <p>
      I want to bring different ways of understanding into the same fold, to have them work together to in their different ways, with their different strengths to assemble an experience and an understanding that unwraps what had been hidden. II want Montaigne next to a graph next to a statistic next to the findings of a study next to Emerson next to my own opinions next to a bibliography. I want a map too. I want to press the full powers of the website into service of a single idea, or a dozen ideas indexed together by a single concept, to see the unifying principle behind disparate realities. The idea behind the thing in the world. 
      </p>
      </Layout>
      
    );
  }
}
