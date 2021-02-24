import React from "react"
import {Doughnut } from 'react-chartjs-2';
import 'semantic-ui-css/semantic.min.css'

const DonutGraph = () => {

    const data = {
        labels: [
            'Insights',
            'Niche References',
            'Graphs',
            'Pure Evil'
        ],
        datasets: [{
            data: [300, 50, 100, 0],
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
    <h2>What This Site is Made of </h2>
    <Doughnut data={data} />

     </div>
    )


}

export default DonutGraph