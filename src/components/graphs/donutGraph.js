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
           <Doughnut data={this.data} 
           options={{
               onClick: function(event, element) {
                   const backgroundColor = element[0]._model.backgroundColor;

               switch(backgroundColor) {
                   case "#FF6384":
                       console.log('History');
                       break;
                    case "#36A2EB":
                        console.log('Stories');
                        break;
                    case "#FFCE56":
                        console.log('Essays');
                        break;
               }

               }
           }}
           
           />
       
            </div>
           )

    }
}

export default DonutGraph