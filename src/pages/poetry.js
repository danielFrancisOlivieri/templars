import React from "react"
import Layout from "../components/layout"
import { Popup } from 'semantic-ui-react'
import './style/poetry.css'
import 'semantic-ui-css/semantic.min.css'

const poetry = ({data, location}) => {

  return (
    <Layout location={location} title={'Literature+Code'}>
   <h1> The Appreciation of Poetry </h1>    
   <p> 
   The poet <Popup content='One of my favorite writers' on='click' trigger={<span> Ben Lerner</span>} /> argues in his book "The Hatred of Poetry" that the real problem with poetry is poems. We expect poetry to have the power to stir some profound passion or connection in us—to take some thought or emotion in the poet's mind and deliver it, still pristinely magnificent, to the reader or listener. Plato even banned poets from his ideal Republic because of this potential power. However, Lerner argues, poems never live up to poetry's promise. Every poem, to him, is a failed poem because it fails to deliver whatever revelation occurred in the poet's head into the reader or listener's head. Even the best poem is nothing but an attempt to capture the original poem that <Popup content='This is why I, too, dislike it' on='click' pinned trigger={<span> was in the poet's mind</span>} />. Interestingly, you can see this idea expressed in this silly song by Jack Black. </p>
   <iframe width="100%" height="700" src="https://www.youtube.com/embed/_lK4cX5xGiQ?start=59" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
   <p>
   The song they are recording is just a tribute to the song they sang for the devil. In the same way, Lerner argues, the poem you read is just a tribute to the real thing that happened in the poet's head. Despite what Ben Lerner says, here are a few poems I do think really work. 
   </p>
   <p>
   This is one called "Next, Please" by Philip Larkin. What I find interesting and depressing about the poet Philip Larkin is his relationship to that idea of "the fear of missing out." That anxiety you have when other people are together enjoying something that you seem to be missing out on. Philip Larkin isn't afraid of missing out, he has missed out. Missing out on enjoyable experiences is just his default state of being. Here is one of my favorite poems by him. 
   </p>
   <h3> Next, Please </h3>
   <pre >{
`Always too eager for the future, we
Pick up bad habits of expectancy.
Something is always approaching; `}<Popup content="This feels awkward where it is. Adds to the disappointing feeling at the end of the stanza." on='click' trigger={<span>every day</span>} />

{`
Till then we say,

Watching from a bluff the tiny, clear
Sparkling`} <Popup content='I love this image' on='click' trigger={<span>armada of promises</span>} /> {`draw near.
How slow they are! And how much time they waste,
Refusing to make haste!

Yet still they leave us holding wretched stalks
Of disappointment, for, though nothing balks
Each big approach, leaning with brasswork prinked,
Each rope distinct,

Flagged, and the figurehead with golden tits
Arching our way, it never anchors; it's
No sooner present than it turns to past.
Right to the last

We think each one will heave to and unload
All good into our lives, all we are owed
For waiting so devoutly and so long.
But we are wrong:

Only one ship is seeking us, a black-
Sailed unfamiliar, towing at her back
A huge and birdless silence. In her wake
No waters breed or break.`
   }
   </pre>

<p>
What initially annoyed me about this poem is exactly what I think makes it not just good, but fantastic. The first couplet of each stanza matches up quite nicely: "we" pairs with "expectancy," "clear" with "near," "stalks" with "balks," etc. However the final line of each stanza's second couplet is too short. Read it out loud and those second couplets feel stunted, a little off. Where you had been expecting an enjoyable rhyme you don't get it. This is the poem's brilliance. This poem about disappointment is itself disappointing. This poem both warns you against expectations and in its structure thwarts and deflates your expectations. This is what I think Margret Atwood means when she says that poetry is, "words working overtime."
</p>

<p>
We find another example of words working overtime in the Anglo-Saxon poem "<a href='https://www.wikiwand.com/en/The_Ruin'>The Ruin</a>," though in this case it's all the more interesting for being accidental. Anonymously written in the 8th or 9th century, "The Ruin" describes an ancient Roman ruin. However, over the past dozen or so centuries the poem has been subject to some decay and certain fragments are lost. This means that this poem about a ruin is itself a ruin. The structure of the poem is again contributing to its meaning. 
</p>

<p>
As intriguing as the moments when a poem's structure fits its content are the moments when a poem finds itself in a context that seems at odds with its content. For example, <a href='https://www.youtube.com/watch?v=Ep2_0WHogRQ&feature=youtu.be' >this apple commercial</a> quotes Robin Williams in Dead Poets Society who in turn quotes Walt Whitman. 
</p>
<iframe width="100%" height="700" src="https://www.youtube.com/embed/Ep2_0WHogRQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<p>
The poem's call to and celebration of individuality feels undermined by its position in an advertisement whose real call is for you to buy the Apple iPad Air. Likewise, <a href='https://www.youtube.com/watch?v=oXevJJE0YXQ'>this scene</a> from the tv show Fargo has the gangster Mike Milligan 
recite Lewis Carroll's "<a href='https://www.poetryfoundation.org/poems/42916/jabberwocky'>The Jabberwocky</a>" as he goes off to murder a rival for power. 
</p>
<iframe width="100%" height="700" src="https://www.youtube.com/embed/oXevJJE0YXQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<p>
The poem's playful rhyme scheme and goofy vocabulary contrast rather starkly with the situation they've been dropped into. However, this mismatched pairing of scene and verse allows for a rich new understanding of the poem. Whereas in the hands of Lewis Carroll it had seemed fluffy and upbeat, in the mouth of actor Bokeem Woodbine we hear it as dark and menacing; the death of the jabberwocky now feels visceral and ominous in a way it hadn't before. Compare that scene with, say, <a href='https://danielfrancisolivieri.github.io/Jabberwocky/'>my own</a> rather cute and bright illustration of it.
</p>

<p>
I'll close with another children's poem. Written by the priest Leonard Feeney, it's one that I simply find a pleasure to recite. Reading it isn't enough, this one deserves to be spoken. 
</p>
<h3> The Bee </h3>
<pre>
{`And God said to some sticky stuff 
not yet alive in a hive:
"Come! Hum!
Be my Bee and buzz as I bid."
And sure enough, it was and it did.
`}
</pre>

    </Layout>
  )
}

export default poetry 