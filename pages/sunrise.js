import Page from '../layouts/main'
import Link from 'next/link'
import { posts } from '../posts'
import Head from 'next/head'

export default () => (
  <Page>
    <Head>
      <title>Tech Specs</title>
    </Head>
    <div className="posts">
      {
        posts.length > 0 ?
          posts.map(({ id, date, title }) => (
            <Post
              id={id}
              key={id}
              date={date}
              title={title}
            />
          ))
          :
          (<p>Coming soon.</p>)
      }
    </div>
  </Page>
)

const Post = ({ id, date, title }) => (
  <div className="post">
    <span className="date">{ date }</span>
    <Link href={`/sunrise/${id}`}><a>{ title }</a></Link>

    <style jsx>{`
      .post {
        margin-bottom: 10px;
      }

      .date {
        display: inline-block;
        width: 140px;
        text-align: right;
        margin-right: 30px;
        color: #999;
      }

      a {
        text-decoration: none;
      }

      @media (max-width: 500px) {
        .post {
          margin-bottom: 15px;
        }

        .date {
          display: block;
          width: inherit;
          text-align: inherit;
          font-size: 11px;
          color: #ccc;
          margin-bottom: 5px;
        }
      }
    `}</style>
  </div>
)
