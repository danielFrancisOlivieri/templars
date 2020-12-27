import React from 'react';
import { Image, Segment } from 'semantic-ui-react'
import Layout from "../components/layout"
import Dormer from "./images/dormerWindows.jpeg"
import Rectangular from "./images/rectangular.jpg"
import Oriel from "./images/oriel.jpg"
import Column from "./images/column.jpg"
import Ribbed from "./images/ribbedVaults.jpg"
import LibraryCongress from "./images/libraryCongress.jpg"
import './style/architecture.css'


const architecture = ({data, location}) => {

    return (
<Layout location={location} title={'Literature+Code'}>
<h1 className='architectureLexiconTitle' > Architectural Lexicon </h1>  

<p className='architectureParagraph' >
In addition wonder, my reaction to most great architectural works is, "Wow, that seems like so much work. Why would anyone bother doing that?" Building is exhausting. It seems impossible that anyone could do this. The most rundown, beaten up high rise is a human achievement. It's hard to escape architecture. I enjoy finding language to fix onto the things that I used to barely notice. Once I know the name of this type of column or that sort of window, I notice them in a new way. What had once been the monotonous or even interesting backdrop gets pulled forward—the language does the pulling—to become objects of my attention. I can read buildings like someone who's just learned braille. What was an unintelligible bunch of symbols now becomes legible. You recognize them like friends in a crowded room. There's a whole new dimension to that same walk that you've taken so many times before. It asks you to give attention to the background to realize that we live among these things, dream among them, enjoy among them, and now can see them with a new face. It lets you sweep over that same old world with your new mind. To pull new experiences out of that same old reality. 
</p>
<br></br>

<h2> Windows </h2>
<h3> Dormer Windows </h3>
<p> These are Dormer windows they are windows that project from their slanted roofs. </p>
<Image src={Dormer} rounded />
<br></br>
<br></br>

<h3> Oriel Windows </h3>
<p> neato </p>
<Image src={Oriel} rounded />
<br></br>
<br></br>

<h3> Rectangular Windows </h3>
<p> These project from the buildings surface like bay or <b>oriel</b> windows, but have a rectangular shape. </p>
<Image src={Rectangular} rounded />
<br></br>
<br></br>

<h3> Column </h3>
<p> not a row but a column </p>
<Image src={Column} rounded />
<br></br>
<br></br>

<h3> Library of Congress </h3>
<p> overwhelming </p>
<Image src={LibraryCongress} rounded />
<br></br>
<br></br>

<h2> Staircases </h2>
<h3> Spiral Staircases </h3>
<p> The part in the center is called the "well." This one has a triangular well. </p>
<Image src={'https://images.pexels.com/photos/1044302/pexels-photo-1044302.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'} rounded />
<br></br>
<br></br>

<h2> Vault </h2>
<h3> Ribbed Vaults </h3>
<p> Really neat stuff </p>
<Image src={Ribbed} rounded />
<br></br>
<br></br>

<h2> Bibliography </h2>

    <p> 
Information comes from <i>Reading Architecture: a Visual Lexicon</i> by Owen Hopkins. 
</p>
<p> 
Pictures supplied by Pixabay, Life of Pix, Guduru Ajay bhargav, Snapwire and found through<a src="https://www.pexels.com/" >Pexels</a>. 
</p>

</Layout>

    )


}

export default architecture 