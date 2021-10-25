import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>gengogo5.com</title>
      </Head>
      <section className="">
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li className="text-xl pb-3" key={id}>
              <Link href={`/posts/${id}`}>
                <a className="block">
                  <div className="text-gray-500 text-base">
                    <Date dateString={date} />
                  </div>
                  {title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
