import React from "react"
import {Doughnut } from 'react-chartjs-2';
import 'semantic-ui-css/semantic.min.css'

class DonutGraph extends React.Component {

    data = {
        labels: [
            'History',
            'Stories',
            'Essays',
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

    render() {
        return (

            <div>
           <Doughnut data={this.data} />
       
            </div>
           )

    }
}

export default DonutGraph