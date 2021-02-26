import React from 'react'
import { Grid } from 'semantic-ui-react'
import WorkCard from "./WorkCard"
import './style/grid.css'

const GridDividedNumber = () => (
  <Grid columns={3} centered divided stackable inverted className="gridding">
    <Grid.Row centered>
      <Grid.Column width={4}>
      <WorkCard
        title = {"Jabberwocky"}        
        image = {"https://raw.githubusercontent.com/danielFrancisOlivieri/justFileUploads/master/jabberwocky.PNG"}
        type = {"Passion Poject"}
        description = {"An illustrated version of one of Lewis Carroll's most beloved poems."}
        link = {"https://danielfrancisolivieri.github.io/Jabberwocky/"}
        />
      </Grid.Column>
      <Grid.Column width={4}>
      <WorkCard
        title = {"Choose Your Own Adventure"}
        image = {"https://raw.githubusercontent.com/danielFrancisOlivieri/justFileUploads/master/adventure.PNG"}
        type = {"Passion Poject"}
        description = {"A choose your own adventure game that lets you contribute to it."}
        link = {"https://danielfrancisolivieri.com/cyo"}
        />
      </Grid.Column>
      <Grid.Column width={4} >   
      <WorkCard 
title = {"Illustrated Aphorisms"}
image = {"https://raw.githubusercontent.com/danielFrancisOlivieri/justFileUploads/master/generations.PNG"}
type = {"Passion Poject"}
description = {"The words shift to match their meanings"}
link = {"/aphorisms"}
        /> 
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column width={4} >
      <WorkCard
        title = {"Trip Map Component"}
        image = {"https://raw.githubusercontent.com/danielFrancisOlivieri/justFileUploads/master/MapLiveOnSite.PNG"}
        isProfessional = {true}
        description = {"I wrote the map component of this page for my position at the Outdoor Journal and Voyage. This map helps users see exactly where their journies will take them."}
        link = {"https://www.outdoorvoyage.com/adventures/tanzania-wildlife-safari/1022"}
        />
      </Grid.Column>
      <Grid.Column width={4} >
      <WorkCard 
title = {"What We May Become"}
image ={"https://raw.githubusercontent.com/danielFrancisOlivieri/justFileUploads/master/whatWeMayBecome.PNG"}
isProfessional = {false}
description = {"A website to help teachers examine character change in Shakespeare's plays."}
link= {"https://danielfrancisolivieri.github.io/WhatWeMayBecome/#section-1"}

/>
      </Grid.Column>
      <Grid.Column width={4} >
      <WorkCard         
        title = {"Mapping Hannibal"}        
        image = {"https://raw.githubusercontent.com/danielFrancisOlivieri/justFileUploads/master/MappingHannibalForSite.PNG"}
        isProfessional = {true}
        link = {"http://mappingancienttexts.net/wp-content/uploads/2018/06/v7spw.html"}
        description = {"A digital storytelling of one of the greatest generals in history."}/>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column width={4} >
      <WorkCard 
title = {"Legible"}
image = {"https://raw.githubusercontent.com/danielFrancisOlivieri/justFileUploads/master/readingApp.PNG"}
type = {"Passion Poject"}
description = {"Reading app that gives you the next word every time you click"}
link = {"https://brave-rosalind-d92e4d.netlify.app/"}
        />
      </Grid.Column>
      <Grid.Column width={4} >
      <WorkCard 
title = {"Literary Twitterbot"}
image = {"https://raw.githubusercontent.com/danielFrancisOlivieri/justFileUploads/master/janeGal.PNG"}
type = {"Passion Poject"}
description = {"A Twitterbot written in Python which uses the library Markovify to generate tweets based on famous literary figures."}
link = {"https://twitter.com/simplyTooLitBot/status/1074492840062661642"}
        />
      </Grid.Column>
      <Grid.Column width={4} >
      <WorkCard 
title = {"Sonnets"}
image = {"https://raw.githubusercontent.com/danielFrancisOlivieri/justFileUploads/master/sonnets.PNG"}
type = {"Passion Poject"}
description = {"The best way to read Shakespeare's sonnets"}
link = {"https://sonnets-74afc.web.app/"}
        />     
      </Grid.Column>
    </Grid.Row>

  </Grid>
)

export default GridDividedNumber