import React from "react"
import { Segment } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'


const Stripe = ({ data, location }) => {

    const stripeStyle = {
        fontFamily: "Times",
        paddingLeft: '75px'
    }


  return (
    <div>
   <Segment style={stripeStyle} inverted > Black and Uyghur lives matter. Get involved <a href="https://blacklivesmatter.com/">here</a> and <a href="https://uhrp.org/what-you-can-do" >here</a>. </Segment>
    </div>
  )
}

export default Stripe