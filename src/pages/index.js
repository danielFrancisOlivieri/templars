import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"


const BlogIndex = ({ data, location }) => {
console.log(data)
  return (
    <div>

    <Layout location={location} title={'The Earthly and the Divine'} >
      <SEO title="Essay" />
 
         <div> {data.markdownRemark.frontmatter.description} </div>
         <section 
         style={{
          fontSize: '1.7em'
        }}
         dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      
    </Layout>
    </div>

  )
}

export default BlogIndex

export const pageQuery = graphql`
query essayQuery {
  markdownRemark(fields: {slug: {eq: "/essay/"}}) {
    html
    frontmatter {
      date
      description
      title
    }
  }
}
  `
  