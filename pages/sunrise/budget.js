import Page from '../../layouts/main'
import Link from 'next/link'
import { costs } from '../../costs'
import Head from 'next/head'

export default () => (
  <Page>
    <Head>
      <title>Budgets</title>
    </Head>
    <div className="costs">
      {
        costs.length > 0 ?
          costs.map(({ id, price, title, more }) => (
            <Cost
              id={id}
              key={id}
              price={price}
              title={title}
              more={more}
            />
          ))
          :
          (<p>Coming soon.</p>)
      }
    </div>
  </Page>
)

const Cost = ({ id, price, title, more }) => (
  <div className="cost">
    <span className="item">{ title }</span>
    <span className="price">{ price }</span>
    <span className="more">{ more }</span>

    <style jsx>{`
      .cost {
        margin-bottom: 10px;
      }

      .item {
        display: inline-block;
        width: 250px;
        text-align: right;
        margin-right: 30px;
        color: #999;
      }

      a {
        text-decoration: none;
      }

      @media (max-width: 500px) {
        .cost {
          margin-bottom: 15px;
        }

        .item {
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
