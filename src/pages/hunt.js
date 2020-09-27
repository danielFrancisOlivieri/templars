import React from "react"
import Layout from "../components/layout"
import './style/poetry.css'
import 'semantic-ui-css/semantic.min.css'

const hunt = ({ data, location }) => {
  return (
    <Layout location={location} title={'Literature+Code'}>
   <h3> scavenger hunt</h3>
    </Layout>
  )
}

export default hunt