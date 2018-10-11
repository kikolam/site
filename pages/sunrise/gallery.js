import Head from 'next/head'
import Post from '../../layouts/post'
import Title from '../../components/post/title'
import Meta from '../../components/post/meta'
import Figure, { Image } from '../../components/post/figure'
import P from '../../components/post/paragraph'
import OL, { LI as OLI } from '../../components/post/numbers-list'

export default () => (
  <Post>
    <Head><title>Gallery</title></Head>
    <Title>GALLERY</Title>
    <Meta date="August 20, 2017" />

    <Figure wide>
      <Image src="https://github.com/kikolam/site/raw/master/resources/5.png" />
    </Figure>

    <Figure wide>
      <Image src="https://github.com/kikolam/site/raw/master/resources/2.png" />
    </Figure>

    <Figure wide>
      <Image src="https://github.com/kikolam/site/raw/master/resources/3.png" />
    </Figure>

    <Figure wide>
      <Image src="https://github.com/kikolam/site/raw/master/resources/4.png" />
    </Figure>

    <Figure wide>
      <Image src="https://github.com/kikolam/site/raw/master/resources/1.png" />
    </Figure>

    <Figure wide>
      <Image src="https://github.com/kikolam/site/raw/master/resources/6.png" />
    </Figure>

    <Figure wide>
      <Image src="https://github.com/kikolam/site/raw/master/resources/7.png" />
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
