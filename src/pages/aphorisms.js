import React from "react"
import './style/poetry.css'
import 'semantic-ui-css/semantic.min.css'
import "tooltip-sequence/dist/index.css";
import './style/hunt.css';
import './../components/style/layout.css'
import { rhythm } from "../utils/typography"
import Generation from '../components/generation.js';
import Animation from '../components/aphorisms/twoWays';

const aphorisms = ({data, location}) => {


  return (
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
  <br/> <br/>
<Generation></Generation>
<Animation></Animation>
    </div>
  )
}

export default aphorisms