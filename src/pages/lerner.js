import React, { Fragment } from 'react';
import Layout from "../components/layout"
import { Popup } from 'semantic-ui-react'
import './style/poetry.css'
import Media from 'react-media';
import 'semantic-ui-css/semantic.min.css'
import AuthorCard  from '../components/author'
import ITooDislikeIt from '../components/poems/iTooDislikeIt.js'

const lerner = ({data, location}) => {

  return (
    <Layout location={location} title={'Literature+Code'}>
   <h1 className='poetryTitle' > The Hatred of Ben Lerner </h1>    
  <br></br>
  
<pre className='lernerPoem' >
{`
I first encountered Ben Lerner in the Columbus bus depot, quoted in an essay a college professor assigned.
And whenever I return to that depot, the memory of discovering Ben Lerner greets me like a string of beads. 
I promised myself, I would never read a Ben Lerner novel. 
Even so, I speak this poem's title with my tongue firmly in Socrates' mouth, tasting the hemlock. 
And here I am, constructing a long, researched based poem on the subject of Ben Lerner. 
I'd say that I'd become a liar, but the truth is that I always already was one. 
This poem's goal, such as it is, is to put Lerner in conversation with himself. Whereas Lerner's
poetry takes the language of the culture and refigures it to comment
on that culture. This takes the language of Ben Lerner and refigures it
to comment on Ben Lerner. 
Our most in-depth conversations, however imaginary, are had staring at the canvas of his poetry. 
Who is your favorite Persian king of kings? "Cyrus," Lerner answers. 
I call Ben Lerner from the 92Y to ask him, "Do you have John Ashbery's upper teeth?" 
He responds, "This is a bad connection, can you speak a little louder?"
Punning linguist
Imitating his poetry isn't hard,
it's quite possible, 
given that I've always been a quick Lerner. 
You don't need me to tell you what time it was when I finished this poem.   

`}
</pre>

    </Layout>
  )
}

export default lerner 
