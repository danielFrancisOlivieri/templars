import React from 'react';
import Layout from "../components/layout"
import { Popup } from 'semantic-ui-react'
import SEO from "../components/seo"
import './style/poetry.css'
import 'semantic-ui-css/semantic.min.css'


const lerner = ({data, location}) => {

  return (
    <Layout location={location} title={'Literature+Code'}>
      <SEO
    title='Lerner'
    ></SEO>
   <h1 className='poetryTitle' > The Hatred of Ben Lerner </h1>    
  <br></br>
  
<pre className='lernerPoem' >
{`
I first encountered Ben Lerner in the Columbus bus depot,
`} <Popup content='References the Ben Lerner line, "I tended to find lines of poetry beautiful only when I encountered them quoted in prose, in the essays my professors had assigned in college where the line breaks were replaced with slashes, so that what was communicated was less a particular poem than the echo of poetic possibility."' on='click' trigger={<span class="poetryUnderlinedText" >quoted in an essay a college professor assigned.</span>} /> 
{`
And whenever I return to that depot, 
the memory greets me`} <Popup content="And so on: each of these experiences of reception remained, as it were, in situ, so that whenever I returned to a zone where significant news had been received, I discovered that the news and an echo of its attendant affect still awaited me like a curtain of beads." trigger={<span class="poetryUnderlinedText">like a string of beads.</span>} />  {`
I promised myself,`} <Popup content="References the line from Leaving the Atocha Station, 'I promised myself, I would never write a novel.'" trigger={<span class="poetryUnderlinedText" >I would never read a Ben Lerner novel.</span>} /> 
{`
But while I, too, still dislike him,
since then, his has become one of my favorite navels to gaze at.
 And now I'm still here constructing a`} <Popup content="In Leaving the Atocha Station, the main character has won a Fullbright to Madrid in order to work on, 'A long, research based poem on the subject of the Spanish Civil War.'" trigger={<span class="poetryUnderlinedText" >long, researched based poem on the subject of Ben Lerner.</span>} />  
{`
This poem's goal,`} <Popup content="Ben Lerner often uses this phrase." trigger={<span class="poetryUnderlinedText">such as it is</span>} />, {`is to put Lerner in conversation with himself. 
Whereas Lerner's poetry takes the language of the culture and refigures it to comment
on that culture. This takes the language of Ben Lerner and refigures it
to comment on Ben Lerner
to find a workable tension between the two. 
I call Ben Lerner from the`} <Popup content="I once saw Lerner at the 92Y and Lerner once saw Ashbery in the 92Y." trigger={<span class="poetryUnderlinedText" >92Y</span>} /> {` to ask him, 
Who is your favorite Persian king of kings?`} <Popup content="Ben Lerner's best friend and favorite poet is Cyrus Console. Cyrus is also the name of a few Persian monarchs." trigger={<span class="poetryUnderlinedText" >"Cyrus,"</span>} /> {`Lerner answers. 
Then I ask,`} <Popup content="Lerner has a poem in which someone asks a speaker at an event if they have Hitler's upper teeth. I switched it to Lerner's literary hero, John Ashbery." trigger={<span class="poetryUnderlinedText" >"Do you have John Ashbery's upper teeth?"</span>} />  
{`
He responds, `}<Popup content="In the Topeka School, Lerner's mom deals with hateful phone calls by just saying that it's a bad connection and that she can't hear what they're saying." trigger={<span class="poetryUnderlinedText">"This is a bad connection, can you speak a little louder?"</span>} />
{`
Imitating Ben's poetry isn't hard,
it's`} <Popup content="A phrase Lerner often repeats in 'The Hatred of Poetry' is that 'poetry isn't hard, poetry is impossible.'" trigger={<span class="poetryUnderlinedText">quite possible,</span>} />
{`
given that I've always been a quick Lerner. 
The best Ben Lerner novels always feel like what it's like to write a Ben Lerner novel.
You don't need me to tell you`} <Popup content="Lerner's second novel was titled '10:04.'" trigger={<span class="poetryUnderlinedText">what time it was when I finished this poem.</span>} />   

</pre>

    </Layout>
  )
}

export default lerner 