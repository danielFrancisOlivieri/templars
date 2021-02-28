import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Swipeable } from 'react-swipeable'
import Mailchimp from 'react-mailchimp-form'
import Navbar from "../components/navbar"
import { Image } from 'semantic-ui-react'
import Stripe from '../components/stripe'
import ListItem from "../components/listicle/listItem";
import { TestRNG } from './notation/TestRNG';
import DonutGraphListItem from '../components/graphs/donutGraphListItem'
import { FaCode, FaPlus, FaBook }  from 'react-icons/fa';
import HtmlRoughNotation from '../components/roughNotation/htmlRoughNotation'
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import './style/input.css'
import './style/button.css'
import './style/pageHeader.css';

const BlogIndex = ({ data, location }) => {

  return (
    <Swipeable onSwiped={(event) => console.log(event)}  >

    <div >
    <Stripe />
    <Navbar></Navbar>
    <SEO
    title='Home'
    ></SEO>
    <Layout location={location} title={''} >
      <h1 className="pageHeader" > Epigraphing<sup> <FaBook /> <FaPlus /> <FaCode /></sup> </h1>
      <br></br>
         <section 
         style={{
          fontSize: '1.7em'
        }}>

<TestRNG />

        </section>
      
      <center>
      <br></br> <br></br>
      <br></br> <br></br>

      <ListItem
number={1}
title='Create Your Own Adventure'
link='https://danielfrancisolivieri.com/cyo'
content={<Image 
  src='https://raw.githubusercontent.com/danielFrancisOlivieri/justFileUploads/master/cyoFeb26.PNG'
  size='large'
  />} />

<ListItem
number={2}
title='Change in Shakespeare'
link='https://danielfrancisolivieri.github.io/WhatWeMayBecome/#home'
content={<Image 
  src='https://raw.githubusercontent.com/danielFrancisOlivieri/justFileUploads/master/whatWeMayBecome.PNG'
  size='large'
  />} />

<ListItem
number={3}
title='AUB Essay'
link='https://www.picciolettabarca.com/competition-issue-2020#aub'
content={<Image 
  src='https://raw.githubusercontent.com/danielFrancisOlivieri/justFileUploads/master/vennDiagramFeb25.PNG'
  size='large'
  />} />


<ListItem
number={4}
title='Mapping Hannibal'
link='http://mappingancienttexts.net/wp-content/uploads/2018/06/v7spw.html'
content={<Image 
  src='https://raw.githubusercontent.com/danielFrancisOlivieri/justFileUploads/master/MappingHannibalForSite.PNG'
  size='large'
  />} />

<DonutGraphListItem
number={5}
link='https://epigraphing.com/Work/'
title='What This Site Consists of'
/>

<br /> 

<Mailchimp
        action='https://github.us15.list-manage.com/subscribe/post?u=8e1157b53358fc40f9ea3e222&amp;id=0d43dfd99c'
        fields={[
          {
            name: 'EMAIL',
            placeholder: 'example@gmail.com',
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
  