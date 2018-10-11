import Page from '../layouts/main'
import Link from 'next/prefetch'
import Head from 'next/head'

export default () => (
  <Page>
    <Head>
      <title>Kiko Lam</title>
    </Head>

    <div className="home">
      <div className="main">
        <h2>Kiko Lam</h2>
        <div>
          <div className="section">
            <b>Summary:</b> I'm a software engineer in the day (sometimes at night). I'm passionate about the intersection of art and computation. I like learning, climbing, painting, anything that keeps my brain busy. I live in San Francisco, but was raised in Hong Kong.
          </div>
          <div className="section">
            <b>Work stuff:</b> I work at Twitch, but I don't game.
          </div>
          <div className="section">
            <b>Other stuff:</b>
            <ul>
              <li>You would likely hear my laugh from miles away</li>
              <li>Born in the tropics and was raised in skyscrapers in Hong Kong & Tokyo</li>
              <li>When I was 17, I decided that going to school in the middle of nowhere in  New England would be a good idea</li>
              <li>Love travel, love any sort of new experiences</li>
              <li>I want to bring art closer to people through computation</li>
              <li>I aim to make technology more approchable for everyone</li>
              <li>I love sunrise so much that I made an installation of a <a className="no-margin" target="_blank" href="http://www.thedartmouth.com/article/2015/08/kiko-lam-14-presents-masters-thesis-collaborative-sunrise/">Collaborative #Sunrise</a></li>
            </ul>
          </div>
        </div>
        <br />
        <nav>
          <a target="_blank" href="https://www.instagram.com/kiko.lamb/">Instagram</a>
          <a target="_blank" href="https://twitter.com/_babylam">Twitter</a>
          <a target="_blank" href="https://www.linkedin.com/in/kiko-lam-37a1452a/">LinkedIn</a>
        </nav>
      </div>
    </div>

    <style jsx>{`
      .home {
        display: flex;
        justify-content: center;
      }

      .main {
        width: 40%;
      }

      @media (max-width: 950px) {
        .main {
          width: 70%;
        }
      }

      @media (max-width: 600px) {
        .main {
          width: 100%;
          margin: 0 10px;
        }
      }

      h2 {
        font-size: 20x;
        font-weight: normal;
        text-align: center;
        margin-bottom: 30px;
      }

      nav {
        margin-top: 20px;
        text-align: center;
      }

      a {
        display: inline-block;
        margin: 0 15px;
        text-decoration: none;
      }

      .no-margin {
        margin: 0px !important;
      }

      .section {
        margin-bottom: 10px;
        border-bottom: 1px solid #d3d3d3;
        padding-bottom: 10px;
      }
    `}</style>
  </Page>
)
