import React from "react"
import {Doughnut } from 'react-chartjs-2';
import { Grid } from 'semantic-ui-react'
import '../listicle/style/listItem.css'
import '../listicle/style/listItem.css'
import 'semantic-ui-css/semantic.min.css'

const DonutGraphListItem = (props) => {

    const data = {
        labels: [
            'Digital Projects',
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

    return (

        <div className='listItemClassName' >
            <Grid columns={2} divided stackable inverted></Grid>
            <Grid.Row width={12} >
            <Grid.Column width={2} >
            <h1 className='itemNumber' > {props.number}. </h1>
            </Grid.Column>
            {props.link ? 
            <div> <a rel="noreferrer" target="_blank" href={props.link} >  <h1>  {props.title}  </h1> </a> <br />  </div> : <h1> {props.title} </h1> }
<Doughnut data={data} 
           options={{
               onClick: function(event, element) {
                   const backgroundColor = element[0]._model.backgroundColor;

               switch(backgroundColor) {
                   case "#FF6384":
                    window.open('https://www.epigraphing.com/Work','_blank');
                       break;
                    case "#36A2EB":
                        window.open('https://www.epigraphing.com/Writing','_blank');
                        break;
                    case "#FFCE56":
                        window.open('https://www.epigraphing.com/Writing','_blank');
                        break;
               }

               }
           }}
           
           />
            </Grid.Row>
            
        </div>
    )


}

export default DonutGraphListItem