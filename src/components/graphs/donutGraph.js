import React from "react"
import { LineChart, XAxis, Tooltip, CartesianGrid, Line } from 'recharts';
import {Doughnut, Scatter } from 'react-chartjs-2';
import 'semantic-ui-css/semantic.min.css'

const DonutGraph = () => {

    const data = {
        labels: [
            'Red',
            'Green',
            'Yellow'
        ],
        datasets: [{
            data: [300, 50, 100],
            backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
            ],
            hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
            ]
        }]
    };

    return (

     <div>
    <h2>Doughnut Example</h2>
    <Doughnut data={data} />

     </div>
    )


}

export default DonutGraph