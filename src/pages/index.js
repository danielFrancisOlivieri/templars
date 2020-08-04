import React from "react"
import { graphql } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import Layout from "../components/layout"
import Bio from "../components/bio"


const BlogIndex = ({ data, location }) => {
  const siteTitle = "Templars"
  const post = data
  const html = data.allMarkdownRemark.edges[0].node.html;
  return (
    <div>

    <Layout location={location} title={siteTitle}>
   
    <article>
        <header>
          <h1
            style={{
              marginTop: rhythm(1),
              marginBottom: 0,
            }}
          >
            {data.allMarkdownRemark.edges[0].node.frontmatter.title}
          </h1>
          <p
            style={{
              ...scale(-1 / 5),
              display: `block`,
              marginBottom: rhythm(1),
            }}
          >
            {data.allMarkdownRemark.edges[0].node.frontmatter.date}
          </p>
        </header>
        <section dangerouslySetInnerHTML={{ __html: html }} />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <footer>
          <Bio />
        </footer>
      </article>

    </Layout>
    </div>

  )
}

export default BlogIndex

export const pageQuery = graphql`
query MyQuery {
  allMarkdownRemark(filter: {id: {eq: "2fa9a896-18ed-511d-aaac-579cc1705db5"}}) {
    edges {
      node {
        id
        html
        frontmatter {
          date
          title
          description
        }
        excerpt
      }
    }
  }
}
`