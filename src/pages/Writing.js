import React from "react"
import { Link, graphql } from "gatsby"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import Navbar from "../components/navbar"
import Stripe from "../components/stripe"
import './style/pageHeader.css';


const TableOfContents = ({ data, location }) => {
  const posts = data.allMarkdownRemark.edges

  const linkStyle = {
    boxShadow: `none`,
    fontSize: `2em`
  }

  return (
    <div>
      <Stripe></Stripe>
      <Navbar></Navbar>
    <Layout location={location} title={''}>
      <h1 className='pageHeader'>Some Writing</h1>
      <br /> <br /> <br />
      <SEO title="All posts" />
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article key={node.fields.slug}>
            <header>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={linkStyle} rel="noreferrer" target="_blank" href={node.frontmatter.link}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </section>
            <br />
          </article>
          
        )
      })}
<br /> <br /> <br /> <br /> <br /> <br />
<Bio />
    </Layout>
    </div>
  )
}

export default TableOfContents

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
            link
          }
        }
      }
    }
  }
`
