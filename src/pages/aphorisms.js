import React from "react"
import Navbar from "../components/navbar"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import Generation from '../components/generation.js';
import Animation from '../components/aphorisms/twoWays';
import FourCorners from '../components/aphorisms/fourCorners';
import Samsara from '../components/aphorisms/samsara/samsara';
import MindKiller from '../components/aphorisms/mindkiller/mindKiller';
import './style/poetry.css'
import 'semantic-ui-css/semantic.min.css'
import "tooltip-sequence/dist/index.css";
import './style/hunt.css';
import './../components/style/layout.css'

const aphorisms = ({ data, location }) => {


  return (
    <div>
      <Navbar></Navbar>
      <SEO title="Aphorisms" />
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
        <h1> Illustrated Aphorisms </h1>
      </center>
      <br /> <br />

      <Samsara></Samsara>
      <br /> <br />
      <Generation></Generation>
      <br /> <br />
      <Animation></Animation>
      <br /> <br />
      <MindKiller></MindKiller>
      <br /> <br />
      <FourCorners></FourCorners>

    </div>
    </div>
  )
}

export default aphorisms