import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import Image from "gatsby-image"


const Hunt = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />

     <p>
     It is the <span id="casablanca" onclick="document.getElementById('casablanca').innerHTML = 'correct'" >phenomenon</span> sometimes called alienation from self. In its advanced stages, we no longer answer the telephone, because someone might want something; that we could say no without drowning in self-reproach is an idea alien to this game. 
     Every encounter demands too much, tears the nerves, drains the will, and the spectre of something as small as an unanswered letter arouses such disproportionate guilt that one's sanity becomes an object of speculation among one's acquaintances. 
     To assign unanswered letters their proper weight, to free us from the expectations of others, to give us back to ourselves—there lies the great, the singular power of self-respect. 
     Without it, one eventually discovers the final turn of the screw: one runs away to find oneself, and finds no one at home.
     </p>
      
     
    </Layout>
  )
}

export default Hunt

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
