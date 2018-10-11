import Head from 'next/head'
import Post from '../../layouts/post'
import Title from '../../components/post/title'
import Youtube from '../../components/post/youtube'
import Meta from '../../components/post/meta'
import Snippet from '../../components/post/snippet'
import Quote from '../../components/post/quote'
import P from '../../components/post/paragraph'
import OL, { LI as OLI } from '../../components/post/numbers-list'
import { H2, H3 } from '../../components/post/heading'

export default () => (
  <Post>
    <Head><title>Collaborative #Sunrise</title></Head>
    <Title>VIDEO & INTERVIEWS</Title>

    <P>(please refresh if the video player doesn't show up) </P>
    <Youtube
      videoId="WNrF1HJqXNE"
    />

    <H2>Audience Reactions</H2>
    <OL>1. Relationship with time and Nature</OL>
    <P>
    Audience appreciated the ability to capture the accents of nature in the piece. Collaborative
    #Sunrise encouraged the audience to think about where the sunrise is happening
    currently on the planet. Some of the quotes are highlighted below:
    </P>
    <Quote>
    “It’s a really cool idea. You don’t really think about what’s going on in other
    parts of the world, so it’s nice seeing exactly where the sunrise is happening at
    a given time.”
    </Quote>
    <Quote>
    “"It captures the beauty of the entire globe which is always going. I think it is
    awesome."”
    </Quote>
    <Quote>
    “"It shows obviously sunrise is happening all the times and there is so much
    diversity in term of what sunrises can look like across the globe"”
    </Quote>

    <OL>2. Approachability of the Installation</OL>
    <P>
    The group liked that Collaborative #Sunrise used technology to create an installation
    that the general public can relate to. People love watching sunrises and they talk
    about them all the time, relating back to The Weather Project of Olafur Eliasson.
    Some of the quotes are highlighted below:
    </P>
    <Quote>
    "It is incredible. I just talked to her about her inspiration behind it and just
    the fact that she took such a personal experience of sunrise and turned it into
    her project is really inspiring. I think everyone is just so fascinated by it. It’s
    beautiful. I love it."
    </Quote>
    <Quote>
    "Your idea was terrific, and the exhibition was engaging. It was hard to leave,
    due to the curiosity it evoked about each succeeding image."
    </Quote>
    <Quote>
    “It’s often a problem that technology is not super accessible, so it’s great to see
    technology used to reach out to lots of different people”
    </Quote>
    <Quote>
    "I was walking by the installation and decided to stop and take a look. I was able
    to appreciate “Collaborative #Sunrise” despite having never studied computer
    science."
    </Quote>

    <OL>3. Computational Challenges</OL>
    <P>
    For audience members who had a computational background, they were able to discuss
    the computational challenges behind the piece. Some of the quotes are highlighted
    below:
    </P>
    <Quote>
    "One of the things that is pretty big right now is to able to correlate different
    images and put it all together and analyze the images and trying to figure out
    what is actually going on in an image. So it is really cool."
    </Quote>
    <Quote>
    "Just the fact that it is collaborative, so it is pulling in from people’s Instagram
    accounts. Instagram is big obviously. There is a lot going on there."
    </Quote>
    <Quote>
    "I am surprised that the program is able to filter out the selfies. It is great!
    We haven’t seen anything crazy [referring to selfies, nudity, advertisements etc]
    yet."
    </Quote>

    <style jsx>{`
        a {
            cursor: pointer
        }
        a:hover {
            text-decoration: underline
        }
        a:after {
            display: none
        }
    `}</style>
</Post>
)
