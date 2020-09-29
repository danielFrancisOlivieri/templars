import React, { Component } from 'react'
import '../style/poems.css'

export default class ITooDislikeIt extends Component {

    render() { 
  return (
      <div> 
           <h3> Poetry </h3>
           <p className='subheading' >Marianne Moore </p>
    <pre> {
        `I, too, dislike it.
    Reading it, however, with a perfect contempt for it, one discovers in
    it, after all, a place for the genuine.`
        }
    </pre>
    </div>
  )
    }
}
