import React from "react"
import { Scatter } from 'react-chartjs-2';
import 'semantic-ui-css/semantic.min.css'

const ScatterGraph = () => {

    const data = {
        labels: ['Scatter'],
        datasets: [
          {
            label: 'Philosophers',
            fill: false,
            backgroundColor: '#FF6384',
            pointStyle: 'crossRot',
            pointBorderColor: '#FF6384',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 10,
            pointHoverRadius: 15,
            pointHoverBackgroundColor: '#FF6384',
            pointHoverBorderColor: '#FF6384',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [
              { x: 5, y: 8 },
              { x: 7, y: 3 },
              { x: 3, y: 6 },
              { x: 6, y: 4 },
              { x: 10, y: 5 },
              { x: 5, y: 10 },
              { x: 3, y: 2 },
            ]
          }
        ]
      };

    return (

     <div>
    <h2>Philosophers</h2>
        <Scatter data={data}
        options={{
          scales: {
            yAxes: [{
              scaleLabel: {
                display: true,
                labelString: 'Yeet',
                fontSize: 22
              }
            }],
            xAxes: [{
              scaleLabel: {
                display: true,
                labelString: 'x axis',
                fontFamily: 'Arial',
                fontSize: 22
              }
            }],
          }   
          }}
        />

     </div>
    )


}

export default ScatterGraph