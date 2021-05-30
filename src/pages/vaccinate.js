import React from 'react';
import Layout from "../components/layout"
import RechartScatter from '../components/graphs/rechartScatter';
import './style/poetry.css'
import 'semantic-ui-css/semantic.min.css'


const vaccinate = ({data, location}) => {

  return (
    <Layout location={location} title={''}>
      <RechartScatter />
 
    </Layout>
  )
}

export default vaccinate 