import React from "react"
import 'semantic-ui-css/semantic.min.css'
import "tooltip-sequence/dist/index.css";
import './../components/style/layout.css'
import './style/pageHeader.css';
import Navbar from "../components/navbar"
import { rhythm } from "../utils/typography"
import Bio from '../components/bio'
import Stripe from '../components/stripe'

const about = ({ data, location }) => {

    const aboutStyle = {
        fontFamily: `Montserrat, sans-serif`
    }

  return (
    <div>
        <Stripe />
      <Navbar></Navbar>
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(30),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        lineHeight: '1.8em'
      }}
    >
      <center>
        <h1 className='pageHeader' > About This Site </h1>
      </center>
      <br /> <br />
      <p style={aboutStyle} >
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      It's the disciplines and forms that rarely talk to each other that often have the most to say when they finally do meet. 
      This is the place for those meetings to happen. I want to use the abilities afforded by the internet to pay close attention to the humanities. 
      I also just like to share my writing with people. 
      </p>
      <br /> <br />
      <Bio />
  

    </div>
    </div>
  )
}

export default about