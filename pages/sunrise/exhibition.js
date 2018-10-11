import Head from 'next/head'
import Post from '../../layouts/post'
import Title from '../../components/post/title'
import Meta from '../../components/post/meta'
import Snippet from '../../components/post/snippet'
import P from '../../components/post/paragraph'
import OL, { LI as OLI } from '../../components/post/numbers-list'
import Figure, { Image } from '../../components/post/figure'

export default () => (
  <Post>
    <Head><title>Exhibition Design Specs</title></Head>
    <Title>EXHIBITION DESIGN SPECS</Title>

    <P>
        Inspired by Tree from Simon Heijdens, I would like to propose to have #sunrise to be a
        67.5' by 30' projection on a clear and plain colored facade of a building.
        The map showing the corresponding sunrise picture would be displayed on an interactive monitor nearby.
    </P>

    <Figure wide>
      <Image src="https://github.com/kikolam/site/raw/master/resources/tree.jpg" />
    </Figure>

    <P>
        This project crosses multiple disciplines including Computer Science and Installation
        Arts. The installation attracts a diverse crowd and is universally appealing. This is
        also an art piece for the general public and anyone who is interested in computational arts
        or just sunrise watching.
    </P>

    <P>
        In order to encourage participation from passive audience, the installation is designed
        to be outdoor in a public venue with high traffic, simulating the experiences created
        by Trafalgar Sun and The Weather Project. The piece is meant to be viewed at a large
        scale in an outdoor setting without bright light, for appropriate periods of time to create
        the experience of watching the sunrise. Onlookers can stop and appreciate
        the beauty of the ever-changing colors of the sky of the sunrises from different locations.
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
