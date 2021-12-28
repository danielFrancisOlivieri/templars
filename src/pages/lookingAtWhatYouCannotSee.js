import React, { Fragment } from 'react';
import Layout from "../components/layout"
import { Popup } from 'semantic-ui-react'
import SEO from "../components/seo"
import Media from 'react-media';
import Navbar from "../components/navbar"
import AuthorCard  from '../components/author'
import ITooDislikeIt from '../components/poems/iTooDislikeIt.js'
import 'semantic-ui-css/semantic.min.css'
import './style/poetry.css'

const poetry = ({data, location}) => {

  return (
    <div>
      <Navbar></Navbar>
      <SEO
    title='How Do I Look At What I Cannot See?'
    ></SEO>
    <Layout location={location} title={''}>
   <h1 className='poetryTitle' > How Do I Look At What I Can't See? </h1>    
   <br></br>

   <p>
   In his lecture, "On Unpacking My Library" Walter Benjamin writes about a book collector that, "As he holds them in his hands he seems to be seeing through them into the distant past as though inspired." When I start a new journal, I get the opposite feeling.              
Few things fill me with as much wonder and anticipation as writing the first entry in a new journal. What I'm wondering at, what I'm anticipating is all the life that's ahead. It doesn't feel like starting a new page, but starting a new section of my life. It's the closest that I've come to holding my future in my hands. I know that the Daniel Olivieri who finishes the last page will not be the same one who started it. It's possible that I'll visit Tristan in Berlin and go with him to the underground skate park in an abandoned factory. It's possible I'll fall in love with a hair stylist as she gives me a fade and we debate which is Boon Joon Ho's best movie. It's possible that I'll finally get around to reading Deleuze or find a passable fried plantain recipe. Flipping through an empty journal I don't see any of those things yet—I only see the possibility. Unlike Benjamin's collector, I'm staring through the item not into the the book has, but into the possible futures it may one day contain. A new journal gives me the chance to look at the contours of something that doesn't exist yet. It gives me no information about what will happen, but it provides a crucial chance to meditate on the idea that events will happen. 
   </p>
   <p>
   If I were watching a video on Youtube and it didn't have a progress bar at the bottom telling me how much time was left in the video, I'd be annoyed. How much more indescribably important must it be for me to have some sense of how much time I have left in my life? So how do I look at it? How do I contemplate not just one journal's worth of my yet-to-be lived life, but the whole thing?
   </p>
   <p>
   There is, of course, an important objection. Any of us could die at any time. It seems naive to get too comfortable with the idea you have decades left when any of us could fall while ice skating or get killed by our lawnmowers or accidentally suffocate in bed (all surprisingly common causes of death). But here's the great thing about sudden death: it is perhaps the only thing in life that requires nothing from you. There are no forms for you to fill out, no emails to send, no permissions to get. Death has got you covered. Life, however, demands much more from you and so planning for it tends to merit more planning.
   </p>
   <p>
   This is the best way I've found to do it.    
   </p>
  

    </Layout>
    </div>
  )
}

export default poetry 
