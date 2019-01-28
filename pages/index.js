import Page from '../layouts/main'
import Link from 'next/prefetch'
import Head from 'next/head'
import OL, { LI as OLI } from '../components/post/numbers-list'

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
            <b>Summary:</b> I'm a software engineer in the day and a computational artist at night. I'm passionate about the intersection of art and computation. I like learning, climbing, painting, anything that keeps my brain busy. I live in San Francisco, but was raised in Hong Kong. You would likely hear my laugh from miles away.
          </div>
          <div className="section">
            <b>Work stuff:</b> I work at Twitch, but I don't game.
          </div>
          <div className="section">
            <b>Quick Life Story:</b>
            <ul>
              <li>Born in the tropics and was raised in skyscrapers in Hong Kong & Tokyo</li>
              <li>Love travel, love any sort of new experiences</li>
              <li>Applied in secret to Dartmouth and somehow got in with a full scholarship</li>
              <li>Fell in love with computational art and computer science at the same time</li>
              <li>Convinced the school to let me study both for my MS degree</li>
              <li>Built a machine learning model that turned Instagram sunrise photos into a real-time <a className="no-margin" target="_blank" href="http://www.thedartmouth.com/article/2015/08/kiko-lam-14-presents-masters-thesis-collaborative-sunrise/">algorithmically-generated sunrise</a></li>
              <li>This was the first computer science thesis to be publicly displayed as an art exhibit at Dartmouth College</li>
              <li>Want to bring art closer to people through computation</li>
              <li>Love to make technology more approchable for everyone</li>
            </ul>
          </div>
        </div>
        <br />
        <nav>
          <a target="_blank" href="https://www.instagram.com/kiko.lamb/">Instagram</a>
          <a target="_blank" href="https://twitter.com/_babylam">Twitter</a>
          <a target="_blank" href="https://www.linkedin.com/in/kikolam/">LinkedIn</a>
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
