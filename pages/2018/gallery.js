import Head from 'next/head'
import Post from '../../layouts/post'
import Title from '../../components/post/title'
import Meta from '../../components/post/meta'
import Figure, { Image } from '../../components/post/figure'
import P from '../../components/post/paragraph'
import OL, { LI as OLI } from '../../components/post/numbers-list'

export default () => (
  <Post>
    <Head><title>The 1-1</title></Head>
    <Title>The 1-1</Title>
    <Meta date="August 20, 2017" />

    <Figure wide>
      <Image src='../../resources/1.jpg' />
    </Figure>

    <P>
    But a good 1-1 can be incredibly valuable to help grow as an engineer, and also provide a perfect opportunity to
    better know and understand another human being. Here’s the basic tips I try to follow for making the 1-1 as valuable as possible:
    </P>

    <Figure wide>
      <Image src="resources/2.png" />
    </Figure>

    <P>
    Short list, but I think it’s a useful framework to enable productive 1-1 conversations. Just like any conversation,
    it’s a bit of a learned art, practice helps a lot, and it’s always a work in progress.
    </P>

    <Figure wide>
      <Image src="resources/3.png" />
    </Figure>

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
