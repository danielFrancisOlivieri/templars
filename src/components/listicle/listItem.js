import React from "react"
import { Grid } from 'semantic-ui-react'
import './style/listItem.css'
import 'semantic-ui-css/semantic.min.css'

const ListItem = (props) => {

    return (

        <div className='listItemClassName' >
            <Grid columns={2} divided stackable inverted></Grid>
            <Grid.Row width={12} >
            <Grid.Column width={2} >
            <h1 className='itemNumber' > {props.number}. </h1>
            </Grid.Column>
            {props.link ? 
            <div> <a rel="noreferrer" target="_blank" href={props.link} >  <h1>  {props.title}  </h1> </a> <br />  </div> : <h1> {props.title} </h1> }


        {props.link ? 
            <div className='linkItemContent' > <a rel="noreferrer" target="_blank" href={props.link} >  <h1>  {props.content}  </h1> </a> <br />  </div> : props.content } 

            </Grid.Row>
            
        </div>
    )


}

export default ListItem