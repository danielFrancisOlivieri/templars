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

const about = ({ data, location }) => {

    const aboutStyle = {
        fontFamily: `Montserrat, sans-serif`
    }

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
      I want to use the abilities afforded by the internet to pay close attention to the humanities. 
      If I'm being honest, I also just like to share my writing with people. 
      </p>
      <p>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Some inspirations are <a rel="noreferrer" target="_blank" href="https://maggieappleton.com/" >Maggie Appleton's website</a>, <a rel="noreferrer" target="_blank" href="https://xkcd.com/" >xkcd.com</a>, and Shelley Jackson's tour de force <a rel="noreferrer" target="_blank" href="https://collection.eliterature.org/1/works/jackson__my_body_a_wunderkammer/index.html" >"My Body a Wunderkammer"</a>.
      </p>
      <br /> <br />
      <Bio style={bioStyle} />
  

    </div>
    </div>
  )
}

export default about