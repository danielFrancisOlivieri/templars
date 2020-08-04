import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"


const BlogIndex = ({ data, location }) => {
 console.log(data);
 const date = data.markdownRemark.frontmatter.date;
 const title = data.markdownRemark.frontmatter.title;
 const description = data.markdownRemark.frontmatter.description;
 const html = data.markdownRemark.html;

  return (
    <div>

    <Layout location={location} title={'Terwilliger'}>
   
    
         <h1>{title}</h1>
         <div>{description}</div>
         <p>{date}</p>
         <section dangerouslySetInnerHTML={{ __html: html }} />
    
    </Layout>
    </div>

  )
}

export default BlogIndex

export const pageQuery = graphql`
query MyQuery {
  markdownRemark(id: {eq: "2fa9a896-18ed-511d-aaac-579cc1705db5"}) {
    html
    frontmatter {
      date
      description
      title
    }
  }
}
  `
