import React from 'react';
import { Image } from 'semantic-ui-react'
import Layout from "../components/layout"
import Dormer from "./images/dormerWindows.jpeg"
import Rectangular from "./images/rectangular.jpg"
import Oriel from "./images/oriel.jpg"
import Column from "./images/column.jpg"
import Ribbed from "./images/ribbedVaults.jpg"
import LabelledRibbedVault from "./images/labelledRibbedVault.png"
import BookStairs from "./images/bookStairs.jpg"
import LabelledBookStairs from "./images/labelledBookStairs.jpg"
import Arch from "./images/arch.jpg"
import Arch2 from "./images/invertedColors.jpg"
import woodenDoor from "./images/woodenDoor.jpg"
import ReactCompareImage from 'react-compare-image';
import LibraryCongress from "./images/croppedLibraryCongress.jpg"
import labelledLibraryCongress from "./images/labelledLibraryCongress.jpg";
import './style/architecture.css'


const architecture = ({data, location}) => {

    return (
        <div>

<ReactCompareImage leftImage={LibraryCongress} rightImage={labelledLibraryCongress}
sliderPositionPercentage=".5"
/>

<ReactCompareImage leftImage={BookStairs} rightImage={LabelledBookStairs}
sliderPositionPercentage=".5"
/>
<ReactCompareImage leftImage={Ribbed} rightImage={LabelledRibbedVault}
sliderPositionPercentage=".5"
/>

{/*
<Image src={Dormer} rounded useMap='#dormerMap' />
<h2> Dormer Windows </h2>
 <map name="dormerMap">
    <area target="_blank" alt="Rooflet" title="Rooflet" href="https://www.image-map.net/" coords="683,442,341,715,344,750,409,769,899,769,1186,436,1205,436" shape="poly" />
    <area target="_blank" alt="Glass" title="Glass" href="https://www.wikiwand.com/en/Dune:_House_Atreides" coords="883,1166,413,771" shape="rect" />
</map> */}

<Layout location={location} title={'Literature+Code'}>
<h1 className='architectureLexiconTitle' > Architectural Lexicon </h1>  

<p className='architectureParagraph' >
The buildings that I passed by everyday had always had their tympanum pediments, always had their abutments and pilasters and piers, their patera and skirting. But now armed with these words these features formed together out of what had been mere unintelligble backdrop into vivid scenes, into a new dimension to pay attention to. I now recognized these features like a friend in a crowded room. 
 What was an unintelligible bunch of symbols now becomes legible. You recognize them like friends in a crowded room. There's a whole new dimension to that same walk that you've taken so many times before. It asks you to give attention to the background to realize that we live among these things, dream among them, enjoy among them, and now can see them with a new face. It lets you sweep over that same old world with your new mind. To pull new experiences out of that same old reality.  
      Architecture will be a part of our lives whether we notice it or not. For our entire lives we will be walking among gabled roofs and skirting and patera and broken tympanum pediments and under console ancons. We cannot help but live between these things, within them. We have this particular spot of world to walk, these buildings that will form our surrounds whether we notice it or not. I think our lives are richer, a little fuller, a little less blind, if we do notice. It's one more dimension for us to see the magnitude of the world, the magnitude that's right there under our noses. Every street a gallery, every walk an exploration, every day another chance to discover something new out of the world's old facades.  
           That architecture book handed me a mouthwatering lexicon and that lexicon handed me an entire city, an entire world, of meaning I was suddenly attuned to, like an extra eye finally opening after having been closed since birth. If growth means anything, it means this.
           
           </p>
<br></br>

<h2> Windows </h2>
<h3> Dormer Windows </h3>
<p> These are Dormer windows they are windows that project from their slanted roofs. </p>
<Image src={Dormer} rounded />
<br></br>
<br></br>

<h3> Oriel Windows </h3>
<p> An oriel window is a form of bay window which protrudes from the main wall of a building but does not reach to the ground. </p>
<Image src={Oriel} rounded />
<br></br>
<br></br>

<h3> Rectangular Windows </h3>
<p> These project from the buildings surface like bay or <b>oriel</b> windows, but have a rectangular shape. </p>
<Image src={Rectangular} rounded />
<br></br>
<br></br>

<h3> Column </h3>
<p> A vertical element, usually a rounded shaft with a capital and a base, which in most cases serves as a support.</p>
<Image src={Column} rounded />
<br></br>
<br></br>

{/* <h3> Library of Congress </h3>
<p> overwhelming </p>
<ReactCompareImage leftImage={LibraryCongress} rightImage={labelledLibraryCongress}
sliderPositionPercentage=".5"
/>;
<br></br>
<br></br> */}

<h2> Staircases </h2>
<h3> Spiral Staircases </h3>
<p> The part in the center is called the "well." This one has a triangular well. </p>
<Image src={'https://images.pexels.com/photos/1044302/pexels-photo-1044302.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'} rounded />
<br></br>
<br></br>

<h2> Vault </h2>
<h3> Ribbed Vaults </h3>
<p> A rib vault or ribbed vault is an architectural feature for covering a wide space, such as a church nave, composed of a framework of crossed or diagonal arched ribs.</p>
<Image src={Ribbed} rounded />
<br></br>
<br></br>

{/* <ReactCompareImage leftImage={woodenDoor} rightImage={Arch}
sliderPositionPercentage=".95"
/>; */}

<h2> Bibliography </h2>

    <p> 
Information comes from <i>Reading Architecture: a Visual Lexicon</i> by Owen Hopkins. 
</p>
<p> 
Pictures supplied by Pixabay, Life of Pix, Guduru Ajay bhargav, Snapwire and found through<a href="https://www.pexels.com/" >Pexels</a>. 
</p>

</Layout>
</div>
    )


}

export default architecture 