import React, { Component } from 'react'
import { Card, Icon } from 'semantic-ui-react'

const extra = (
  <p>
    <Icon name='user' />
    16 Friends
  </p>
)

export default class AuthorCard extends Component {
    constructor() {
        super();
        this.state = {color: "red"};
      }

    render() { 
  return (<Card
    image={this.props.image}
    header={this.props.name}
    meta={this.props.meta}
    description={this.props.description}
    extra={extra}
  ></Card>)
    }
}
