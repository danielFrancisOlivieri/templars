import React, { PureComponent } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { x: 100, y: 200, z: 200 },
  { x: 120, y: 100, z: 260 },
  { x: 170, y: 300, z: 400 },
  { x: 140, y: 250, z: 280 },
  { x: 150, y: 400, z: 500 },
  { x: 110, y: 280, z: 200 },
];

export default class Example extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
          newPoints: [
            { x: 150, y: 230, z: 250 },
          ]
        };
      }

      handleClick = (o) => {
          console.log(o);
          this.setState({ newPoints: [...this.state.newPoints, { x: o.xValue, y: o.yValue, z: 250 }] })
        //   let { newPoints } = this.state;
        //   console.log(newPoints);
        //   newPoints.push({ x: o.xValue, y: o.yValue, z: 250 })
        //   console.log(newPoints);
        //   this.setState({newPoints: newPoints });
      }

  render() {
    return (
    
        <ScatterChart
          width={400}
          height={400}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
          onClick={this.handleClick}
        >
          <CartesianGrid />
          <XAxis type="number" dataKey="x" name="stature" unit="cm" />
          <YAxis type="number" dataKey="y" name="weight" unit="kg" />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter name="Test 1" data={data} fill="#8884d8" />
          <Scatter name="Test 2" data={this.state.newPoints} fill="#F26419" />
        </ScatterChart>
      
    );
  }
}
