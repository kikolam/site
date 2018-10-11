import Head from 'next/head'
import Post from '../../layouts/post'
import Title from '../../components/post/title'
import Youtube from '../../components/post/youtube'
import Meta from '../../components/post/meta'
import Snippet from '../../components/post/snippet'
import P from '../../components/post/paragraph'
import OL, { LI as OLI } from '../../components/post/numbers-list'

export default () => (
  <Post>
    <Head><title>Collaborative #Sunrise</title></Head>
    <Title>WHAT IS IT?</Title>

    <P>
    Collaborative #Sunrise is a computational art installation that draws on themes of nature,
    color, time and social connectedness, using Instagram photos from around the world
    to create an eternal sunrise.
    </P>

    <P>
    Collaborative #Sunrise consists of two components, a synthesized digital animation of
    an Eternal Sunrise and the Collaborative #Sunrise Map. The first component downloads
    Instagram photos with the hashtag “#sunrise” in real time and uses a machine learning
    algorithm to filter out advertisements and other unrelated content. Another computer algorithm
    extracts colors from the photos and channels them into a synthetic animation of what
    the current sunrise looks like. The second component uses a mechanism that pins the Instagram
    photos used to create the synthetic sunrise onto a world map, based on associated
    geo-location information. The installation itself consists of two 5 by 14 foot images of both
    the map and artificial sunrise projected onto the sides of the “PlayCube”.
    </P>

    <P>
    Using the abundance and instantaneity of these pictures made possible by technology
    and the cultural infrastructure of social media, I aim to translate this precious real life
    moment into a experience of perpetual digital content.
    </P>

    <Youtube
      videoId="WNrF1HJqXNE"
    />


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
