import Head from 'next/head'
import Post from '../../layouts/post'
import Title from '../../components/post/title'
import Meta from '../../components/post/meta'
import P from '../../components/post/paragraph'
import Code from '../../components/post/code'
import { H2, H3 } from '../../components/post/heading'
import Figure, { Image } from '../../components/post/figure'

export default () => (
  <Post>
    <Head><title>Mercator Map Projection</title></Head>
    <Title>Mercator Map Projection</Title>

    <P>
    After implementing the animation of the simulated sunrise, I showed my work
    to a number of people for feedback. They expressed appreciation for the dynamic sunrise
    animation but confusion around how and why the colors were changing. I also observed
    that they were very curious to find out how the actual sunrise pictures on Instagram. Some
    of them tried to find the picture that the system is pulling colors from on Instagram while
    they were looking at the piece.
    </P>

    <P>
    To help the audience understand that the colors are actually coming from photos
    that were just uploaded by someone else, I created a second component to pin the Instagram
    photos used onto a world map, based on associated geo-location information.
    </P>

    <P>
    As the two programs ran concurrently, the sunrise photos they use needed to
    be synchronized. After the first program downloads the photo, it sends a message over
    the local server with the picture file name and the geo-location information of the current
    sunrise picture to the second program.
    </P>

    <Figure wide>
      <Image src="https://github.com/kikolam/site/raw/master/resources/map.png" />
    </Figure>

    <P>
    This map component displays where the sunrise pictures are currently taken
    from. The map also tells the audience where the sunrise is currently happening. I collected
    over 10,000 pictures that are tagged "#sunrise" from Instagram and recorded whether they
    have associated geo-location data. With the dataset, I was able to estimate about 30% of
    Instagram photos are geotagged. The coordinates of the pictures are accessible in the struct
    created using the Instagram API. I then pin the coordinate of the places on the map using
    another OpenFramework add-on tool, ofxMercatorMap [Vanderlin, 2015]. The system
    then sends a request to the server to find the local time of the pictures uploaded. The audience
    can see the position of the picture that is taken and the time the pictures are uploaded.
    Learning from Christian Marclay’s the Clock, I added an element to share with the audience
    my perception of time (more in the Time and Nature section in Discussion). I keep
    reminding the audience of the local time in their current location to create conversations
    about time and space and to connect the audience with people around the world.
    </P>

    <P>
    I also added the earth’s shadow on the map to help the audience understand where
    the sunrise is currently happening. Over time, the audience can see that the pictures are
    moving across the latitudes.
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
