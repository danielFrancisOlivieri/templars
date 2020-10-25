import React from "react"
import Layout from "../components/layout"
import './style/poetry.css'
import 'semantic-ui-css/semantic.min.css'
import "tooltip-sequence/dist/index.css";
import './style/hunt.css';
import Lab from '../components/Lab.js';

const hunt = ({data, location}) => {


  return (
    <Layout location={location} title={'Literature+Code'}>
   <h1> The hunt </h1>    
  <p >
    This is the test. 
  </p>
  <p>
    another line
  </p>

  <Lab></Lab>
    </Layout>
  )
}

export default hunt