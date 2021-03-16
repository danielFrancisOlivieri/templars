import React from 'react';
import Layout from "../components/layout"
import { Popup } from 'semantic-ui-react'
import SEO from "../components/seo"
import './style/poetry.css'
import 'semantic-ui-css/semantic.min.css'


const vaccinate = ({data, location}) => {

  return (
    <Layout location={location} title={'Patriot Eagle Reporting'}>
      <SEO
    title='Vaccination'
    ></SEO>
   <h1 className='poetryTitle' > why the libral elite DOESN'T want REAL americans to be vaccinated </h1>    
  <br></br>

  <img src='https://raw.githubusercontent.com/danielFrancisOlivieri/justFileUploads/master/covid.jpg'></img>
  
  <p>
      Do not, I repeat, do NOT not get vaccinated!
  </p>

  <p>
      This is the inside story of why liberal elites like Harriet Beecher Stowe are trying to prevent real Americans from getting their rightful injections. 
  </p>
  <p>
  You don't need Tucker Carlson to tell yo that America is the only place that will sell bald eagles to people with shotguns and shotguns to bald eagles. Well, there are some Americans who aren't really Americans. The liberals. And boy do they want to to not get vaccinated. I mean, as the developed nation with the highest amount of guns per capita, is there anything more American than getting a shot? 
  </p>
    </Layout>
  )
}

export default vaccinate 