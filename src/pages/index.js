import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

function incorrectAnswer() {
alert('wrong');
}

const BlogIndex = ({ data, location }) => {
console.log(data)
  return (
    <div>

    <Layout location={location} title={'The Earthly and the Divine'} >
      <SEO title="Essay" />
      <FontAwesomeIcon icon={faCoffee} />
         <div> {data.markdownRemark.frontmatter.description} </div>
         <section 
         style={{
          fontSize: '1.7em'
        }}
        onClick={incorrectAnswer}
         dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      
    </Layout>
    </div>

  )
}

export default BlogIndex

export const pageQuery = graphql`
query essayQuery {
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
  