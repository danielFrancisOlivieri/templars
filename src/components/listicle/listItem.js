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
                {props.content}
            </Grid.Row>
            
        </div>
    )


}

export default ListItem