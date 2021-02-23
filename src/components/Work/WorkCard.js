import React from 'react'
import { Card, Icon } from 'semantic-ui-react'
import WorkType from "./WorkType"
import './style/cardstyle.css'

const WorkCard = (props) => (
  <Card className="cardStyle" fluid  href={props.link} >
   <img src={props.image} /> 
    <Card.Content>
      <Card.Header>{props.title}</Card.Header>
      <Card.Meta><WorkType isProfessional = {props.isProfessional} /> </Card.Meta>
      <Card.Description> {props.description}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a href={props.link}>
        <Icon name='linkify' />
        Link
      </a>
    </Card.Content>
  </Card>
)

export default WorkCard