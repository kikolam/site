import Head from 'next/head'
import Post from '../../layouts/post'
import Title from '../../components/post/title'
import Meta from '../../components/post/meta'
import Snippet from '../../components/post/snippet'
import P from '../../components/post/paragraph'
import OL, { LI as OLI } from '../../components/post/numbers-list'

export default () => (
  <Post>
    <Head><title>Introduction</title></Head>
    <Title>Introduction</Title>
    <Meta date="March 10, 2018" />

    <P>
    On January 1st, 2015, I watched the first sunrise of the year in Cartagena, Colombia.
    I sat on the pier and watched the sky changed colors. The sun slowly raised above the
    horizon and darkness subsides. The sky changed from dark blue to purple, from purple to
    orange and yellow. There were so many colors that are beyond my words for description.
    I was enchanted by the colors produced by nature and decided to take on the challenge
    of replicating these colors and the sunrise watching experience for a wider audience using
    computational methods.
    </P>

    <P>
    When the sun rises, it projects magical colors on the sky. The sun and the sky
    jointly compose the greatest beauty found in nature. The colors seen at sunrise arise from
    a phenomenon called scattering [Bohren and Fraser, 1985]. On their path through the
    atmosphere shorter wavelengths are scattered out of the line of sight. When the sun is low
    on the horizon, sunlight passes through more air at sunrise than during the day. Thus there
    more molecules to scatter the violet and blue light away from your eyes. The other colors
    continue on their way to your eyes. This is why sunsets are often warm colors, like yellow,
    orange, and red [Lynch and Livingston, 2001].
    </P>

    <P>
    The natural cycle of light and darkness is necessary for our circadian clocks to
    function, and sunlight has many therapeutic uses, including coping depression, controlling
    toxins, and promoting the synthesis of vitamin D [Hansen, 2003]. As the modern artificial
    lighting predominantly extends evening activity and our exposure to light, and as bright
    light during the evening is known to delay circadian rhythms, this chronic exposure gradually
    leads to seasonal mental disorder. Research has shown that exposure to sunrise is
    can ease mental health issues and stress. [Zhang et al., 2015] The sun is a symbol of enlightenment,
    spirituality, eternity, warmth, and optimism. Through this project, I hope to
    encourage people to get up early to watch sunrises and enjoy these precious moments in
    life produced by the nature.
    </P>

    <P>
    As Earth orbits, sunlight reaches different parts of the world at different times
    (As we can see from figure 2, half of the African continent is exposed to sunlight and the
    western part is still in darkness at the same moment). The sunrises locations move along
    the longitude throughout the day [Pang et al., 1988]. The rotation of the earth around the
    sun gives us a notion of time, and we assign different time zones to different areas in the
    world.
    </P>

    <P>
    With the mission statement, “To capture and share the world’s moments", Instagram
    enables users to experience moments in others’ lives through pictures as they happen
    [Instagram, 2015]. Instagram users around the world try to capture the beautiful sunrisescape
    in real time to share the pictures on their feed. There are currently about 25,000,000
    pictures that are #sunrise uploaded on Instagram. A new picture with the hashtag "#sunrise"
    is uploaded every 1-5 second [Instagram, 2015].
    </P>

    <P>
    This installation, Collaborative #Sunrise, is started for the above reasons, to create
    an ongoing sunrise watching experience that is collectively created by Instagram users
    from around the world. I created a system to download the latest #sunrise pictures from
    Instagram in real time and pin the pictures to the world map using their associated geolocation
    information. I then run an algorithm to extract the sky colors that are channeled into
    a composition to create an eternal sunrise. This animated composition reflects the everchanging
    colors that are captured by Instagram users in a certain part of the world in real
    time.
    </P>

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
