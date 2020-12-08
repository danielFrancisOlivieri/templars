import React, { Fragment } from 'react';
import Layout from "../components/layout"
import { Popup } from 'semantic-ui-react'
import './style/poetry.css'
import Media from 'react-media';
import 'semantic-ui-css/semantic.min.css'
import AuthorCard  from '../components/author'
import ITooDislikeIt from '../components/poems/iTooDislikeIt.js'

const poetry = ({data, location}) => {

  return (
    <Layout location={location} title={'Literature+Code'}>
   <h1 className='poetryTitle' > The Appreciation of Poetry </h1>    
  <p>
   The poet <Popup  on='click' trigger={<span className='poetryUnderlinedText'  > Ben Lerner</span>}> <AuthorCard meta={'Poet and Novelist'} description={'Guggenhiem Fellow, MacArthur Fellow, Finalist for the National Book Award'} image={'https://images.squarespace-cdn.com/content/v1/5495fc96e4b0d669a5b4ba80/1468682922746-UM4ZZNE4UQMBNYK5QSIN/ke17ZwdGBToddI8pDm48kIkGgJEtk9eTMNWBgWK8yYR7gQa3H78H3Y0txjaiv_0faShnVfr-ySw9qgw5FxrvMzL5XwEKbTsZ74nkctAu9id75n5hQOsnYPWZCBGHRzfSeoqS5JAWrnb1436X_b_yVZrfa1Z6IeUrCPboCAmmHZnmK5I6TQGQLFZ5GyEwoB33wfIIdgHU0fybch_j5WC5ag/Ben_Lerner+smaller.jpg'} name='Lerner' > </AuthorCard>
 </Popup> argues in his book "The Hatred of Poetry" that the real problem with poetry is poems. We expect poetry to have the power to stir some profound passion or connection in us—to take some thought or emotion in the poet's mind and deliver it, still pristinely magnificent, to the reader or listener. Plato even banned poets from his ideal Republic because of this potential power. However, Lerner argues, poems never live up to poetry's promise. Every poem, to him, is a failed poem because it fails to deliver whatever revelation occurred in the poet's head into the reader or listener's head. Even the best poem is nothing but an attempt to capture the original poem that <Popup on='click' pinned trigger={<span className='poetryUnderlinedText'> was in the poet's mind</span>}> <ITooDislikeIt></ITooDislikeIt>   </Popup>. 
   Lerner repeats the likely apocryphal story of Caedmon the poet from Bede's 8<sup>th</sup> century history of England. 
   </p>
   <blockquote> According to Bede’s <i>Historia</i>, Caedmon was an illiterate cowherd who couldn’t sing. When, during this or that merry feast, it was decided that everyone in turn would contribute a song, Caedmon would withdraw in embarrassment, maybe claiming he had to go look after the animals. One night, somebody tries to pass Caedmon the harp after dinner, and he flees to the stable. There among the ungulates he drifts off and is visited by a mysterious figure, probably God. “You must sing to me,” says God. “I can’t,” Caedmon says, if not in these words. “That’s why I’m sleeping in the stable instead of drinking mead with my friends around the fire.” But God (or an angel or demon—the text is vague) keeps demanding a song. “But what should I sing?” asks Caedmon, who I imagine is desperate, cold-sweating through a nightmare. “Sing the beginning of created things,” instructs the visitor. Caedmon opens his mouth and, to his amazement, gorgeous verses praising God pour forth.
   Caedmon awakes as a poet, and eventually becomes a monk. But the poem he sings upon waking is not, according to Bede, as good as the poem he sang in his dream, “for songs, be they never so well made, cannot be turned of one tongue into another, word for word, without loss to their grace and worthiness.”
</blockquote>
<p>
    We see almost this exact story retold in a <Popup content="Ben Stiller makes a very brief cameo in the video. See if you can catch it." on='click' trigger={<span className='poetryUnderlinedText'>music video</span>}></Popup> by Jack Black's band, Tenacious D:
   </p>
   <Media queries={{
          small: "(max-width: 599px)",
          medium: "(min-width: 600px) and (max-width: 1199px)",
          large: "(min-width: 1200px)"
        }}>
          {matches => (
            <Fragment>
              {matches.small && <iframe width="375px" height="250px" src="https://www.youtube.com/embed/_lK4cX5xGiQ?start=59" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
}
              {matches.medium && <iframe width="500px" height="400px" src="https://www.youtube.com/embed/_lK4cX5xGiQ?start=59" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
}
              {matches.large && <iframe width="100%" height="700px" src="https://www.youtube.com/embed/_lK4cX5xGiQ?start=59" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
}
            </Fragment>
          )}
        </Media>
   
   
   <p>
   The song they are recording is just a tribute to the song they sang for the devil. In the same way, Lerner argues, the poem you read is just a tribute to the real thing that happened in the poet's head. Despite what Ben Lerner says, here are a few poems I do think really work. 
   </p>
   <p>
   This is one called "Next, Please" by <Popup  on='click' trigger={<span className='poetryUnderlinedText'>Philip Larkin</span>}> <AuthorCard name='Philip Larkin' meta={'Poet'} description={'The other poet laureate'} image={'https://www.laphamsquarterly.org/sites/default/files/styles/tall_rectangle_custom_user_small_2x/public/images/contributor/larkin_360x450.jpg?itok=JK9biKCe&timestamp=1410446146'} > </AuthorCard>
 </Popup>. What I find interesting and depressing about the poet Philip Larkin is his relationship to that idea of "the fear of missing out." That anxiety you have when other people are together enjoying something that you seem to be missing out on. Philip Larkin isn't afraid of missing out, he has missed out. Missing out on enjoyable experiences is just his default state of being. Here is one of my favorite poems by him. 
   </p>
   <h3> Next, Please </h3>
   <pre >{
`Always too eager for the future, we
Pick up bad habits of expectancy.
Something is always approaching; `}<Popup content="This feels awkward where it is. Adds to the disappointing feeling at the end of the stanza." on='click' trigger={<span className='poetryUnderlinedText'>every day</span>} />

{`
Till then we say,

Watching from a bluff the tiny, clear
Sparkling`} <Popup content="Larkin is using 'armada' at what seems to be a cross purpose to its meaning. Queen Elizabeth was nonplussed when the armadas came her way. But I think I may be looking a little too closely at this point." on='click' trigger={<span className='poetryUnderlinedText'>armada of promises</span>} /> {`draw near.
How slow they are! And how much time they waste,
Refusing to make haste!

Yet still they leave us holding wretched`} <Popup content="This always seemed like an odd word choice here. Looking it up though, I realized that the stalk is the stem but not the flower. These promises bring the event you expected (sometimes, at least) but not the satisfaction you had anticipated." trigger={<span className='poetryUnderlinedText'>stalks</span>} />

{`
Of disappointment, for, though nothing balks
Each big approach, leaning with brasswork `}<Popup content="Prink (verb) - To spend time making minor adjustments to one's appearance; primp" trigger={<span>prinked</span>} />
{`
Each rope distinct,

Flagged, and the figurehead with golden tits
Arching our way, it never anchors; it's
No sooner present than it turns to past.
`}
<Popup content="I consider this such a bad line of poetry. It's not long enough to deliver its rhyme with any satisfaction. It isn't an original phrase. It doesn't give me insight into much of anything. As part of the poem as whole, however, I really appreciate how it causes just the disappointment the poem describes." trigger={<span>Right to the last</span>} />
{`

We think each one will heave to and unload
All good into our lives, all we are owed
For waiting so devoutly and so long.
But we are `}<Popup content="This colon connects these two stanzas. Larkin shows us expectations in front of this colon and realities after it." trigger={<span className='poetryUnderlinedText'>wrong:</span>} ></Popup>

{`

Only one ship is seeking us, a black-
Sailed unfamiliar, towing at her back
`}
<Popup  on='click' trigger={<span className='poetryUnderlinedText'>A huge and birdless silence</span>}>  <Popup.Header>More on Death From Larkin</Popup.Header>
<p className='subheading' >An Excerpt from <a href='https://www.poetryfoundation.org/poems/48422/aubade-56d229a6e2f07' target="_blank" >Aubade</a></p>
    <Popup.Content>
      <pre>
      {`This is a special way of being afraid
No trick dispels. Religion used to try,
That vast moth-eaten musical brocade
Created to pretend we never die,
And specious stuff that says `}{<i>No rational being</i>} {<br></br>}
{<i>Can fear a thing it will not feel</i>}{`, not seeing
That this is what we fear—no sight, no sound,   
No touch or taste or smell, nothing to think with,   
Nothing to love or link with,
The anaesthetic from which none come round.`}
      </pre>
    </Popup.Content>
  </Popup> 
{`. In her wake
No waters breed or break.`
}
   </pre>

<p>
What initially annoyed me about this poem is exactly what I think makes it not just good, but fantastic. The first couplet of each stanza matches up quite nicely: "we" pairs with "expectancy," "clear" with "near," "stalks" with "balks," etc. However the final line of each stanza's second couplet is too short. Read it out loud and those second couplets feel stunted, a little off. Where you had been expecting an enjoyable rhyme you don't get it. This is the poem's brilliance. This poem about disappointment is <i>itself</i> disappointing. This poem both warns you against expectations and in its structure thwarts and deflates your expectations. This is what I think Margret Atwood means when she says that poetry is, "words working overtime."
</p>

<p>
We find another example of words working overtime in the Anglo-Saxon poem "<a href='https://www.wikiwand.com/en/The_Ruin' target="_blank">The Ruin</a>," though in this case it's all the more interesting for being accidental. Anonymously written in the 8th or 9th century, "The Ruin" describes an ancient Roman ruin. However, over the past dozen or so centuries the poem has been subject to some decay and certain fragments are lost. This means that this poem about a ruin is <i>itself</i> a ruin. The structure of the poem is again contributing to its meaning. 
</p>

<p>
As intriguing as the moments when a poem's structure fits its content are the moments when a poem finds itself in a context that seems at odds with its content. For example, this apple commercial quotes Robin Williams in Dead Poets Society who in turn quotes <Popup  on='click' trigger={<span className='poetryUnderlinedText'>Walt Whitman</span>}> <AuthorCard name='Walt Whitman' meta={'Poet'} description={'Whitman is among the most influential poets in the American canon, often called the father of free verse.'} image={'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Walt_Whitman_-_George_Collins_Cox.jpg/440px-Walt_Whitman_-_George_Collins_Cox.jpg'} > </AuthorCard></Popup>. 
</p>

<Media queries={{
          small: "(max-width: 599px)",
          medium: "(min-width: 600px) and (max-width: 1199px)",
          large: "(min-width: 1200px)"
        }}>
          {matches => (
            <Fragment>
              {matches.small && <iframe width="375px" height="250px" src="https://www.youtube.com/embed/Ep2_0WHogRQ" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
}
              {matches.medium && <iframe width="500px" height="400px" src="https://www.youtube.com/embed/Ep2_0WHogRQ" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
}
              {matches.large && <iframe width="100%" height="700" src="https://www.youtube.com/embed/Ep2_0WHogRQ" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
}
            </Fragment>
          )}
        </Media>

        <p>
The poem's call to and celebration of individuality feels undermined by its position in an advertisement whose real call is for you to buy the Apple iPad Air. Likewise, <a href='https://www.youtube.com/watch?v=oXevJJE0YXQ'>this scene</a> from the tv show Fargo has the gangster Mike Milligan 
recite Lewis Carroll's "<a href='https://www.poetryfoundation.org/poems/42916/jabberwocky'>The Jabberwocky</a>" as he goes off to murder a rival for power. 
</p>

<Media queries={{
          small: "(max-width: 599px)",
          medium: "(min-width: 600px) and (max-width: 1199px)",
          large: "(min-width: 1200px)"
        }}>
          {matches => (
            <Fragment>
              {matches.small && <iframe width="375px" height="250px" src="https://www.youtube.com/embed/oXevJJE0YXQ" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
}
              {matches.medium && <iframe width="500px" height="400px" src="https://www.youtube.com/embed/oXevJJE0YXQ" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
}
              {matches.large && <iframe width="100%" height="700" src="https://www.youtube.com/embed/oXevJJE0YXQ" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
}
            </Fragment>
          )}
        </Media>
<p>
The poem's playful rhyme scheme and goofy vocabulary contrast rather starkly with the situation they've been dropped into. However, this mismatched pairing of scene and verse allows for a rich new understanding of the poem. Whereas in the hands of Lewis Carroll it had seemed fluffy and upbeat, in the mouth of actor Bokeem Woodbine we hear it as dark and menacing; the death of the jabberwocky now feels visceral and ominous in a way it hadn't before. Compare that scene with, say, <a href='https://danielfrancisolivieri.github.io/Jabberwocky/' target="_blank" >my own</a> rather cute and bright illustration of it.
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
