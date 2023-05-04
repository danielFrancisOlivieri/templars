import React from "react"

import Navbar from "../components/navbar"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import Bio from '../components/bio'
import Stripe from '../components/stripe'
import 'semantic-ui-css/semantic.min.css'
import "tooltip-sequence/dist/index.css";
import './../components/style/layout.css'
import './style/pageHeader.css';

const about = () => {

    const bioStyle = {
      position: 'absolute',
      bottom: '0',
    }

  return (
    <div>
        <Stripe />
      <Navbar></Navbar>
      <SEO
      title='About'
      ></SEO>
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
      <p>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      Hello, I'm a software developer living in Philadelphia, but I was an English major in college (don't tell my boss). This site is an attempt to combine those two.
      </p>
      <p>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Some inspirations for this site are <a rel="noreferrer" target="_blank" href="https://xkcd.com/" >xkcd.com</a>, <a rel="noreferrer" target="_blank" href="https://www.washingtonpost.com/people/shelly-tan/">the work of Shelly Tan,</a> and "<a rel="noreferrer" target="_blank" href="https://collection.eliterature.org/1/works/jackson__my_body_a_wunderkammer/body.html" >My Body a Wunderkammer</a>".
      </p>
      <p>I love to get emails, so don't hesistate to send one to me at dfolivieri@gmail.com.</p>
      <br /> 
      {/* <Bio style={bioStyle} /> */}
  

    </div>
    </div>
  )
}

export default about
