import React from "react"
import { Image } from 'semantic-ui-react'
import FourOhFour from "./images/404.jpg"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={''}>
      <SEO title="404: Not Found" />
      <Image src={FourOhFour} style={{height: 700}} rounded />
      <a href='https://www.freepik.com/vectors/business'>Business vector created by pikisuperstar - www.freepik.com</a>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
