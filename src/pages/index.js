import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"


const BlogIndex = ({ data, location }) => {
console.log(data)
  return (
    <div>

    <Layout location={location}>
      <SEO title="All posts" />
   
         <div>Terwilliger bunts one</div>
      
    </Layout>
    </div>

  )
}

export default BlogIndex

export const pageQuery = graphql`
query MyQuery {
  markdownRemark {
    html
    frontmatter {
      date
      description
      title
    }
  }
}
  `
  