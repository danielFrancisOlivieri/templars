import React from "react"
import Layout from "../components/layout"
import './style/poetry.css'
import 'semantic-ui-css/semantic.min.css'
import "tooltip-sequence/dist/index.css";
import './style/hunt.css';
import Generation from '../components/generation.js';

const aphorisms = ({data, location}) => {


  return (
    <Layout location={location} title={'Literature+Code'}>
   <h1> Aphorisms </h1>    
  <p >
    These are illustrations of aphorisms. 
  </p>

<Generation></Generation>



    </Layout>
  )
}

export default aphorisms