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
    color, time and social connectedness, built a machine learning model that turned Instagram
    sunrise photos into a real-time algorithmically-generated sunrise. This digital sunrise is
    projected on facades of building and experienced publicly without bright day light.
    </P>

    <P>
    Collaborative #Sunrise consists of two components, a real-time algorithmically-generated
    sunrise and the Collaborative #Sunrise Map. The first component downloads
    Instagram photos with the hashtag “#sunrise” in real time and uses a machine learning
    algorithm to filter out unrelated content. Another computer algorithm
    extracts colors from the photos and channels them into a synthetic animation of what
    the current sunrise looks like. The second component uses a mechanism that pins the Instagram
    photos used to create the synthetic sunrise onto a world map, based on associated
    geo-location information. The installation itself consists of a 90' by 40' projection of
    the sunrise on a clear plain colored facade and the map displayed on an interactive monitor nearby.
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
