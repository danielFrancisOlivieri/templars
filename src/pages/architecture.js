import React from 'react';
import { Image } from 'semantic-ui-react'
import Layout from "../components/layout"
import Dormer from "./images/dormerWindows.jpeg"
import TriangularSpiral from "./images/TriangularSpiral.jpg"
import './style/architecture.css'


const architecture = ({data, location}) => {

    return (
<Layout location={location} title={'Literature+Code'}>
<h1 className='architectureLexiconTitle' > Architecture Lexicon </h1>  

<p className='architectureParagraph' >
In addition wonder, my reaction to most great architectural works is, "Wow, that seems like so much work. Why would anyone bother doing that?" Building is exhausting. It seems impossible that anyone could do this. The most rundown, beaten up high rise is a human achievement. It's hard to escape architecture. I enjoy finding language to fix onto the things that I used to barely notice. Once I know the name of this type of column or that sort of window, I notice them in a new way. What had once been the monotonous or even interesting backdrop gets pulled forward—the language does the pulling—to become objects of my attention. I can read buildings like someone who's just learned braille. What was an unintelligible bunch of symbols now becomes legible. You recognize them like friends in a crowded room. There's a whole new dimension to that same walk that you've taken so many times before. It asks you to give attention to the background to realize that we live among these things, dream among them, enjoy among them, and now can see them with a new face. It lets you sweep over that same old world with your new mind. To pull new experiences out of that same old reality. 
</p>

<h2> Windows </h2>
<h3> Dormer Windows </h3>
<p> These are Dormer windows they are windows that project from their slanted roofs. </p>
<Image src={Dormer} rounded />

<h2> Staircases </h2>
<h3> Spiral Staircases </h3>
<p> The part in the center is called "the well". This one has a triangular well. </p>
<Image src={TriangularSpiral} rounded />

</Layout>

    )


}

export default architecture 