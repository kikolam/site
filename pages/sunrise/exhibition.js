import Head from 'next/head'
import Post from '../../layouts/post'
import Title from '../../components/post/title'
import Meta from '../../components/post/meta'
import Snippet from '../../components/post/snippet'
import P from '../../components/post/paragraph'
import OL, { LI as OLI } from '../../components/post/numbers-list'

export default () => (
  <Post>
    <Head><title>Exhibition Design Specs</title></Head>
    <Title>EXHIBITION DESIGN SPECS</Title>

    <P>
        White silhouettes of trees projected 8 meters high onto the facades of several buildings in a city.
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
        I had an overarching goal to recreate a meaningful sunrise experience where users
        would feel connected to a world that was greater than themselves alone. The current design
        of the digital displays and audience experience is the product of many experiments and
        iterations with informal user testing.
    </P>

    <P>
        Initially, the installation was set to be in an dark indoor environment due to the
        limited constraints of a projection project. However, I thought it was a contradicting idea
        to place the installation indoor while I was trying to create an experience for the audience
        to connect to nature. I went through weeks of communications with various departments
        of the school, I finally got approval to run the installation in an outdoor public venue.
    </P>

    <P>
        In order to encourage participation from passive audience, the installation is designed
        to be outdoor in a public venue with high traffic, simulating the experiences created
        by Trafalgar Sun and The Weather Project. The piece is meant to be viewed at a large
        scale in an outdoor setting without bright light, for appropriate periods of time to create
        the experience of watching the sunrise. The installation itself consists of two 5 x 14 foot
        images of both the map and artificial sunrise projected onto the sides of the “PlayCube” in
        some public outdoor venues. Rear projection materials were installed on both windows on
        the sides of the "PlayCube". For this installation, the trailer was parked on Blunt Lawn,
        outside Baker Berry Library at Dartmouth College in Hanover, NH. This is a prime location
        with really high traffic where many students and local residents pass by on their way to
        classes and dining halls and various evening activities. Onlookers can stop and appreciate
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
