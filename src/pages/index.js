import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Swipeable } from 'react-swipeable'
import Mailchimp from 'react-mailchimp-form'
import Navbar from "../components/navbar"
import './style/landingpage.css' 

const BlogIndex = ({ data, location }) => {
  return (
    <Swipeable onSwiped={(event) => console.log(event)}  >

    <div>
    <Navbar></Navbar>
    <Layout location={location} title={'Literature+Code'} >
      <SEO title="Essay" />
         <section 
         style={{
          fontSize: '1.7em'
        }}
         dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      <br></br> <br></br>
      <center>
      <Mailchimp
        action='https://github.us15.list-manage.com/subscribe/post?u=8e1157b53358fc40f9ea3e222&amp;id=0d43dfd99c'
        fields={[
          {
            name: 'EMAIL',
            placeholder: 'Your email here',
            type: 'email',
            required: true
          }
        ]}
        />
</center>
    </Layout>
    </div>
    </Swipeable>

  )
}

export default BlogIndex

export const pageQuery = graphql`
query intro {
  markdownRemark(fields: {slug: {eq: "/introduction/"}}) {
    html
    frontmatter {
      date
      description
      title
    }
  }
}
  `
  