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
    <Title>VIDEO & INTERVIEWS</Title>

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
