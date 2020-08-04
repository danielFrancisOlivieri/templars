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
    <h1>{data.markdownRemark.frontmatter.title} </h1>
         <div> {data.markdownRemark.frontmatter.description} </div>
         <section dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      
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
  