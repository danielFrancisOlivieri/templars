import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Swipeable } from 'react-swipeable'
import Mailchimp from 'react-mailchimp-form'
import Navbar from "../components/navbar"
import { Image } from 'semantic-ui-react'
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import DonutGraph from '../components/graphs/donutGraph'
import ListItem from "../components/listicle/listItem";
import ScatterGraph from '../components/graphs/scatterGraph';
import Generation from '../components/generation';
import './style/landingpage.css' 

const BlogIndex = ({ data, location }) => {

  const simpleList = ['1', '2', '3', '4', 5];

  const componentList = [
    {
      component: Generation,
      number: 7
    },
    {
      component: Generation,
      number: 45
    },
  ]

  console.log(componentList[0].number);

  return (
    <Swipeable onSwiped={(event) => console.log(event)}  >

    <div>
    <Navbar></Navbar>
    <Layout location={location} title={''} >
      <h1 className="indexTitle" > Literature+Code </h1>
      <br></br>
      <SEO title="Essay" />
         <section 
         style={{
          fontSize: '1.7em'
        }}
         dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      <br></br> <br></br>
      <center>
    

<ListItem
number={1}
content={<Image 
  src='https://deadline.com/wp-content/uploads/2019/10/stephen-colbert-1.jpg'
  size='large'
  />} />

<ListItem
number={2}
content={<DonutGraph /> } />

<ListItem
number={3}
content={<ScatterGraph /> } />

<br />

<RoughNotation type="highlight" show={true} color={'yellow'} >
  Hello RoughNotation
</RoughNotation>

<br /> <br /> <br />

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
  