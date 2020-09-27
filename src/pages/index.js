import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useSwipeable, Swipeable } from 'react-swipeable'

function incorrectAnswer() {
alert('wrong');
}

const BlogIndex = ({ data, location }) => {
console.log(data)
  return (
    <Swipeable onSwiped={(event) => console.log(event)}  >

    <div>

    <Layout location={location} title={'Terwillger Bunts One'} >
      <SEO title="Essay" />
         <div> {data.markdownRemark.frontmatter.description} </div>
         <section 
         style={{
          fontSize: '1.7em'
        }}
        onClick={incorrectAnswer}
         dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      
    </Layout>
    </div>
    </Swipeable>

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
  